import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CheckmarkCircleOutline } from "../components/svg/CheckmarkCircleOutline";

const ThankYou = () => {
  const router = useRouter();

  const redirectToRedirectUrl = useCallback(() => {
    if (router.query.redirectUrl) {
      router.push(String(router.query.redirectUrl)).catch();
    }
  }, [router]);

  useEffect(() => {
    const handle = setTimeout(() => {
      redirectToRedirectUrl();
    }, 5000);
    return () => {
      clearTimeout(handle);
    }
  }, [redirectToRedirectUrl]);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="text-center flex flex-col items-center p-30px bg-green-100 rounded-24px gap-20px cursor-pointer select-none"
           onClick={redirectToRedirectUrl}>
        <CheckmarkCircleOutline className="block w-38px h-38px" />
        <div>Thank you for your donation!</div>
      </div>
    </div>
  );
};

export default ThankYou;
