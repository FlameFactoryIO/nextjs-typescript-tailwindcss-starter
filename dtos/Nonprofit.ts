import Campaign from "./Campaign";
import Challenge from "./Challenge";
import Impact from "./Impact";
import Location from "./Location";
import NonprofitContact from "./NonprofitContact";
import Payment from "./Payment";
import Testimonial from "./Testimonial";
import InterestToNonprofit from "./InterestToNonprofit";

export default interface Nonprofit {
  id: number;
  claimed: boolean;
  name: string;
  path: string;
  logoUrl?: string;
  bannerUrl?: string;
  logoBg?: string;
  siteUrl?: string;
  contactEmail?: string;
  contactImg?: string;
  phone?: string;
  street1?: string;
  street2?: string;
  city?: string;
  province?: string;
  country?: string;
  countryCode?: string;
  postalCode?: string;
  description?: string;
  facebook?: string;
  twitter?: string;
  linkedIn?: string;
  instagram?: string;
  impactId?: number;
  impact?: Impact;
  paypalId?: string;
  challenges: Challenge[];
  hasCampaigns: number;
  campaigns: Campaign[];
  createdAt: string;
  updatedAt: string;

  /// Virtual Properties ///
  currentCampaign?: Campaign;
  pastCampaigns: Campaign[];
  draftCampaigns: Campaign[];

  interests: InterestToNonprofit[];
  payments: Payment[];
  testimonials: Testimonial[];
  contacts: NonprofitContact[];
  locations: Location[];
}
