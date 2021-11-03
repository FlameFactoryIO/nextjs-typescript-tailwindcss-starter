import { useQuery } from 'react-query';
import client from '../apiClient';

export const getClosedCampaigns = (id) => {
  return client.get(`/nonprofits/${id}/closed-campaigns`).then(({ data }) => {
    return data;
  });
};

export const useGetClosedCampaigns = (id, options) => {
  return useQuery(
    ["CLOSED_CAMPAIGNS", id],
    () => getClosedCampaigns(id),
    options,
  );
};
