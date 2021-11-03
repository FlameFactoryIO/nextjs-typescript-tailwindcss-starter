import { useQuery } from 'react-query';
import client from '../apiClient';

export const getChallengeStats = (id) => {
  return client.get(`/challenges/${id}/stats`).then(({ data }) => data.data);
};

export const useGetChallengeStats = (id, config) => {
  return useQuery(
    ["CHALLENGES", id],
    () => getChallengeStats(id),
    config,
  );
};
