import React, { FC, useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import AboutUsBlock from "./AboutUsBlock";
import MasonryList from "./MasonryList";
import GalleryBlock from "./GalleryBlock";
import TestimonialsBlock from "./TestimonialsBlock";
import CampaignsBlock from "./CampaignsBlock";
import ContactsBlock from "./ContactsBlock";
import ClosedCampaignsBlock from "./ClosedCampaignsBlock";
import { EmptyBlock } from "./Block";
import { ContactInfoIcon } from "./Icons";

type Tab =
  | "home"
  | "our impact"
  | "campaigns"
  | "fundraiser"
  | "posts"
  | "contact";

const NonprofitProfileTabs: FC<{
  nonprofit: Nonprofit;
  ownsNonprofit: boolean;
  className?: string;
}> = ({ nonprofit, ownsNonprofit, className = "" }) => {
  const [selected, setSelected] = useState<Tab>("home");

  return (
    <div className={`w-full flex flex-col ${className}`}>
      <div className="overflow-x-auto mb-30px">
        <div className="text-center flex gap-30px text-14px leading-16px font-light select-none">
          {[
            "home",
            "our impact",
            "campaigns",
            /*"fundraiser", "posts",*/ "contact",
          ].map((tab: Tab) => (
            <div
              key={tab}
              className={`border-b-3px py-10px px-5px ${
                selected === tab
                  ? "border-primary font-bold"
                  : "border-transparent"
              } cursor-pointer uppercase whitespace-nowrap`}
              onClick={() => {
                setSelected(tab);
              }}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {selected === "home" && (
        <div className="w-full m-0 p-0 min-w-280px flex flex-col t:flex-row t:flex-wrap items-center gap-29px">
          <MasonryList>
            <AboutUsBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} />
            <GalleryBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} />
            <CampaignsBlock
              nonprofit={nonprofit}
              ownsNonprofit={ownsNonprofit}
            />
            <ContactsBlock
              nonprofit={nonprofit}
              ownsNonprofit={ownsNonprofit}
            />
            <TestimonialsBlock
              nonprofit={nonprofit}
              ownsNonprofit={ownsNonprofit}
            />
          </MasonryList>
        </div>
      )}
      {selected === "our impact" && (
        <div className="w-full m-0 p-0 min-w-280px flex flex-col t:flex-row t:flex-wrap items-center gap-29px">
          <AboutUsBlock
            nonprofit={nonprofit}
            ownsNonprofit={ownsNonprofit}
            displayLocationAndInterests={true}
          />
          <MasonryList>
            <GalleryBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} />
            <TestimonialsBlock
              nonprofit={nonprofit}
              ownsNonprofit={ownsNonprofit}
            />
          </MasonryList>
        </div>
      )}
      {selected === "campaigns" && (
        <div className="w-full m-0 p-0 min-w-280px flex flex-col t:flex-row t:flex-wrap items-center gap-29px">
          <CampaignsBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} />
          <ClosedCampaignsBlock
            nonprofit={nonprofit}
            ownsNonprofit={ownsNonprofit}
          />
        </div>
      )}
      {/*{selected === "fundraiser" && <HomeTab nonprofit={nonprofit} ownsNonprofit={ownsNonprofit}/>}*/}
      {/*{selected === "posts" && <HomeTab nonprofit={nonprofit} ownsNonprofit={ownsNonprofit}/>}*/}
      {selected === "contact" && (
        <ContactsBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} />
      )}
    </div>
  );
};

export default NonprofitProfileTabs;
