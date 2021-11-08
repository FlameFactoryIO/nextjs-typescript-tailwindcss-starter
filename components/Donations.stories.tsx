import { DonationList, TopAndRecentDonations } from './Donations';
import { QueryClient, QueryClientProvider } from "react-query";
import { useDonations } from "../mtc-api/donations/Donation";

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
  title: "Donations",
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ]
}

// noinspection JSUnusedGlobalSymbols
export const TopAndRecentDonationsHeight = () => (
  <div className="bg-gray-700 p-30px">
    <TopAndRecentDonations className="h-400px" />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const TopAndRecentDonationsDefault = () => (
  <div className="bg-gray-700 p-30px">
    <TopAndRecentDonations />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const Nonprofit = () => {
  const donations = useDonations({
    type: "nonprofit",
    nonprofitName: "PPGF GFM CA's Test Store",
  });

  return (
    <div className="bg-gray-700 p-30px">
      <DonationList donations={donations} />
    </div>
  );
};

// noinspection JSUnusedGlobalSymbols
export const Campaign = () => {
  const donations = useDonations({
    type: "campaign",
    campaignId: 2,
  });

  return (
    <div className="bg-green-100 p-30px">
      <DonationList donations={donations} />
    </div>
  );
};
