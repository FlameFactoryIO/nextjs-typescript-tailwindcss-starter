import Challenge from "./Challenge";
import Nonprofit from "./Nonprofit";
import Payment from "./Payment";

export default interface Campaign {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  goal: number;
  raised: number;
  donors: number;
  challenges: Challenge[];
  payments: Payment[];
  videoUrl?: string;
  originalVideoUrl?: string;
  imageUrl?: string;
  shareImageUrl?: string;
  linkedInImageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  nonprofitId: number;
  nonprofit: Nonprofit;
  timesShared: number;
  order: number;
  isOpen: boolean;
  totalSupporters: number;
  shares: number;
  totalChallenges?: number;
}

export interface CampaignEditorParameters {
  campaignId?: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  goal: number;
  fileUrl?: string;
}
