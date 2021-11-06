import { useInfiniteQuery } from "react-query";
import client from "../apiClient";

export interface PaginatedResult<T> {
  data?: T[],
  pageInfo?: {
    total: number,
  }
}

export interface Donation {
  id: string,
  donor: string,
  amount: number,
  nonprofit: string,
  date: string,
}

export const getDonations = async ({type, offset, limit} : {type: "top" | "recent", offset: number, limit: number}): Promise<PaginatedResult<Donation>> => {
  const { data } = await client.get(`/donations/${type}`, {
    params: {
      offset,
      limit,
    },
  });
  return data;
};

const getResults = (data) => (data || []).flatMap((item) => item.results);

export const useDonations = ({type, options = {}} : {type: "top" | "recent", options?: any}) => {
  const query = useInfiniteQuery(
    ["DONATIONS", type],
    ({ pageParam }) => {
      return getDonations({
        type,
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
