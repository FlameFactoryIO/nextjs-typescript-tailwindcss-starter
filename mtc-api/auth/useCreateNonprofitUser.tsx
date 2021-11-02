import client from '../apiClient';
import { useMutation } from 'react-query';

export const createNonprofitUser = (payload) => {
  return client
    .post(`/auth/createAccountNonprofit`, payload)
    .then(({ data }) => data);
};

export const useCreateNonprofitUser = (options) => {
  return useMutation((data) => createNonprofitUser(data), options);
};
