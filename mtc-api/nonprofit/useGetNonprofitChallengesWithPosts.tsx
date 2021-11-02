import { useQuery } from 'react-query';
import client from '../apiClient';

export const getNonprofitChallengesWithPosts = (id) => {
  return client.get(`/nonprofit/${id}/challenges`).then(({ data }) => data);
};

export const useGetNonprofitChallengesWithPosts = (id, config) => {
  return useQuery(
    ["NONPROFIT_CHALLENGE_WITH_POSTS", id],
    () => getNonprofitChallengesWithPosts(id),
    config,
  );
};
