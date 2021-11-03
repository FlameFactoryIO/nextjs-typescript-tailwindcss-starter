import { useQuery } from 'react-query';
import client from '../apiClient';
import Campaign from "../../dtos/Campaign";

export const getCampaigns = (): Promise<Campaign[]> => {
  return client.get(`/v2/campaigns`).then(({ data }) => {
    return data;
  });
};

export const getTrendingCampaigns = (): Promise<Campaign[]> => {
  return client.get(`/v2/campaigns/trending`).then(({ data }) => {
    return data;
  });
};

export const useGetCampaigns = (config) => {
  return useQuery(
    ["CAMPAIGNS"],
    getCampaigns,
    config,
  );
};
