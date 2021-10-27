import { FC } from "react";
import {FaCalendarAlt, FaMapMarkerAlt} from "react-icons/all";
import Button from "./Button";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

export interface Nonprofit {
  id: number;
  imageUrl?: string;
}

export interface Campaign {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  goal: number;
  raised: number;
  donors: number;
  // challenges: Challenge[];
  // payments: Payment[];
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

const CampaignCard: FC<{
  campaign: Campaign,
  onClick?: (campaign: Campaign) => void,
  onDonate?: (campaign: Campaign) => void,
}> = ({
  campaign,
  onClick = () => {},
  onDonate = () => {},
}) => {
  return (
    <div className="flex flex-col"
      onClick={onClick}
    >
      <div className="relative">
        {campaign.videoUrl ? (
          <VideoPlayer videoUrl={campaign.videoUrl} videoImage={campaign.imageUrl} />
        ) : (
          <Image src={campaign.imageUrl} width="100%" height={322} objectFit="cover" layout="responsive" />
        )}

        <div className="absolute top-0 right-0">
          Share
        </div>
      </div>

      <a href={`/campaigns/${campaign.id}`}>
        <div className="mt-10px flex gap-10px">
          <div className="w-60px h-60px">
            <Image src={campaign.nonprofit.imageUrl} width={60} height={60} objectFit="cover" objectPosition="center" className="rounded-full" />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6px">
            <div className="font-bold text-14px leading-16px">{campaign.title}</div>
            <div className="relative h-6px">
              <div className="bg-green-500 bg-opacity-40 h-6px rounded-full" />
              <div className="bg-green-500 h-6px rounded-full transform -translate-y-6px" style={{maxWidth: `${Math.min(campaign.raised / campaign.goal, 1) * 100}%`}} />
            </div>
            <div className="flex text-14px leading-16px text-blue-500">
              <FaCalendarAlt />
              <div className="flex-1 text-10px leading-16px font-bold">
                &nbsp;30 days left
              </div>
              <div className="text-12px leading-16px font-bold text-green-500">$10K Goal</div>
            </div>
          </div>
        </div>

        <div className="mt-10px flex font-light text-12px leading-15px">
          <div className="overflow-ellipsis whitespace-nowrap overflow-hidden">{campaign.description}</div>
        </div>
        <div className="font-bold text-12px leading-15px underline">Learn more</div>
        <div className="mt-5px flex items-center text-14px leading-21px">
          <span className="text-primary"><FaMapMarkerAlt /></span> Austin, TX
        </div>
      </a>

      <Button onClick={onDonate} variant="black" className="mt-10px bg-black ring-black white">
        Donate
      </Button>
    </div>
  );
}

export default CampaignCard;
