import { useQuery } from 'react-query';
import client from '../apiClient';

export const getShareUrl = ({ paypalId, name }) => {
  return client
    .get(`/nonprofits/shareUrl`, {
      params: {
        paypalId,
        name,
      },
    })
    .then(({ data }) => {
      return data.url;
    });
};

const useGetShareUrl = (nonprofit) => {
  return useQuery(
    ["NONPROFIT_SHARE_URL", nonprofit.paypalId + 'tmp_testrefetch'],
    () => getShareUrl(nonprofit),
    {
      cacheTime: 1000 * 60 * 60, // one hour
      staleTime: 1000 * 60 * 60, // one hour
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export default useGetShareUrl;
