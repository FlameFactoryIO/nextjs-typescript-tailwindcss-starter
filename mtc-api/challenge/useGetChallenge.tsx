import { useQuery } from 'react-query';
import client from '../apiClient';

export const getChallenge = (id) => {
  return client.get(`/challenges/${id}`).then(({ data }) => data.data);
};

export const useGetChallenge = (id, config) => {
  return useQuery(["CHALLENGES", id], () => getChallenge(id), config);
};
