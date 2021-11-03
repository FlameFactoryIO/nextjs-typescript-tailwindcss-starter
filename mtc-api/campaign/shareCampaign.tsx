import Campaign from "../../dtos/Campaign";
import {ShareChannel} from "../../dtos/ShareChannel";
import {emailShare, facebookShare, linkedInShare, smsShare, twitterShare} from "../share";

const getGoalPercentageAchieved = (campaign: Campaign): number => {
  return Math.round(campaign.raised * 100 / campaign.goal);
};

const getShareOnlyMessage = ({ channel, url, campaign }: { channel: ShareChannel, url: string, campaign: Campaign }): string => {
  if (channel === "facebook") {
    return `${campaign.nonprofit?.name} is raising money for ${campaign.title}. Join the movement by donating, or sharing to spread the word! ${url}`;
  }
  if (channel === "linkedin") {
    return `${campaign.nonprofit?.name} is raising money for ${campaign.title}. Join the movement by donating, or sharing to spread the word! 👇 ${url}`;
  }
  if (channel === "twitter") {
    return `${campaign.nonprofit?.name} is raising money for ${campaign.title}. Join the movement by donating, or sharing to spread the word! 👇`;
  }
  if (channel === "sms") {
    return `Hi! 👋  Check out this fundraising campaign for ${campaign.nonprofit?.name}. Join the movement by donating or sharing ${url}`;
  }
  if (channel !== "email") {
    return '';
  }
  const percentageAchieved = getGoalPercentageAchieved(campaign);
  if (percentageAchieved < 50) {
    return `
Hi there! 👋 
 
Check out this campaign from ${campaign.nonprofit?.name}, raising money for ${campaign.title} 👉 ${url}.
 
They just started with this fundraiser, and even a small gift could help ${campaign.nonprofit?.name} reach their goal. If you can't make a donation, you can still help by sharing this campaign to raise awareness! 
 
Thanks for taking a look 

Move the Chain
`;
  }
  if (percentageAchieved >= 50 && percentageAchieved < 55) {
    return `
Hi there! 👋 
 
Check out this campaign from ${campaign.nonprofit?.name}, raising money for ${campaign.title} 👉 ${url}.
 
They're HALFWAY to their fundraising goal, and even a small gift could help them reach it. If you can't make a donation, you can still help by sharing this campaign to raise awareness! 
 
Thanks for taking a look 

Move the Chain
`;
  }
  return `
Hi there! 👋 
 
Check out this campaign from ${campaign.nonprofit?.name}, raising money for ${campaign.title} 👉 ${url} .
 
They're ALMOST to their fundraising goal, and even a small gift could help them reach it. If you can't make a donation, you can still help by sharing this campaign to raise awareness! 
 
Thanks for taking a look   

Move the Chain
`;
};

const getDonateMessage = ({ channel, url, campaign }: {channel: ShareChannel, campaign: Campaign, url: string}): string => {
  if (channel === "linkedin") {
    return `Hi! 👋  I just donated to ${campaign.nonprofit?.name}. Join the movement by donating, or sharing to spread the word. ${url}`;
  }
  if (channel === "facebook") {
    return `Hi! I just donated to ${campaign.nonprofit?.name}. Join the movement by donating, or sharing to spread the word. ${url}`;
  }
  if (channel === "twitter") {
    return `Hi! 👋  I just donated to ${campaign.nonprofit?.name}. Join the movement by donating, or sharing to spread the word.`;
  }
  if (channel === "sms") {
    return `Hi! 👋  I just donated to ${campaign.nonprofit?.name}. Join the movement by donating, or sharing to spread the word. ${url}`;
  }
  if (channel !== "email") {
    return '';
  }
  const percentageAchieved = getGoalPercentageAchieved(campaign);
  if (percentageAchieved < 50) {
    return `
Hi there! 👋 
 
I just donated to ${campaign.nonprofit?.name}, supporting their campaign raising for ${campaign.title}. They’re just getting started with this fundraiser, and people like you can help!  
Click here to donate 👉  ${url} 
 
Even a small gift could help ${campaign.nonprofit?.name} reach their goal. If you can't make a donation, you can still help by sharing this campaign to raise awareness! 
 
Thanks for taking a look 
          `;
  }
  if (percentageAchieved >= 50 && percentageAchieved < 55) {
    return `
Hi there! 👋 
 
I just donated to ${campaign.nonprofit?.name}, supporting their campaign raising for ${campaign.title}. They’re HALFWAY to their fundraising goal, and people like you can help!  
 
Click here to donate 👉  ${url} 
 
Even a small gift could help ${campaign.nonprofit?.name} reach their goal. If you can't make a donation, you can still help by sharing this campaign to raise awareness! 
 
Thanks for taking a look 
          `;
  }
  return `
Hi there! 👋 
 
I just donated to ${campaign.nonprofit?.name}, supporting their campaign raising for ${campaign.title}. They’re ALMOST to their fundraising goal, and people like you can help!!  
 
Click here to donate 👉  ${url} 
 
Even a small gift could help ${campaign.nonprofit?.name} reach their goal. If you can't make a donation, you can still help by sharing this campaign to raise awareness! 
 
Thanks for taking a look 
    `;
};

const getMessage = ({ channel, url, campaign, action }: { channel: ShareChannel, url: string, campaign: Campaign, action: string }): string => {
  if (action === "share") {
    return getShareOnlyMessage({ channel, url, campaign });
  }
  return getDonateMessage({ channel, url, campaign });
};

export const shareCampaign = ({ campaign, channel, action, shareUrl }: { channel: ShareChannel, shareUrl: string, campaign: Campaign, action: string }): void => {
  const message = getMessage({ campaign, channel, action, url: shareUrl });

  if (channel === "twitter") {
    twitterShare({ url: shareUrl, text: message });
    return;
  }

  if (channel === "facebook") {
    facebookShare({ url: shareUrl, text: message });
    return;
  }

  if (channel === "linkedin") {
    linkedInShare({ url: shareUrl, text: message });
    return;
  }

  if (channel === "email") {
    emailShare({
      subject: `Check out ${campaign.nonprofit?.name} fundraising campaign, and help them reach their goal!`,
      body: message.replaceAll('\n', ''),
    });
    return;
  }

  if (channel === "sms") {
    smsShare({ text: message });
    return;
  }
};
