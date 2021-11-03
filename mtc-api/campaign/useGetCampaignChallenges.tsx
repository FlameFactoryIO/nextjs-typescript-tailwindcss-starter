import { useQuery } from 'react-query';
import client from '../apiClient';

export const getCampaignChallenges = (id) => {
  return client.get(`/campaigns/${id}/challenges`).then(({ data }) => data);
};

export const useGetCampaignChallenges = (id, config) => {
  if (!id) return { status: false, data: null };
  return useQuery(
    ["NONPROFIT_CHALLENGE", id],
    () => getCampaignChallenges(id),
    config,
  );
};
