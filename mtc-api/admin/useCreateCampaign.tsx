import { useMutation } from 'react-query';
import client from '../apiClient';

export default function useCreateCampaign () {
  return useMutation(["CREATE_CAMPAIGN"], ({ token, payload }) =>
    client.post('/admin/campaigns', payload, {
      auth: token,
    })
  );
};
