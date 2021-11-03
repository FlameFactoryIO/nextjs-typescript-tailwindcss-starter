import { useQuery } from 'react-query';
import client from '../apiClient';

export const getClaimPageRequest = (id) => {
  return client.get(`/nonprofits/claimRequest/${id}`).then(({ data }) => {
    return data;
  });
};

const useGetClaimPageRequest = (id) => {
  return useQuery(["NONPROFIT_CLAIM_PAGE_REQUEST", id], () =>
    getClaimPageRequest(id),
  );
};

export default useGetClaimPageRequest;
