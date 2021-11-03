import { useQuery } from 'react-query';
import client from '../apiClient';

export const getInterests = () => {
  return client.get(`/interests`).then(({ data }) => data);
};

export const useGetInterests = (config) => {
  return useQuery(["INTERESTS"], getInterests, config);
};
