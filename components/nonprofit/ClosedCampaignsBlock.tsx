import { Block } from "./Block";
import React, { useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import VideoPlayer from "../VideoPlayer";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import DonateButton from "../DonationButton";
import Button from "../Button";
import Ellipsis from "@quid/react-ellipsis";
const ClosedCampaignsBlock = ({
  nonprofit,
  ownsNonprofit,
}: {
  nonprofit: Nonprofit;
  ownsNonprofit: boolean;
}) => {
  if (!nonprofit?.campaigns?.length) {
    return null;
  }

  return (
    <Block className="flex flex-col gap-50px">
      {nonprofit?.campaigns.map((c, index) => (
        <div key={c.id}>
          {index === 0 && (
            <div className="flex flex-col  t:justify-between t:flex-row">
              <div className="font-bold text-16px leading-30px t:text-20px">
                Closed Campaigns
              </div>
            </div>
          )}
          <div className="flex flex-col gap-5px t:gap-30px mt-12px t:flex-row items-center">
            <div className="relative select-none">
              {c.videoUrl ? (
                <VideoPlayer
                  videoUrl={c.videoUrl}
                  videoImage={c.imageUrl}
                  className="rounded-20px w-full h-320px"
                />
              ) : (
                <img
                  src={c.imageUrl}
                  className="rounded-20px object-cover h-320px"
                />
              )}
            </div>
            <div className=" flex flex-col t:w-360px">
              <div className="mt-0 t:mt-30px text-12px leading-16px font-light">
                Raising for
              </div>
              <div className="text-13px leading-16px font-bold mt-10px">
                {c.title}
              </div>

              <Ellipsis
                className="mt-10px font-light text-14px leading-21px block-with-text"
                maxHeight={35}
                title={nonprofit.description}
              >
                {c.description}
              </Ellipsis>
              <div className="flex-1 flex flex-col  gap-6px my-10px">
          
                <div className="relative h-6px">
                  <div className="bg-green-500 bg-opacity-40 h-6px rounded-full" />
                  <div
                    className="bg-green-500 h-6px rounded-full transform -translate-y-6px"
                    style={{
                      maxWidth: `${Math.min((c.raised / c.goal) * 100, 100)}%`,
                    }}
                  />
                </div>
                <div className="flex text-14px leading-16px text-pink-400">
                  <FaCalendarAlt />
                  <div className="flex-1 text-10px leading-16px font-bold">
                    Closed {moment(c.endDate).format("LL")}
                  </div>
                  <div className="text-12px leading-16px font-bold text-green-500">
                    <span className="text-black font-light">
                      ${c.raised} of
                    </span>{" "}
                    ${Math.round((c.goal / 1000 + Number.EPSILON) * 100) / 100}k
                    Goal
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 w-full  grid grid-cols-2 grid-rows-2  text-center gap-10px p-5px rounded-12px">
               {/* TODO: what property for views? */}
                <div className=" font-light text-12px leading-16px">
                  👁 <span className="font-bold">{c.timesShared.toString()}</span> view
                </div>
                <div className="font-light text-12px leading-16px">
                  🥁 <span className="font-bold">{c.shares.toString()}</span> Shares
                </div>
                <div className="col-span-2 font-bold text-12px leading-16px">
                  🎯 Raised{" "}
                  {`${Math.min(
                    (c.raised /
                     c.goal) *
                      100,
                    100
                  )}%`}{" "}
                  of the goal
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10px t:grid-cols-1 t:grid-rows-2  mt-10px">
                <DonateButton
                  origin="campaigns"
                  nonprofitId={nonprofit.id.toString()}
                  nonprofitName={nonprofit.name}
                  campaignId={c.id}
                  entityId={c.id.toString()}
                  entityType="campaign"
                  variant="black"
                >
                  Send thank you
                </DonateButton>
                <Button type="button">View More</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Block>
  );
};

export default ClosedCampaignsBlock;
