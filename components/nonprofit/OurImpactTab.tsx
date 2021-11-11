import React, { FC } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import MasonryList from "./MasonryList";
import GalleryBlock from "./GalleryBlock";
import TestimonialsBlock from "./TestimonialsBlock";
import AboutUsBlock from "./AboutUsBlock";

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
      <AboutUsBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} displayLocationAndInterests={true} />
      <MasonryList>
        <GalleryBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit}/>
        <TestimonialsBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit}/>
      </MasonryList>
    </div>
  );
};

export default HomeTab;
