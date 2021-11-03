import { useQuery } from 'react-query';
import client from '../apiClient';

export const getActiveCampaigns = async ({ nonprofitId }) => {
  const { data } = await client.get(`/nonprofits/${nonprofitId}/campaigns`);
  return data?.map((c) => ({ ...c, raised: c.raised || 0 }));
};

export const getRecentOrFutureCampaign = async ({ token, nonprofitId }) => {
  const { data } = await client.get(
    `/admin/nonprofits/${nonprofitId}/campaigns/recent`,
    {
      headers: { auth: token },
    },
  );
  if (data.campaign) {
    data.campaign.raised = data.campaign.raised || 0;
  }
  return data.campaign;
};

export const useGetRecentOrFutureCampaign = (
  { token, nonprofitId },
  options,
) => {
  return useQuery(
    ["RECENT_CAMPAIGN", nonprofitId],
    () => {
      if (token) {
        return getRecentOrFutureCampaign({ token, nonprofitId });
      }
      return getActiveCampaigns({ nonprofitId }).then(
        (campaigns) => campaigns?.[0],
      );
    },
    options,
  );
};
