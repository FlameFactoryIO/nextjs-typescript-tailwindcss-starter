import { useMutation } from 'react-query';
import client from '../apiClient';
import Campaign from "../../dtos/Campaign";

export const increaseCampaignShares = (id) => {
  return client.post(`/campaigns/${id}/shares`).then(({ data }) => {
    return data;
  });
};

export const useIncreaseCampaignShares = (campaign: Campaign) => {
  return useMutation(() => increaseCampaignShares(campaign.id));
};
