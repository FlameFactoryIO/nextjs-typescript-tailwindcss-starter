import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSearchNonprofit } from "../mtc-api/nonprofit/useSearchNonprofit";
import NonprofitProfileHome from "./NonprofitProfileHome";
// TODO(hmassad): mock http call with Mock Service Worker https://mswjs.io/docs/getting-started/install
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "NonprofitProfileHome",
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};



// noinspection JSUnusedGlobalSymbols
export const NonprofitPrfileHome = () => {
  
  return (
    <div className="bg-green-300 min-w-280px">
      <NonprofitProfileHome />
    </div>
  );
};
