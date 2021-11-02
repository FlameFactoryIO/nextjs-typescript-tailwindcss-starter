import {useMutation, useQueryClient} from 'react-query';
import client from '../apiClient';

export const sharePost = (id) => {
  return client.post(`/posts/${id}/shares`).then(({ data }) => data);
};

export const useSharePost = (config = {}) => {
  const queryClient = useQueryClient();
  return useMutation(["SHARE_POST"], (id) => sharePost(id), {
    ...config,
    onMutate(id) {
      queryClient.setQueryData(["POSTS", Number(id)], (prevPost) => ({
        ...prevPost,
        timesShared: +(prevPost?.timesShared || 0) + 1,
      }));
    },
  });
};
