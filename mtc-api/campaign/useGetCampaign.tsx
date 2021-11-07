import { useQuery } from 'react-query';
import client from '../apiClient';

export const getCampaign = (id, action?) => {
  return client
    .get(`/campaigns/${id}`, {
      params: { action },
    })
    .then(({ data }) => data);
};

export const useGetCampaign = (id, config) => {
  return useQuery(["CAMPAIGN", id], () => getCampaign(id), config);
};
