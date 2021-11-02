import { useQuery } from 'react-query';
import client from '../apiClient';

export const getPaypalAuthToken = () => {
  return client
    .get('/payment/auth/header')
    .then(({ data }) => data.data.Authorization);
};

const usePaypalToken = () => {
  return useQuery("PAYPAL_TOKEN", getPaypalAuthToken, {
    cacheTime: 1000 * 60 * 60, //one hour
    staleTime: 1000 * 60 * 60, //one hour
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default usePaypalToken;
