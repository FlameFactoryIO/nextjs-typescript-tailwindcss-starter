import client from '../apiClient';

export const finishOnboarding = ({ token }) => {
  return client.post(
    '/admin/onboarding/finish',
    {},
    {
      headers: {
        auth: token,
      },
    },
  );
};
