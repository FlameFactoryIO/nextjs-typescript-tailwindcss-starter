import { useQuery } from 'react-query';
import client from '../apiClient';

export const getPostFullInfo = (id) => {
  return client.get(`/posts/${id}/fullMetadata`).then(({ data }) => data);
};

export const useGetPost = (id, config) => {
  return useQuery(
    ["POSTS", Number(id)],
    () => getPostFullInfo(id),
    config,
  );
};
