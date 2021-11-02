import client from '../apiClient';
import { useMutation } from 'react-query';

const forgotPassword = (payload) => {
  return client
    .post(`/nonprofit/forgot-password`, payload)
    .then(({ data }) => data);
};

const resetPassword = (payload) => {
  return client
    .post(`/nonprofit/reset-password`, payload)
    .then(({ data }) => data);
};

export const useForgotPassword = (options) => {
  return useMutation((data) => forgotPassword(data), options);
};

export const useResetPassword = (options) => {
  return useMutation((data) => resetPassword(data), options);
};
