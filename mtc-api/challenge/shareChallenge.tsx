import {ShareChannel} from "../../dtos/ShareChannel";
import {emailShare, facebookShare, linkedInShare, smsShare, twitterShare} from "../share";
import Challenge from "../../dtos/Challenge";

const getShareOnlyMessage = ({ channel, url, challenge }: {channel: ShareChannel, challenge: Challenge, url: string}) => {
  if (channel === "facebook") {
    return `${challenge.nonprofit?.name} is raising money for ${challenge.name}. Join the movement by donating, or sharing to spread the word! ${url}`;
  }
  if (channel === "linkedin") {
    return `${challenge.nonprofit?.name} is raising money for ${challenge.name}. Join the movement by donating, or sharing to spread the word! 👇 ${url}`;
  }
  if (channel === "twitter") {
    return `${challenge.nonprofit?.name} is raising money for ${challenge.name}. Join the movement by donating, or sharing to spread the word! 👇`;
  }
  if (channel === "sms") {
    return `Hi! 👋  Check out this fundraising campaign for ${challenge.nonprofit?.name}. Join the movement by donating or sharing ${url}`;
  }
  if (channel !== "email") {
    return '';
  }
  return 'emial share';
};

const getDonateMessage = ({ channel, url, challenge }: {channel: ShareChannel, challenge: Challenge, url: string}): string => {
  if (channel === "linkedin") {
    return `Hi! 👋  I just donated to ${challenge.nonprofit?.name}. Join the movement by donating, or sharing to spread the word. ${url}`;
  }
  if (channel === "facebook") {
    return `Hi! I just donated to ${challenge.nonprofit?.name}. Join the movement by donating, or sharing to spread the word. ${url}`;
  }
  if (channel === "twitter") {
    return `Hi! 👋  I just donated to ${challenge.nonprofit?.name}. Join the movement by donating, or sharing to spread the word.`;
  }
  if (channel === "sms") {
    return `Hi! 👋  I just donated to ${challenge.nonprofit?.name}. Join the movement by donating, or sharing to spread the word. ${url}`;
  }
  if (channel !== "email") {
    return '';
  }
  return 'email share';
};

const getMessage = ({ channel, url, challenge, action }: {channel: ShareChannel, challenge: Challenge, url: string, action: string}): string => {
  if (action === "share") {
    return getShareOnlyMessage({ channel, url, challenge });
  }
  return getDonateMessage({ channel, url, challenge });
};

export const shareChallenge = ({ challenge, channel, action, shareUrl }: { challenge: Challenge, channel: ShareChannel, action: string, shareUrl: string }): void => {
  const message = getMessage({ challenge, channel, action, url: shareUrl });
  if (channel === "twitter") {
    twitterShare({ url: shareUrl, text: message });
  } else if (channel === "facebook") {
    facebookShare({ url: shareUrl, text: message });
  } else if (channel === "linkedin") {
    linkedInShare({ url: shareUrl, text: message });
  } else if (channel === "email") {
    const subject = `Check out ${challenge.nonprofit?.name} fundraising campaign, and help them reach their goal!`;
    emailShare({ subject, body: message });
  } else if (channel === "sms") {
    smsShare({ text: message });
  }
};
