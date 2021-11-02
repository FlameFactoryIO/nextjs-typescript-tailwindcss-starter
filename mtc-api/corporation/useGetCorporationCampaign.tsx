import client from '../apiClient';

export const getCorporationCampaign = () => {
  return client.get('/corporationCampaign').then(({ data }) => data);
};
