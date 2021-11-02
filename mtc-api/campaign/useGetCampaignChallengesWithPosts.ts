import { useQuery } from 'react-query';
import client from '../apiClient';

export const getCampaignChallengesWithPosts = (id) => {
  return client
    .get(`/campaigns/${id}/challengesWithPosts`)
    .then(({ data }) => data);
};

export const useGetCampaignChallengesWithPosts = (id, config) => {
  if (!id) return { status: false, data: null };
  return useQuery(
    ["CAMPAIGN_CHALLENGE_WITH_POSTS", +id],
    () => getCampaignChallengesWithPosts(id),
    config,
  );
};
