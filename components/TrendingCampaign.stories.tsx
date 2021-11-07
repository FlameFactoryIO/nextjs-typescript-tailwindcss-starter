import Campaign from "../dtos/Campaign";
import TrendingCampaign from './TrendingCampaign';

const campaign: Campaign = {
  id: 1,
  title: "Nature Scapes",
  description: "Campaigns are an opportunity for nonprofits to organize short burst fundraising to fund a specific need. The campaign is created by the nonprofit to explain the impact of your donation. #Transparencyiskey",
  startDate: new Date("2021-09-28T00:00:00-04:00"),
  endDate: new Date("2022-09-28T00:00:00-04:00"),
  goal: 10000,
  raised: 2000,
  donors: 50,
  challenges: [],
  payments: [],
  // videoUrl: undefined,
  imageUrl: "https://movethechain.com/cdn-cgi/image/format=auto,metadata=none,sharpen=1,fit=scale-down,q=75,gravity=auto,dpr=1/https://mtc-media-staging.s3.us-east-2.amazonaws.com/Group%20114-min.jpg",
  createdAt: new Date("2021-09-01T00:00:00-04:00"),
  updatedAt: new Date("2021-09-27T00:00:00-04:00"),
  nonprofitId: 1,
  nonprofit: {
    id: 1,
    logoUrl: "https://movethechain.com/cdn-cgi/image/format=auto,metadata=none,sharpen=1,fit=scale-down,q=75,dpr=1/https://pics.paypal.com/00/s/MzRiYjJlNDEtNjBlNC00ZmU2LWJjY2MtY2Q5MDgzYmQ2MTA4/file.JPG",
    path: "cool-nonprofit",
    draftCampaigns: [],
    pastCampaigns: [],
    campaigns: [],
    hasCampaigns: 1,
    challenges: [],
    claimed: true,
    contacts: [],
    createdAt: "2021-11-21T12:00:00-03:00",
    updatedAt: "2021-11-21T12:00:00-03:00",
    interests: [],
    locations: [],
    name: "Cool nonprofit",
    payments: [],
    testimonials: [],
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
  title: "Trending Campaigns",
}

// noinspection JSUnusedGlobalSymbols
export const DesktopView = () => (
  <div className="w-270px">
    <TrendingCampaign campaign={campaign} />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const TabletView = () => (
  <div className="w-333px">
    <TrendingCampaign campaign={campaign} />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const MobileView = () => (
  <div className="w-308px">
    <TrendingCampaign campaign={campaign} />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const Video = () => (
  <div className="w-270px">
    <TrendingCampaign campaign={{
      ...campaign,
      videoUrl: "https://mtc-media-staging.s3.us-east-2.amazonaws.com/mtc_video.mp4",
    }} />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const VariantLight = () => (
  <div className="w-320px bg-white p-20px">
    <TrendingCampaign campaign={campaign} variant="light" />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const VariantDark = () => (
  <div className="w-320px bg-black p-20px">
    <TrendingCampaign campaign={campaign} variant="dark" />
  </div>
);
