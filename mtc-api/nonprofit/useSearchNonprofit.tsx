import { useInfiniteQuery } from "react-query";
import client from "../apiClient";
import paypalClient from "../paypalClient";
import usePaypalToken from "./usePaypalToken";
import debounce from "debounce-promise";

const DEFAULT_NONPROFIT_IMAGE_URL =
  'https://imagesapp.s3.us-east-2.amazonaws.com/non-profit-icon-extra-padding.png';

export const searchNonprofit = async ({
  token,
  search,
  cursor = 0,
  pageSize = 10,
  ...rest
}) => {
  const params = {};
  if (rest) {
    Object.keys(rest).forEach((k) => {
      if (rest[k]) {
        params[k] = rest[k];
      }
    });
  }

  const {
    data: { results },
  } = await paypalClient.get('/customer/charities', {
    params: {
      page: cursor + 1,
      name: search,
      page_size: pageSize,
      ...params,
    },
    headers: {
      Authorization: token,
    },
  });

  const formattedResults = (results || []).map((item) => ({
    id: item.nonprofit_id,
    name: item.name,
    logoUrl: (item.logo_url || '').trim() || DEFAULT_NONPROFIT_IMAGE_URL,
    description: item.description || null,
    contact: {
      website: item.website_url || null,
      email: item.contact?.[0]?.email || null,
    },
    categories: item?.cause_area?.map((area) => area.name) || [],
    address: {
      line1: item?.address?.line1 || null,
      line2: item?.address?.line2 || null,
      city: item?.address?.city || null,
      state: item?.address?.state || null,
    },
  }));
  return {
    results: formattedResults,
    lastPage: formattedResults.length > 0 ? cursor + 1 : null,
  };
};

const searchClaimedNonprofits = async (ids) => {
  const { data } = await client.get('/nonprofits/claimed/search', {
    params: {
      ids,
    },
  });
  return data;
};

const debouncedSearch = debounce(async (params) => {
  const response = await searchNonprofit(params);
  if (response.results.length) {
    const ids = response.results.map((nonprofit) => nonprofit.id).join(',');
    const claimedNonprofits = await searchClaimedNonprofits(ids);
    const pathByClaimedId = claimedNonprofits.reduce(
      (acc, claimedNonprofit) => ({
        ...acc,
        [claimedNonprofit.paypalId]: claimedNonprofit.path,
      }),
      {},
    );
    response.results.forEach((nonprofit) => {
      if (pathByClaimedId[nonprofit.id]) {
        nonprofit.claimedPath = pathByClaimedId[nonprofit.id];
      }
    });
  }

  return response;
}, 200);

export const useSearchNonprofit = ({
  options,
  search,
  pageSize = 10,
  ...rest
}) => {
  if (rest.state === 'ALL') {
    delete rest.state;
  }
  if (rest.cause_area === null) {
    delete rest.cause_area;
  }
  const { data: token } = usePaypalToken();
  const query = useInfiniteQuery(
    ["NONPROFIT_SEARCH", { token, search, pageSize, ...rest }],
    ({ pageParam }) => {
      return debouncedSearch({
        token,
        name: search,
        cursor: pageParam,
        pageSize,
        ...rest,
      });
    },
    {
      getNextPageParam: (lastGroup) => lastGroup.lastPage,
      ...options,
      enabled: !!token && options.enabled,
    },
  );
  const data = (query?.data?.pages || []).reduce(
    (prev, current) => prev.concat(current.results || []),
    [],
  );
  return { ...query, data };
};
