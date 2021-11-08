import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import cache from '../../utils/cache';
import { logEvent } from '../../utils/analytics';
import { getCampaign } from '../../mtc-api/campaign/useGetCampaign';
import Footer from '../../components/Footer';
import TopNav from "../../components/TopNav";
import VideoPlayer from "../../components/VideoPlayer";
import Button from "../../components/Button";
import DonateButton from "../../components/DonationButton";

const CampaignProfile = ({ id, campaign }) => {

  useEffect(() => {
    logEvent('View Campaign Page', {
      id,
      nonprofitId: campaign.nonprofit?.id,
      nonprofitName: campaign.nonprofit?.name,
    });
  }, []);

  return (
    <>
      <Head>
        {/*<meta property="og:image" key="og:image" content={imageUrl} />
        <meta key={'twitter:image'} name="twitter:image" content={imageUrl} />*/}
        <meta
          property="og:description"
          key="og:description"
          content={campaign.description}
        />
        <meta
          property="og:url"
          key="og:url"
          content={`https://movethechain.com/campaign/${id}`}
        />
      </Head>
      <div>
        <TopNav />
        <div>
          <div className="flex flex-col">
            <div>Support</div>
            <div>{campaign.nonprofit.name}</div>
            <DonateButton
              origin="campaigns"
              nonprofitId={campaign.nonprofitId}
              nonprofitName={campaign.nonprofit.name}
              campaignId={id}
              entityId={id}
              entityType="campaign"
              variant="black"
            />
            <Button variant="white">Share</Button>
            <div>Donations</div>
          </div>
        </div>
        <VideoPlayer videoUrl={campaign.videoUrl} videoImage={campaign.imageUrl} />
        <div>
          Raising For
        </div>
        <div>
          <img src={campaign.logoUrl} className="rounded-full h-64px w-64px" />
          {campaign.nonprofit.name}
        </div>
        <div>
          {campaign.description}
        </div>
        <div>
          Chain Movers
          {/*{campaign.posts.map(post => (*/}
          {/*  <>{post.user}</>*/}
          {/*))}*/}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CampaignProfile;

export async function getServerSideProps({ res, params, query }) {
  const { id } = params;

  let campaign = cache.get(`campaign_${id}`);
  if (!campaign) {
    try {
      campaign = await getCampaign(id);
    } catch (e) {
      console.error(e);
      return { props: { id, campaign: null } };
    }
  }

  return { props: { id, campaign: campaign } };
}
