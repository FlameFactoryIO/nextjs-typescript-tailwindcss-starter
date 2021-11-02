import Post from './Post';
import User from './User';
import Challenge from './Challenge';
import Campaign from './Campaign';
import Nonprofit from './Nonprofit';

export default interface Payment {
  id: string;
  payerId?: string;
  payerEmail?: string;
  payeeId?: string;
  payeeEmail?: string;
  amount: number;
  tip: number;
  currency?: string;
  raw?: string;
  status?: string;
  createTime?: Date;
  nonprofitId: string;
  nonprofitLocalId: string;
  nonprofit: Nonprofit;
  userId?: number;
  campaignId;
  campaign?: Campaign;
  challengeId?: number;
  challenge?: Challenge;
  user?: User;
  originalPostId?: number;
  originalPost?: Post;
  postId?: number;
  post?: Post;
  displayName: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  automaticCampaignId: boolean;
}
