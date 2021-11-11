import React, { FC } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import AboutUsBlock from "./AboutUsBlock";
import MasonryList from "./MasonryList";
import TestimonialsBlock from "./TestimonialsBlock";
import GalleryBlock from "./GalleryBlock";
import CampaignsBlock from "./CampaignsBlock";
import ContactsBlock from "./ContactsBlock";

const HomeTab: FC<{
  nonprofit: Nonprofit;
  ownsNonprofit: boolean;
}> = ({ nonprofit, ownsNonprofit }) => {
  if (!nonprofit) {
    return null;
  }
  return (
    <div
      className="w-full m-0 p-0 min-w-280px
      flex flex-col t:flex-row t:flex-wrap items-center gap-29px"
    >
      <MasonryList>
        <AboutUsBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} />
        <GalleryBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} />
        <CampaignsBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} />
        <ContactsBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} />
        <TestimonialsBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} />
      </MasonryList>
    </div>
  );
};

export default HomeTab;
