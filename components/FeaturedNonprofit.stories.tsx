import FeaturedNonprofit from "./FeaturedNonprofit";
import { mockNonprofit } from "./Mocks";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Featured Nonprofits",
}

// noinspection JSUnusedGlobalSymbols
export const DesktopView = () => (
  <div className="w-270px">
    <FeaturedNonprofit nonprofit={mockNonprofit} />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const TabletView = () => (
  <div className="w-333px">
    <FeaturedNonprofit nonprofit={mockNonprofit} />
  </div>
);

// noinspection JSUnusedGlobalSymbols
export const MobileView = () => (
  <div className="w-308px">
    <FeaturedNonprofit nonprofit={mockNonprofit} />
  </div>
);
