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
import Ellipsis from '@quid/react-ellipsis';
import { now } from 'moment';
import moment from 'moment';

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

        <div id="campaign-id"
          className="flex flex-col t:flex-row t:gap-50px">
          {!moment().isAfter(campaign.endDate) ? (
            <>
              <div className="t:max-w-474px">
                <div className="flex-1 bg-white">
                  <div className="flex flex-col items-center t:pt-120px t:pl-50px text-center">
                    <div className="t:text-24px t:font-light">Support</div>
                    <div className="t:text-24px t:leading-30px  t:font-bold
                              t:pb-20px">{campaign.nonprofit.name}</div>

                    {!moment().isAfter(campaign.endDate) ? (
                      <>
                        <div className="t:pb-20px">
                          <DonateButton
                            origin="campaigns"
                            nonprofitId={campaign.nonprofitId}
                            nonprofitName={campaign.nonprofit.name}
                            campaignId={id}
                            entityId={id}
                            entityType="campaign"
                            variant="black"
                            className="t:w-283px t:h-62px t:text-24px t:leading-30px t:font-bold rounded-10px"
                          />
                        </div>
                      </>
                    ) : (
                      ""
                    )}


                    <hr className="t:max-w-420px border-1 border-gray-300"></hr>

                    {/*<div className="t:pb-20px ">
                  <Button variant="white">Share</Button>
      </div>*/}
                    <div className="divide-y bg-gray"></div>
                    <div className="t:text-24px t:leading-30px t:font-bold t:pb-30px">See who’s donating</div>
                    {campaign.raised > 0 ? (
                      <>
                        <div className="t:pb-20px text-gray-400 font-light ">Donations</div> {/* componente de donation*/}
                      </>
                    ) : (
                      <>

                        <div className="t:pb-20px text-gray-400 font-light">No donations yet.</div>
                        <div className="t:pb-20px text-gray-400 font-light">Be the first!</div>
                      </>

                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}



          <div className="flex-1 flex flex-col items-center t:px-100px  bg-footer">
            <div className="flex flex-col">
              <div className="flex flex-col t:flex-row t:gap-50px">
                <div className="t:pt-120px">
                  <div className="flex flex-col  items-start t:pb-30px">
                    <VideoPlayer className="t:w-414px t:max-h-479px" videoUrl={campaign.videoUrl} videoImage={campaign.imageUrl} />
                  </div>

                  <div className="flex flex-row gap-20px items-start">
                    <img src={campaign.logoUrl} className="rounded-full h-20px w-20px" />
                    <div className="text-14px leading-20px text-gray-400
                              t:max-w-272px">

                      Created by <span className="font-bold">{campaign.nonprofit.name}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 t:pt-120px t:max-w-350px">
                  <div className="flex flex-col gap-6px">
                    <div className="text-gray-400 font-light">
                      Raising For
                    </div>
                    <div className="text-20px font-bold t:pb-20px">
                      {campaign.nonprofit.name}
                    </div>

                    <div className="relative h-6px">
                      <div className="bg-green-500 bg-opacity-40 h-6px rounded-full" />
                      <div className="bg-green-500 h-6px rounded-full transform -translate-y-6px" style={{ maxWidth: `${Math.min(campaign.raised / campaign.goal * 100, 100)}%` }} />
                    </div>
                    <div className="text-14px text-right">
                      <span className="text-green-500 font-bold ">Raised ${campaign.raised}</span> of ${Math.round((campaign.goal / 1000 + Number.EPSILON) * 100) / 100}k Goal
                    </div>

                    <div className="flex flex-row gap-10px t:pt-30px">
                      {moment().isAfter(campaign.endDate) ? (
                        <>
                          <img className="w-16px h-16px"
                            src="/images/campaign/icon-calendar.svg"
                          />
                          <div className="font-bold text-14px text-gray-400 pr-20px">{moment().diff(campaign.endDate, "days")} days left</div>
                        </>
                      ) : (
                        <>
                          <img className="w-16px h-16px"
                            src="/images/campaign/icon-calendar.svg"
                          />
                          <div className="font-bold text-14px text-gray-400 pr-20px">closed</div>
                        </>
                      )}
                      <img className="w-16px h-16px"
                        src="/images/campaign/icon-supported.svg"
                      />
                      <div className="font-bold text-14px text-gray-400">
                        {campaign.totalSupporters} supporters
                      </div>
                    </div>

                    <div className="flex-1">
                      {moment().isAfter(campaign.endDate) ? (
                        <>
                          <div className="t:pt-20px">
                            <DonateButton
                              origin="campaigns"
                              nonprofitId={campaign.nonprofitId}
                              nonprofitName={campaign.nonprofit.name}
                              campaignId={id}
                              entityId={id}
                              entityType="campaign"
                              variant="black"
                              className="t:w-283px t:h-62px t:text-24px t:leading-30px t:font-bold rounded-10px"
                            />
                          </div>
                          <div>
                            <Button variant="white"
                              className="t:w-283px  t:text-24px t:leading-30px t:font-bold rounded-10px">
                              Share
                            </Button>
                          </div>

                        </>
                      ) : (
                        <div className="flex flex-col t:flex-row t:gap-10px items-center justify-center text-center t:pt-40px">
                          <div className="flex-1 flex flex-col gap-5px items-center justify-center bg-white rounded-10px t:w-96px t:h-86px">
                            <img className="w-16px h-16px"
                              src="/images/campaign/icon-plus.svg"
                            />
                            <span className="text-12px font-bold text-blue-darker">
                              Raised {Math.min(campaign.raised / campaign.goal * 100, 100)}% of the goal
                            </span>
                          </div>
                          <div className="flex-1 flex flex-col gap-5px items-center justify-center bg-white rounded-10px t:w-96px t:h-86px">
                            <img className="w-16px h-16px items-center"
                              src="/images/campaign/raised.svg"
                            />
                            <span className="text-12px font-bold text-blue-darker">
                              {campaign.totalChallenges} challenges created
                            </span>
                          </div>
                          <div className="flex-1 flex flex-col gap-5px items-center justify-center bg-white rounded-10px t:w-96px t:h-86px">
                            <img className="w-16px h-16px items-center"
                              src="/images/campaign/icon-telegram.svg"
                            />
                            <span className="text-12px font-bold text-blue-darker">
                              {campaign.shares}  shares
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/*<div>
                      Chain Movers
                      {campaign.posts.map(post => (
                        <>{post.user}</>
                      ))}
                    </div>*/}
                  </div>



                  <div className="font-light text-center t:text-16px t:leading-20px t:pt-40px">
                    Want to join the movement? 🎉
                  </div>
                </div>
              </div>


              <div className="flex-1">
                <a>
                  <Ellipsis className="mt-10px font-light text-12px leading-15px" maxHeight={40} title={campaign.description}>
                    {campaign.description}
                  </Ellipsis>
                  <div className="font-bold text-12px leading-15px underline">more</div>
                </a>
              </div>
            </div>

          </div>






        </div>


        <div id="footer" className="w-full bg-footer">
          <div className="w-320px t:w-708px d:w-1140px mx-auto">
            <Footer />
          </div>
        </div>
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
