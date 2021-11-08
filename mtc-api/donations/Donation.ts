import client from "../apiClient";
import { useInfiniteQuery } from "react-query";
import { PaginatedResult } from "../../dtos/PaginatedResult";

type QueryType = "nonprofit" | "campaign" | "top" | "recent";

export interface Donation {
  id: string,
  donor: string,
  amount: number,
  nonprofit: string,
  date: string,
}

export const getDonations = async ({
  type, nonprofitName, campaignId, offset, limit
} : {
  type: QueryType,
  nonprofitName?: string,
  campaignId?: number,
  offset: number,
  limit: number,
}): Promise<PaginatedResult<Donation>> => {
  const { data } = await client.get(`/donations/${type}`, {
    params: {
      nonprofitName,
      campaignId,
      offset,
      limit,
    },
  });
  return data;
};

const getResults = (data) => (data || []).flatMap((item) => item.results);

export const useDonations = ({
  type, nonprofitName, campaignId, options = {}
} : {
  type?: QueryType,
  nonprofitName?: string,
  campaignId?: number,
  options?: any
}) => {
  const query = useInfiniteQuery(
    ["DONATIONS", type],
    ({ pageParam }) => {
      return getDonations({
        type,
        nonprofitName,
        campaignId,
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
