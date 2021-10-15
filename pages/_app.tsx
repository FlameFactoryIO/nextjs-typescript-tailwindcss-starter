import {StrictMode} from "react";
import "tailwindcss/tailwind.css";
import NextNprogress from 'nextjs-progressbar';
import {FullScreenProvider} from "../components/FullScreenContext";
import {PlayOneVideoAtOnceProvider} from "../components/PlayOneVideoAtOnceContext";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <NextNprogress
        color="#E84300"
        startPosition={0.2}
        stopDelayMs={200}
        height="6"
        options={{
          showSpinner: false,
        }}
      />

      <FullScreenProvider>
        <PlayOneVideoAtOnceProvider>
          <Component {...pageProps} />
        </PlayOneVideoAtOnceProvider>
      </FullScreenProvider>
    </StrictMode>
  )
}

// noinspection JSUnusedGlobalSymbols
export default MyApp
