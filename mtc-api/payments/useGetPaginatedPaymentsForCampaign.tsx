import { useInfiniteQuery } from 'react-query';
import client from '../apiClient';
import React from 'react';

const getResults = (data) => (data || []).flatMap((item) => item.results);

const getPaginatedPaymentsForCampaign = async ({ id, offset }) => {
  const { data } = await client.get(`/payments/campaigns/${id}`, {
    params: {
      offset,
    },
  });
  return data;
};

export const useGetPaginatedPaymentsForCampaign = ({ campaignId, options }) => {
  const query = useInfiniteQuery(
    ["DONATIONS_PAGINATED_CAMPAIGN", campaignId],
    ({ pageParam }) => {
      return getPaginatedPaymentsForCampaign({
        id: campaignId,
        offset: pageParam,
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
