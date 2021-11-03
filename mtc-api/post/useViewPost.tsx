import {useMutation, useQueryClient} from 'react-query';
import client from '../apiClient';
import Post from "../../dtos/Post";

export const viewPost = (id) => {
  return client.post(`/posts/${id}/views`).then(({ data }) => data);
};

export const useViewPost = (config = {}) => {
  const queryClient = useQueryClient();
  // noinspection TypeScriptValidateTypes
  return useMutation((id) => viewPost(id), {
    ...config,
    onMutate(id) {
      queryClient.setQueryData(["POSTS", Number(id)], (prevPost: Post) => ({
        ...prevPost,
        viewCount: +(prevPost?.viewCount || 0) + 1,
        challenge: {
          ...prevPost.challenge,
          viewCount: +(prevPost.challenge.viewCount || 0) + 1,
        },
      }));
    },
  });
};
