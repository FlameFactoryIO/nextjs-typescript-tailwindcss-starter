import { useQuery } from 'react-query';
import client from '../apiClient';

export const getNonProfitData = (name) => {
  return client
    .get(`/nonprofit/${name}`)
    .then(({ data }) => data.data)
    .catch((e) => {
      console.log(e);
      return null;
    });
};

export const getNonProfitDataByPaypalId = (paypalId) => {
  return client
    .get(`/nonprofit/id/${paypalId}`)
    .then(({ data }) => {
      console.log('getNonProfitDataByPaypalId')
      return data.data;
    })
    .catch((e) => {
      console.log(e);
      return null;
    });
};

export const getCampaignSupporters = (campaigns) => {
  return client
    .get(`/campaignsSupporters`, { params: { campaigns } })
    .then(({ data }) => data)
    .catch((e) => {
      console.error(e);
      return null;
    });
};

export const useGetNonProfitPage = (name, config) => {
  return useQuery(
    ["NONPROFIT_PAGE", name],
    () => getNonProfitData(name),
    config,
  );
};
