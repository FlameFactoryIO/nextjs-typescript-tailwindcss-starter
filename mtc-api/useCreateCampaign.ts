import { useMutation } from 'react-query';
import client from '../shared/MoveTheChainApiCLient';

export default function useCreateCampaign () {
  return useMutation(["CREATE_CAMPAIGN"], ({ token, payload }) =>
    client.post('/admin/campaigns', payload, {
      headers: {
        auth: token,
      },
    })
  );
};
