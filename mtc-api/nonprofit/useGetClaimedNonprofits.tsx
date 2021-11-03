import { useQuery } from 'react-query';
import client from '../apiClient';
import Nonprofit from "../../dtos/Nonprofit";

export const getFeaturedNonprofits = (): Promise<Nonprofit[]> => {
  return client.get(`/nonprofits/featured`).then(({ data }) => data);
};

export const getNonprofitsClaimed = (): Promise<Nonprofit[]> => {
  return client.get(`/nonprofits/claimed`).then(({ data }) => data);
};

export const useGetClaimedNonprofit = (params, config) => {
  return useQuery<Nonprofit[]>(
    ["NONPROFITS_CLAIMED"],
    getNonprofitsClaimed,
    config,
  );
};
