import client from '../apiClient';

export const generateVideoThumbnail = async ({ videoUrl, token }) => {
  const { data } = await client.post(
    `/video/thumbnail`,
    {
      videoUrl,
    },
    { headers: { auth: token } },
  );
  return data;
};
