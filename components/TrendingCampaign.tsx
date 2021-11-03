import {FC, useState} from "react";
import moment from "moment";
import {
  FaCalendarAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Ellipsis from "@quid/react-ellipsis"
import Button from "./Button";
import VideoPlayer from "./VideoPlayer";
import Campaign from "../dtos/Campaign";
import {shareCampaign} from "../mtc-api/campaign/shareCampaign";

const TrendingCampaign: FC<{
  campaign: Campaign,
  onClick?: (campaign: Campaign) => void,
  onDonate?: (campaign: Campaign) => void,
  variant?: "dark" | "light",
  className?: string,
}> = ({
  campaign,
  variant = "light",
  className= "",
  onClick = () => {},
  onDonate = () => {},
}) => {
  const [isShareMenuOpen, setShareMenuOpen] = useState(false);

  const textColor = variant === "light" ? "text-black" : "text-white";

  return (
    <div className={className}>
      <div className={`flex flex-col`} onClick={() => onClick(campaign)}>
        <div className="relative select-none">
          {campaign.videoUrl ? (
            <VideoPlayer videoUrl={campaign.videoUrl} videoImage={campaign.imageUrl} className="rounded-20px w-full h-320px" />
          ) : (
            <img src={campaign.imageUrl} className="rounded-20px object-cover h-320px" />
          )}

          <div className="absolute top-10px right-10px bg-black bg-opacity-70 text-white rounded-full w-40px">
            {!isShareMenuOpen ? (
              <div className="h-40px flex items-center justify-center cursor-pointer" onMouseEnter={() => setShareMenuOpen(true)} onClick={() => setShareMenuOpen(true)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.67 3.07539C14.7963 3.01371 14.9373 2.98873 15.0771 3.00332C15.2168 3.01791 15.3497 3.07146 15.4605 3.15789L22.2105 8.40789C22.2975 8.47548 22.3686 8.56141 22.4186 8.65957C22.4687 8.75773 22.4965 8.86571 22.5 8.97584C22.5036 9.08596 22.4829 9.19552 22.4393 9.29673C22.3958 9.39793 22.3304 9.48829 22.248 9.56139L15.498 15.5614C15.3899 15.6574 15.2564 15.7201 15.1135 15.742C14.9705 15.7638 14.8244 15.7439 14.6925 15.6847C14.5606 15.6254 14.4487 15.5293 14.3702 15.4079C14.2917 15.2865 14.25 15.145 14.25 15.0004V12.0844C13.896 12.1444 13.434 12.2494 12.894 12.4294C11.5845 12.8674 9.813 13.7479 8.031 15.5314C7.92197 15.6408 7.78179 15.7139 7.62964 15.7407C7.47748 15.7675 7.32078 15.7466 7.18093 15.681C7.04108 15.6153 6.92492 15.5081 6.84833 15.3739C6.77173 15.2397 6.73844 15.0852 6.753 14.9314C6.9675 12.5749 7.6545 10.8559 8.589 9.61689C9.39108 8.54748 10.4811 7.72855 11.7315 7.25589C12.538 6.95022 13.3883 6.776 14.25 6.73989V3.75039C14.2497 3.60983 14.2889 3.47201 14.3632 3.35266C14.4375 3.23332 14.5438 3.13724 14.67 3.07539ZM3 8.25039C3 7.25583 3.39509 6.302 4.09835 5.59874C4.80161 4.89548 5.75544 4.50039 6.75 4.50039H9.75C9.94891 4.50039 10.1397 4.57941 10.2803 4.72006C10.421 4.86071 10.5 5.05148 10.5 5.25039C10.5 5.4493 10.421 5.64007 10.2803 5.78072C10.1397 5.92137 9.94891 6.00039 9.75 6.00039H6.75C6.15326 6.00039 5.58097 6.23744 5.15901 6.6594C4.73705 7.08136 4.5 7.65365 4.5 8.25039V17.2504C4.5 17.8471 4.73705 18.4194 5.15901 18.8414C5.58097 19.2633 6.15326 19.5004 6.75 19.5004H15.75C16.3467 19.5004 16.919 19.2633 17.341 18.8414C17.7629 18.4194 18 17.8471 18 17.2504V15.7504C18 15.5515 18.079 15.3607 18.2197 15.2201C18.3603 15.0794 18.5511 15.0004 18.75 15.0004C18.9489 15.0004 19.1397 15.0794 19.2803 15.2201C19.421 15.3607 19.5 15.5515 19.5 15.7504V17.2504C19.5 18.245 19.1049 19.1988 18.4017 19.902C17.6984 20.6053 16.7446 21.0004 15.75 21.0004H6.75C5.75544 21.0004 4.80161 20.6053 4.09835 19.902C3.39509 19.1988 3 18.245 3 17.2504V8.25039Z" fill="white"/>
                </svg>
              </div>
            ) : (
              <div className="py-5px" onMouseLeave={() => setShareMenuOpen(false)}>
                <div className="h-40px flex items-center justify-center border-b border-white border-opacity-50 cursor-pointer" onClick={() => setShareMenuOpen(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" fill="white"/>
                  </svg>
                </div>
                <div className="h-40px flex items-center justify-center cursor-pointer" onClick={() => shareCampaign({ campaign: campaign, channel: "facebook", shareUrl: campaign.shareImageUrl, action: "share" })}>
                  <FaFacebookF />
                </div>
                <div className="h-40px flex items-center justify-center cursor-pointer" onClick={() => shareCampaign({ campaign: campaign, channel: "twitter", shareUrl: campaign.shareImageUrl, action: "share" })}>
                  <FaTwitter />
                </div>
                <div className="h-40px flex items-center justify-center cursor-pointer" onClick={() => shareCampaign({ campaign: campaign, channel: "instagram", shareUrl: campaign.shareImageUrl, action: "share" })}>
                  <FaInstagram />
                </div>
                <div className="h-40px flex items-center justify-center cursor-pointer" onClick={() => shareCampaign({ campaign: campaign, channel: "linkedin", shareUrl: campaign.shareImageUrl, action: "share" })}>
                  <FaLinkedinIn />
                </div>
                <div className="h-40px flex items-center justify-center cursor-pointer" onClick={() => shareCampaign({ campaign: campaign, channel: "email", shareUrl: campaign.shareImageUrl, action: "share" })}>
                  <FaRegEnvelope />
                </div>
              </div>
            )}
          </div>
        </div>

        <a href={`/campaigns/${campaign.id}`} className={`${textColor} mt-10px`}>
          <div className="flex gap-10px">
            <div className="w-60px h-60px rounded-25px">
              <Image src={campaign.nonprofit.logoUrl} width={60} height={60} objectFit="cover" objectPosition="center" className="rounded-full" />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-6px">
              <div className="font-bold text-14px leading-16px">{campaign.title}</div>
              <div className="relative h-6px">
                <div className="bg-green-500 bg-opacity-40 h-6px rounded-full" />
                <div className="bg-green-500 h-6px rounded-full transform -translate-y-6px" style={{maxWidth: `${Math.min(campaign.raised / campaign.goal * 100, 100)}%`}} />
              </div>
              <div className="flex text-14px leading-16px text-blue-500">
                <FaCalendarAlt />
                <div className="flex-1 text-10px leading-16px font-bold">
                  &nbsp;{moment(campaign.endDate).diff(moment(), "days")} days left
                </div>
                <div className="text-12px leading-16px font-bold text-green-500">${Math.round((campaign.goal / 1000 + Number.EPSILON) * 100) / 100}k Goal</div>
              </div>
            </div>
          </div>

          <Ellipsis className="mt-10px font-light text-12px leading-15px h-40px" maxHeight={40} title={campaign.description}>
            {campaign.description}
          </Ellipsis>
          <div className="font-bold text-12px leading-15px underline">Learn more</div>
        </a>

        <Button onClick={() => onDonate(campaign)} variant={variant === "light" ? "black" : "white"} className="mt-10px rounded-8pxi mx-auto w-220px d:w-full">
          Donate
        </Button>
      </div>
    </div>
  );
}

export default TrendingCampaign;
