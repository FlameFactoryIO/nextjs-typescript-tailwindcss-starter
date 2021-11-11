import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NonprofitProfileTabs from "./NonprofitProfileTabs";

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
  title: "NonprofitProfileTabs",
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

// noinspection JSUnusedGlobalSymbols
export const Default = () => (
  <div className="">
    MASONRY NOT WORKING IN STORYBOOK
    <NonprofitProfileTabs />
  </div>
);
