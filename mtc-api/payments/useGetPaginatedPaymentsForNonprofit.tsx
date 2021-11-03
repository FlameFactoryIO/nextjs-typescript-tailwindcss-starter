import { useInfiniteQuery } from 'react-query';
import client from '../apiClient';
import React from 'react';

const getResults = (data) => (data || []).flatMap((item) => item.results);

const getPaginatedPayment = async ({ nonprofitId, offset }) => {
  const { data } = await client.get(`/payments/nonprofit/${nonprofitId}`, {
    params: {
      offset,
    },
  });
  return data;
};

export const useGetPaginatedPaymentsForNonprofit = ({
  nonprofitId,
  options,
}) => {
  const query = useInfiniteQuery(
    ["DONATIONS_PAGINATED", nonprofitId],
    ({ pageParam }) => {
      return getPaginatedPayment({ nonprofitId, offset: pageParam });
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
