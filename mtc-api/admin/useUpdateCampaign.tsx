import { useMutation } from 'react-query';
import client from '../apiClient';

const updateCampaign = ({ id, token, payload }) => {
  return client.patch(`/admin/campaigns/${id}`, payload, {
    headers: {
      auth: token,
    },
  });
};

export const useUpdateCampaign = () => {
  return useMutation("UPDATE_CAMPAIGN", updateCampaign);
};
