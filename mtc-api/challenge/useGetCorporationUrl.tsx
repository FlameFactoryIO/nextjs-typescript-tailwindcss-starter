import client from '../apiClient';

export const getCorporationShareUrl = (id) => {
  return client
    .get(`/challenges/corporations/${id}/shareUrl`)
    .then(({ data }) => data.shareUrl);
};
