import { useQuery } from 'react-query';
import client from '../apiClient';

export const getChallengePosts = (id, limit) => {
  return client
    .get(`/challenges/${id}/posts`, {
      params: {
        limit,
      },
    })
    .then(({ data }) => data.data);
};

export const useGetChallengePosts = (id, config, limit = 20) => {
  if (!id) return { status: false, data: null };
  return useQuery(
    ["NONPROFIT_CHALLENGE_POSTS", id],
    () => getChallengePosts(id, limit),
    config,
  );
};
