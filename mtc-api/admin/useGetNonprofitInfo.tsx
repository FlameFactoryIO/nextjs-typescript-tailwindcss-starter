import { useQuery } from 'react-query';
import client from '../apiClient';

const getNonprofitInfo = async (token) => {
  const { data } = await client.get(`/admin/nonprofit`, {
    headers: { auth: token },
  });
  if (data.interests) {
    data.interests = data.interests.map((i) => i.interest);
  }
  if (!data.impact) {
    data.impact = {};
  }
  return data;
};

export const useGetNonprofitInfo = (token) => {
  return useQuery("ADMIN_NONPROFIT_INFO", () =>
    getNonprofitInfo(token),
  );
};
