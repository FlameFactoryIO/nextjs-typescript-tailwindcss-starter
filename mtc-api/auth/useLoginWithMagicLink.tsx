import client from '../apiClient';
import { useMutation } from 'react-query';

export const loginWithMagicLink = (payload) => {
  return client
    .post(`/auth/loginWithMagicLink`, payload)
    .then(({ data }) => data);
};

export const useLogicWithMagicLink = (options) => {
  return useMutation((data) => loginWithMagicLink(data), options);
};
