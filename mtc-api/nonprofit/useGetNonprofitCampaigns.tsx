import { useQuery } from 'react-query';
import client from '../apiClient';

export const getNonprofitCampaigns = (id) => {
  return client.get(`/nonprofits/${id}/campaigns`).then(({ data }) => {
    return data;
  });
};

const useGetNonprofitCampaigns = (id) => {
  return useQuery(["NONPROFIT_CAMPAIGNS", id], () =>
    getNonprofitCampaigns(id),
  );
};

export default useGetNonprofitCampaigns;
