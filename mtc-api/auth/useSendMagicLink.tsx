import client from '../apiClient';
import { useMutation } from 'react-query';

export const sendMagicLink = (payload) => {
  return client
    .post(`/auth/sendLoginMagicLink`, payload)
    .then(({ data }) => data);
};

export const useSendMagicLink = (options) => {
  return useMutation((data) => sendMagicLink(data), options);
};
