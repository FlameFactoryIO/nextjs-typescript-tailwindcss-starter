import AboutUsEditor from "./AboutUsEditor";
import { QueryClient, QueryClientProvider } from "react-query";
import { FaAnkh, FaEnvelope, FaVirusSlash, FaXRay } from "react-icons/fa";
import React from "react";

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
  title: "AboutUsEditor",
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
      <AboutUsEditor
        description=""
        interests={[]}
        locations={[]}
        onDescriptionChange={() => {}}
        onInterestsChange={() => {}}
        onLocationsChange={() => {}}
      />
    </div>
  );
};
