import CampaignEditor from "./CampaignEditor";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { mockNonprofit } from "../Mocks";

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
  title: "CampaignEditor",
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

// noinspection JSUnusedGlobalSymbols
export const Default = () => {
  return (
    <div className="min-w-280px">
      <CampaignEditor
        nonprofit={mockNonprofit}
        onSave={()=>{}}
        onCancel={()=>{}}
      />
    </div>
  );
};
