import CampaignCard from './CampaignCard';

const campaign = {
  id: 1,
  title: "Nature Scapes",
  description: "Take a selfie like Rosie the riveter and loremp ipsum dolor sit amet",
  startDate: new Date("2021-09-28T00:00:00-04:00"),
  endDate: new Date("2022-09-28T00:00:00-04:00"),
  goal: 10000,
  raised: 2000,
  donors: 50,
  // challenges:
  // payments:
  videoUrl: undefined,
  originalVideoUrl: undefined,
  imageUrl: "https://movethechain.com/cdn-cgi/image/format=auto,metadata=none,sharpen=1,fit=scale-down,q=75,gravity=auto,dpr=1/https://mtc-media-staging.s3.us-east-2.amazonaws.com/Group%20114-min.jpg",
  shareImageUrl: undefined,
  linkedInImageUrl: undefined,
  createdAt: new Date("2021-09-01T00:00:00-04:00"),
  updatedAt: new Date("2021-09-27T00:00:00-04:00"),
  nonprofitId: 1,
  nonprofit: {
    id: 1,
    imageUrl: "https://movethechain.com/cdn-cgi/image/format=auto,metadata=none,sharpen=1,fit=scale-down,q=75,dpr=1/https://pics.paypal.com/00/s/MzRiYjJlNDEtNjBlNC00ZmU2LWJjY2MtY2Q5MDgzYmQ2MTA4/file.JPG",
  },
  timesShared: 50,
  order: 1,
  isOpen: true,
  totalSupporters: 150,
  shares: 1,
  totalChallenges: 1,
};

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Campaign Cards",
}

// noinspection JSUnusedGlobalSymbols
export const DesktopView = () => (
  <div className="w-270px">
    <CampaignCard campaign={campaign} />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const TabletView = () => (
  <div className="w-333px">
    <CampaignCard campaign={campaign} />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const MobileView = () => (
  <div className="w-308px">
    <CampaignCard campaign={campaign} />
  </div>
);
