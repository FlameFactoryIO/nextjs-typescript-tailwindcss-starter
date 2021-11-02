import { useMutation } from 'react-query';
import client from '../apiClient';
import ClaimPageRequest from "../../dtos/ClaimPageRequest";

export const claimNonprofitPage = ({ id, ...payload }: ClaimPageRequest) => {
  return client
    .post(`/nonprofit/${id}/claim`, payload)
    .then(({ data }) => data);
};

export const useClaimNonprofitPage = (options) => {
  return useMutation((data: ClaimPageRequest) => claimNonprofitPage(data), options);
};
