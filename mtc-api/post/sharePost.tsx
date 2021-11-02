import {ShareChannel} from "../../dtos/ShareChannel";
import {emailShare, facebookShare, linkedInShare, smsShare, twitterShare} from "../share";
import Post from "../../dtos/Post";

const getShareOnlyMessage = ({ channel, url, post }: {channel: ShareChannel, post: Post, url: string}): string => {
  if (channel === "linkedin") {
    return `Check out the challenge #${post.challenge.name} supporting ${post.challenge.nonprofitName}. Join the movement by participating in the challenge, donating or sharing. 👇 ${url}`;
  }
  if (channel === "facebook") {
    return `Check out the challenge #${post.challenge.name} supporting ${post.challenge.nonprofitName}. Join the movement by participating in the challenge, donating or sharing. ${url}`;
  }
  if (channel === "twitter") {
    return `Check out the challenge #${post.challenge.name} supporting ${post.challenge.nonprofitName}. Join the movement by participating in the challenge, donating or sharing.`;
  }
  if (channel === "sms") {
    return `Hi! 👋 Check out the challenge #${post.challenge.name} supporting ${post.challenge.nonprofitName}. Join the movement by participating in the challenge, donating or sharing. ${url}`;
  }
  if (channel !== "email") {
    return '';
  }

  return `
Hi there! 👋 
 
Check out #${post.challenge.name}, supporting ${post.challenge.nonprofitName}’s campaign to raising money for ${post.challenge.campaign?.title} 👉 ${url} .  
 
You can help ${post.challenge.nonprofitName} their fundraising goal by completing #${post.challenge.name}, donating, and/or sharing. Every little bit counts! 
 
Thanks for taking a look 
    `;
};

const getMessage = ({ channel, url, post }: {channel: ShareChannel, post: Post, url: string}): string => {
  return getShareOnlyMessage({ channel, url, post });
};

export const sharePost = ({ post, channel, shareUrl }: {channel: ShareChannel, post: Post, shareUrl: string}): void => {
  const message = getMessage({ post, channel, url: shareUrl });
  if (channel === "twitter") {
    twitterShare({ url: shareUrl, text: message });
  } else if (channel === "facebook") {
    facebookShare({ url: shareUrl, text: message });
  } else if (channel === "linkedin") {
    linkedInShare({ url: shareUrl, text: message });
  } else if (channel === "email") {
    const subject = `Check out #${post.challenge.name}, supporting ${post.challenge.nonprofitName}`;
    emailShare({ subject, body: message });
  } else if (channel === "sms") {
    smsShare({ text: message });
  }
};
