import {StrictMode, useState} from "react";
import "tailwindcss/tailwind.css";
import NextNprogress from 'nextjs-progressbar';
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import {CookiesProvider} from "react-cookie";
import {FullScreenProvider} from "../components/FullScreenContext";
import {PlayOneVideoAtOnceProvider} from "../components/PlayOneVideoAtOnceContext";

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions:{
      queries: {
        staleTime: 60000,
      }
    }
  }));

  return (
    <StrictMode>
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
