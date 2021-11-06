import DonationList from './DonationList';
import { QueryClient, QueryClientProvider } from "react-query";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Donation List"
}

// TODO(hmassad): mock http call with Mock Service Worker https://mswjs.io/docs/getting-started/install
const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      staleTime: 60000,
    }
  }
});

const Template = () => (
  <QueryClientProvider client={queryClient}>
    <div className="bg-gray-700 p-30px">
      <DonationList />
    </div>
  </QueryClientProvider>
);

// noinspection JSUnusedGlobalSymbols
export const Height = Template.bind({})
Height.params = {
  height: 320,
  className: "h-400px"
};
