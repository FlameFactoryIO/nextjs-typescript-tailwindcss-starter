import { StrictMode, useEffect, useState } from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import NextNprogress from 'nextjs-progressbar';
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import {CookiesProvider} from "react-cookie";
import {FullScreenProvider} from "../components/FullScreenContext";
import {PlayOneVideoAtOnceProvider} from "../components/PlayOneVideoAtOnceContext";
import { initialize as analyticsInit } from '../utils/analytics';

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions:{
      queries: {
        // staleTime: 60000,
      }
    }
  }));

  useEffect(() => {
    analyticsInit();
  }, []);

  return (
    <StrictMode>
      <Head>
        <meta
          property="og:site_name"
          key="og:site_name"
          content="Move the Chain"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Move the Chain"
        />
        <meta
          property="og:description"
          key="og:description"
          content="Move the Chain is a social giving platform that uses short-form campaign videos and social networking to support more than 140,000 nonprofit organizations. Support your favorite causes, challenge each other, spread the word and see how a single post can influence thousands."
        />
        <meta
          property="og:type"
          key="og:type"
          content="website"
        />
        <meta
          property="og:image"
          key="og:image"
          content="https://mtc-web-app-prod.s3.us-east-2.amazonaws.com/static/media/og_image.png"
        />
        <meta
          property="og:locale"
          key="og:locale"
          content="en_US"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://movethechain.com"
        />
        <meta
          property="fb:app_id"
          key="fb:app_id"
          content="1028328367679578"
        />
        <meta
          name="twitter:card"
          key="twitter:card"
          content="summary"
        />
        <meta
          name="twitter:title"
          key="twitter:title"
          content="Move the Chain"
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content="Move the Chain"
        />
        <meta
          name="twitter:image"
          key="twitter:image"
          content="https://mtc-web-app-prod.s3.us-east-2.amazonaws.com/static/media/og_image.png"
        />
        <meta
          name="twitter:image:alt"
          key="twitter:image:alt"
          content="Move the Chain"
        />
        <meta
          name="description"
          key="description"
          content="Making a difference just became a lot more fun."
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Move the Chain</title>
      </Head>

      <NextNprogress
        color="#E84300"
        startPosition={0.2}
        stopDelayMs={200}
        height={6}
        options={{
          showSpinner: false,
        }}
      />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CookiesProvider>
            <FullScreenProvider>
              <PlayOneVideoAtOnceProvider>
                <Component {...pageProps} />
              </PlayOneVideoAtOnceProvider>
            </FullScreenProvider>
          </CookiesProvider>
        </Hydrate>
      </QueryClientProvider>
    </StrictMode>
  )
}

// noinspection JSUnusedGlobalSymbols
export default MyApp;
