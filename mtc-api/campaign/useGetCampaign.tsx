import { useQuery } from 'react-query';
import client from '../apiClient';

export const getCampaign = (id, action?) => {
  return client
    .get(`/campaigns/${id}`, {
      params: { action },
    })
    .then(({ data }) => {
      return data;
    });
};

export const useGetCampaign = (id, config) => {
  return useQuery(["CAMPAIGNS", id], () => getCampaign(id), config);
};
