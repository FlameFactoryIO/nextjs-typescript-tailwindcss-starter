import { useMutation } from 'react-query';
import client from '../apiClient';

export const login = (payload) => {
  return client.post(`/v2/users/login`, payload).then(({ data }) => data);
};

export const useLogin = (options) => {
  return useMutation((data) => login(data), options);
};
