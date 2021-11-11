import React, { FC } from "react";
import Head from "next/head";
import Masonry from "react-masonry-css";
import Nonprofit from "../../dtos/Nonprofit";
import { Block, EmptyBlock } from "./Block";
import { MegaphoneIcon } from "./MegaphoneIcon";
import { GalleryIcon } from "./GalleryIcon";
import { ContactInfoIcon } from "./ContactInfoIcon";
import { TestimonialsIcon } from "./TestimonialsIcon";

const HomeTab: FC<{
  nonprofit?: Nonprofit;
}> = ({ nonprofit }) => {
  return (
    <div
      className="w-full m-0 p-0 min-w-280px t:max-w-750px
      flex flex-col t:flex-row t:flex-wrap items-center gap-29px"
    >
      <Head>
        <style type="text/css">
          {`
            .my-masonry-grid {
              display: flex;
              margin-left: -30px; /* gutter size offset */
              width: auto;
            }
            .my-masonry-grid_column {
              padding-left: 30px; /* gutter size */
              background-clip: padding-box;
            }
            
            /* Style your items */
            .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
              margin-bottom: 30px;
            }
          `}
        </style>
      </Head>
      <Masonry
        breakpointCols={{
          default: 2,
          767: 1,
        }}
        className="w-full my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <Block>
          <div className="font-bold  text-16px leading-30px t:text-20px ">
            About us
          </div>
          <div className="font-light text-13px leading-19-5px t:text-14px t:leading-21px">
            We serve the 15 counties of southcentral Pennsylvania with Trap Neuter
            Return services and resources for humane management and reduction of
            populations of free-roaming domestic felines. Resources...{" "}
            <span className="font-bold text-primary">Read More</span>
          </div>
        </Block>

        <EmptyBlock
          icon={<GalleryIcon/>}
          text={<>
            <span className="font-bold">Upload and make awesome gallery</span>{" "}and add some text if you want.
          </>}
          actionText="Add gallery"
        />

        <EmptyBlock
          icon={<MegaphoneIcon/>}
          text={<>
            <span className="font-bold">The organization will make campaign</span>{" "}and add some text if you want.
          </>}
          actionText="Add campaign"
        />

        <EmptyBlock
          icon={<ContactInfoIcon/>}
          text={<>
            <span className="font-bold">Add contact info</span>{" "}and make it easy to find out more about your cause.
          </>}
          actionText="Add contact"
        />

        <EmptyBlock
          icon={<TestimonialsIcon/>}
          text={<>
            <span className="font-bold">Add testimonials info</span>{" "}and make it easy to find out more about your cause.
          </>}
          actionText="Add contact"
        />
      </Masonry>
    </div>
  );
};

export default HomeTab;
