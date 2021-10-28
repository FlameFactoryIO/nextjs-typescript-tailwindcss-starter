import Nonprofit from "../shared/Nonprofit";
import FeaturedNonprofit from "./FeaturedNonprofit";

const nonprofit: Nonprofit = {
  id: 2354,
  claimed: true,
  name: "Nonprofit Name",
  description: "Duis eu tellus dignissim, pellentesque a lacus eu, hendrerit turpis. Cras iaculis  un hendrerit com und commodo",
  path: "nonprofit-name",
  logoUrl: "https://movethechain.com/cdn-cgi/image/format=auto,metadata=none,sharpen=1,fit=scale-down,q=75,dpr=1/https://pics.paypal.com/00/s/MzRiYjJlNDEtNjBlNC00ZmU2LWJjY2MtY2Q5MDgzYmQ2MTA4/file.JPG",
  bannerUrl: "https://movethechain.com/cdn-cgi/image/format=auto,metadata=none,sharpen=1,fit=scale-down,q=75,gravity=auto,dpr=1/https://mtc-media-staging.s3.us-east-2.amazonaws.com/Group%20114-min.jpg",
  logoBg: "#FFFFFF",
  createdAt: new Date(),
  updatedAt: new Date(),
  interests: [],
  payments: [],
  testimonials: [],
  contacts: [],
  locations: [],
  hasCampaigns: 0,
  campaigns: [],
  challenges: [],
  pastCampaigns: [],
  draftCampaigns: [],
};

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Featured Nonprofits",
}

// noinspection JSUnusedGlobalSymbols
export const DesktopView = () => (
  <div className="w-270px">
    <FeaturedNonprofit nonprofit={nonprofit} />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const TabletView = () => (
  <div className="w-333px">
    <FeaturedNonprofit nonprofit={nonprofit} />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const MobileView = () => (
  <div className="w-308px">
    <FeaturedNonprofit nonprofit={nonprofit} />
  </div>
);
