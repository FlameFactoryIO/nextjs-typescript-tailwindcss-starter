import { useMutation } from 'react-query';
import client from '../apiClient';

export default function useCreateCampaign ({ token, payload }) {
  return useMutation(["CREATE_CAMPAIGN"], () =>
    client.post('/admin/campaigns', payload, {
      auth: token,
    })
  );
};
