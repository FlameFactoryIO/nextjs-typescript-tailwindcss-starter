import { useInfiniteQuery } from "react-query";
import client from "../apiClient";
import Campaign from "../../dtos/Campaign";
import Interest from "../../dtos/Interest";
import { PaginatedResult } from "../../dtos/PaginatedResult";

export const searchCampaigns = async ({
  name,
  location,
  interests,
  offset,
  limit,
} : {
  name?: string,
  location?: string,
  interests?: Interest[],
  offset?: number,
  limit?: number,
  options?: any,
}): Promise<PaginatedResult<Campaign>> => {
  return client.get(`/v2/campaigns`, {
    params: {
      name,
      location,
      interests,
      offset,
      limit
    },
  }).then(({ data }) => {
    return data;
  });
};

export const getTrendingCampaigns = (): Promise<Campaign[]> => {
  return client.get(`/v2/campaigns/trending`).then(({ data }) => {
    return data.results;
  });
};

const getResults = (data) => (data || []).flatMap((item) => item.results);

export const useSearchCampaigns = ({
  name,
  location,
  interests,
  options,
} : {
  name?: string,
  location?: string,
  interests?: Interest[],
  options?: any,
}) => {
  const query = useInfiniteQuery(
    ["CAMPAIGN_SEARCH"],
    ({ pageParam }) => {
      return searchCampaigns({
        name,
        location,
        interests,
        offset: pageParam,
        limit: 25,
      });
    },
    {
      ...options,
      getNextPageParam: (lastGroup, allGroups) => {
        const results = getResults(allGroups);
        if (results.length >= +(lastGroup?.pageInfo?.total || 0)) {
          return false;
        }
        return results.length;
      },
    },
  );

  return {
    ...query,
    data: query?.data && {
      results: getResults(query.data?.pages),
      pageInfo: query?.data?.pages?.[0]?.pageInfo,
    },
  };
};
