import Campaign from "./Campaign";
import Nonprofit from "./Nonprofit";
import User from "./User";
import Post from "./Post";

export default interface Challenge {
  id: number;
  userId: number;
  user: User;
  posts: Post[];
  campaignId?: number;
  campaign?: Campaign;
  name: string;
  donationGoal: number;
  amountDonated: number;
  timesDonated: number;
  nonprofitId?: string;
  nonprofitName?: string;
  nonprofitLogo?: string;
  nonprofitLocalId: number;
  nonprofit: Nonprofit;
  lastUploadAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  originalPost?: Partial<Post>;
  supporterCount?: number;
}