import { QueryClient, QueryClientProvider } from "react-query";
import CausesSelector from "./Causes";
import { useState } from "react";

// TODO(hmassad): mock http call with Mock Service Worker https://mswjs.io/docs/getting-started/install
const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      staleTime: 60000,
    }
  }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Causes Selector",
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ]
}

// noinspection JSUnusedGlobalSymbols
export const Default = () => {
  const [interests, setInterests] = useState([]);
  return (
    <div className="bg-gray-700 p-30px">
      <CausesSelector onChange={setInterests} interests={interests} showLoadMore={false}/>
    </div>
  );
};
