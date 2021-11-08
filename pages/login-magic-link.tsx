import React, { useEffect } from 'react';
import redirect from '../utils/redirect';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { loginWithMagicLink } from "../mtc-api/auth/useLoginWithMagicLink";

const LoginMagicLink = ({
  redirectUrl,
  token,
  paypalId,
  nonprofitOnboardingFinished,
}) => {
  const [, setCookie] = useCookies([
    'token',
    'paypalId',
    'nonprofitOnboardingFinished',
  ]);
  const router = useRouter();
  useEffect(() => {
    if (redirectUrl) {
      setCookie('token', token, { path: '/' });
      setCookie('paypalId', paypalId, { path: '/' });
      setCookie('nonprofitOnboardingFinished', nonprofitOnboardingFinished, {
        path: '/',
      });
      router.replace(redirectUrl).catch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div />;
};

export const getServerSideProps = async ({ res, query }) => {
  const { id } = query;
  try {
    const user = await loginWithMagicLink({ id });
    if (!user) {
      redirect(res, '/');
      return {
        props: {},
      };
    }
    return {
      props: {
        redirectUrl: user.nonprofitOnboardingFinished
          ? '/admin/editview'
          : '/admin/nonprofit',
        token: user.token,
        paypalId: user.paypalId,
        nonprofitOnboardingFinished: user.nonprofitOnboardingFinished ? 1 : 0,
      },
    };
  } catch (e) {
    redirect(res, '/');
    return {
      props: { claimPageRequest: null },
    };
  }
};

export default LoginMagicLink;
