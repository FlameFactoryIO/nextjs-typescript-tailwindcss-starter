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
import LinesEllipsis from 'react-lines-ellipsis'
import moment from 'moment';
import { DonationList } from "../../components/Donations";
import { useDonations } from "../../mtc-api/donations/Donation";

const CampaignProfile = ({ id, campaign }) => {

  const donations = useDonations({
    type: "campaign",
    campaignId: id,
  });

  const [line, setLine] = useState('10');

  useEffect(() => {
    logEvent('View Campaign Page', {
      id,
      nonprofitId: campaign.nonprofit?.id,
      nonprofitName: campaign.nonprofit?.name,
    });
  }, []);

  const handleShowMore = () => {
    setLine((campaign.description.length).toString())
  }

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
          className="flex flex-col t:flex-row justify-center
                      pt-50px d:pt-77px bg-footer">
          <div className="flex flex-col t:flex-row 
                          t:gap-50px d:gap-100px px-10px">
            {!moment().isAfter(campaign.endDate) ? (
              <>
                <div className="t:max-w-474px bg-white t:mt-0 rounded-10px t:rounded-0px h-full">

                  <div className="flex flex-col items-center  text-center
                                  px-20px  pb-20px
                                  t:px50px">
                    <div className="text-20px t:text-24px t:font-light pt-20px t:pt-40px">Support</div>
                    <div className="text-16px t:text-24px t:leading-30px  font-bold
                                    pb-20px">
                      {campaign.nonprofit.name}
                    </div>

                    {!moment().isAfter(campaign.endDate) ? (
                      <>
                        <div className="pb-20px">
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

                    <div className="text-16px t:text-24px t:leading-30px font-bold pb-20px t:pb-30px">
                      <div>
                        <hr className="border-1px mb-20px t:mb-30px bg-secondary-gray-1" />
                      </div>

                      See who’s donating
                    </div>
                    {campaign.raised > 0 ? (
                      <div
                        className="flex flex-col
                            bg-footer rounded-20px
                            px-10px pt-25px pb-15px
                            max-w-320px h-402px
                        "
                      >
                        <DonationList className="flex-1 text-left" donations={donations} />
                      </div>
                    ) : (
                      <>
                        <div className="t:pb-20px text-gray-400 font-light">No donations yet.</div>
                        <div className="t:pb-20px text-gray-400 font-light">Be the first!</div>
                      </>

                    )}
                  </div>

                </div>
              </>
            ) : null}

            <div className="flex-1 order-first t:order-2 flex flex-col t:flex-row items-center pb-20px">
              <div className="">
                <div className="flex flex-col d:flex-row d:items-start t:gap-20px d:gap-50px">
                  <div className="max-w-280px  flex flex-col items-start t:pb-30px">
                    <div className="pt-20px t:pt-40px t:pb-20px justify-center">
                      <VideoPlayer className="max-w-280px max-h-239px t:max-w-414px d:max-h-479px" videoUrl={campaign.videoUrl} videoImage={campaign.imageUrl} />
                    </div>

                    <div className="flex flex-row gap-20px items-start pt-10px">
                      <img src={campaign.nonprofit.logoUrl} className="rounded-full h-30px w-30px t:h-40px t:w-40px object-cover" />
                      <div className="pt-5px text-12px t:text-14px leading-20px text-gray-400
                              t:max-w-272px">

                        Created by <span className="font-bold">{campaign.nonprofit.name}</span>
                      </div>
                    </div>

                    <div className="pt-20px text-12px t:text-14px font-light">
                      <LinesEllipsis
                        text={campaign.description}
                        maxLine={line}
                        ellipsis='...more'
                        trimRight
                        basedOn='words'
                        onClick={handleShowMore}
                      />
                    </div>

                  </div>

                  <div className="flex-1 pt-20px t:pt-0 d:pt-40px max-w-280px justify-center t:max-w-350px">
                    <div className="flex flex-col gap-6px">
                      <div className="text-gray-400 font-light">
                        Raising For
                      </div>
                      <div className="text-16px t:text-20px font-bold t:pb-20px">
                        {campaign.nonprofit.name}
                      </div>

                      <div className="h-6px">
                        <div className="bg-green-500 bg-opacity-40 h-6px rounded-full" />
                        <div className="bg-green-500 h-6px rounded-full transform -translate-y-6px" style={{ maxWidth: `${Math.round(campaign.raised * 100 / campaign.goal)}%` }} />
                      </div>
                      <div className="text-14px text-right">
                        <span className="text-green-500 font-bold ">Raised ${campaign.raised}</span> of ${Math.round((campaign.goal / 1000 + Number.EPSILON) * 100) / 100}k Goal
                      </div>

                      <div className="flex flex-row gap-10px pt-30px">
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
                            <div className="pt-20px max-w-280px">
                              <DonateButton
                                origin="campaigns"
                                nonprofitId={campaign.nonprofitId}
                                nonprofitName={campaign.nonprofit.name}
                                campaignId={id}
                                entityId={id}
                                entityType="campaign"
                                variant="black"
                                className="t:h-62px text-14px t:leading-30px t:font-bold rounded-10px"
                              />
                            </div>
                            <div className="pt-10px ">
                              <Button variant="white"
                                className="w-280px text-14px t:leading-30px t:font-bold rounded-10px">
                                Share
                              </Button>
                            </div>

                          </>
                        ) : (
                          <div className="flex flex-col t:flex-row gap-10px items-center justify-center text-center pt-20px t:pt-40px">
                            <div className="flex-1 flex flex-col gap-5px items-center justify-center bg-white rounded-10px w-96px h-86px">
                              <img className="w-16px h-16px"
                                src="/images/campaign/icon-plus.svg"
                              />
                              <span className="text-12px font-bold text-secondary-violet">
                                Raised {Math.round(campaign.raised * 100 / campaign.goal)}% of the goal
                              </span>
                            </div>
                            <div className="flex-1 flex flex-col gap-5px items-center justify-center bg-white rounded-10px w-96px h-86px">
                              <img className="w-16px h-16px items-center "
                                src="/images/campaign/raised.svg"
                              />
                              <span className="text-12px font-bold text-secondary-violet">
                                {campaign.totalChallenges} challenges created
                              </span>
                            </div>
                            <div className="flex-1 flex flex-col gap-5px items-center justify-center bg-white rounded-10px w-96px h-86px">
                              <img className="w-16px h-16px items-center"
                                src="/images/campaign/icon-telegram.svg"
                              />
                              <span className="text-12px font-bold text-secondary-violet">
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



                    <div className="font-light text-center text-14px t:text-16px t:leading-20px pt-20px t:pt-40px">
                      Want to join the movement? 🎉
                    </div>
                  </div>
                </div>



              </div>

            </div>
          </div>


        </div>


        <div className="w-full bg-footer">
          <Footer />
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
