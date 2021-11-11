import React, { FC, useState } from "react";
import Head from "next/head";
import Masonry from "react-masonry-css";
import Nonprofit from "../../dtos/Nonprofit";
import { Block, EmptyBlock } from "./Block";
import {
  MegaphoneIcon,
  GalleryIcon,
  ContactInfoIcon,
  TestimonialsIcon,
  EditPenIcon,
} from "./Icons";
import AboutUsEditor from "../AboutUsEditor";
import Interest from "../../dtos/Interest";
import Location from "../../dtos/Location";
import Modal from "../Modal";
import { FaBold } from "react-icons/fa";
import { divide } from "rambda";

const HomeTab: FC<{
  nonprofit: Nonprofit;
  ownsNonprofit: boolean;
}> = ({ nonprofit, ownsNonprofit }) => {
  const [isAboutUsEditorOpen, setAboutUsEditorOpen] = useState(false);

  const handleAboutUsSave = (
    description: string,
    interests: Interest[],
    locations: Location[]
  ) => {
    try {
      // todo save to db
    } catch (e) {
    } finally {
      setAboutUsEditorOpen(false);
    }
  };
  if (!nonprofit) {
    null;
  }
  return (
    <>
      <Head>
        <style type="text/css">
          {`
            .my-masonry-grid {
              display: flex;
              width: auto;
            }
            .my-masonry-grid_column {
              background-clip: padding-box;
            }

            /* Style your items */
            .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
              margin-bottom: 15px;
            }
            
            @media screen and (min-width: 768px) {
              .my-masonry-grid_column:nth-child(odd) {
                margin-right: 7.5px;
              }
              .my-masonry-grid_column:nth-child(even) {
                margin-left: 7.5px;
              }
            }
          `}
        </style>
      </Head>

      <div
        className="w-full m-0 p-0 min-w-280px
        flex flex-col t:flex-row t:flex-wrap items-center gap-29px"
      >
        <Masonry
          breakpointCols={{
            default: 2,
            767: 1,
          }}
          className="w-full my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {nonprofit?.description ? (
            <Block>
              <div className="flex">
                <div className="font-bold text-16px leading-30px t:text-20px ">
                  About us
                </div>
                {ownsNonprofit && (
                  <div onClick={(e) => setAboutUsEditorOpen(true)}>
                    <EditPenIcon />
                  </div>
                )}
              </div>
              <div className="font-light text-13px leading-19-5px t:text-14px t:leading-21px">
                {nonprofit.description}
              </div>
            </Block>
          ) : ownsNonprofit ? (
            <EmptyBlock
              icon={<GalleryIcon />}
              text={
                <>
                  Add a description of the organization
                  <br />
                  <span className="font-bold">
                    to inspire people to support your cause.
                  </span>
                </>
              }
              actionText="Add About Us"
              onClick={() => setAboutUsEditorOpen(true)}
            />
          ) : null}

          {ownsNonprofit && (
            <EmptyBlock
              icon={<GalleryIcon />}
              text={
                <>
                  <span className="font-bold">
                    Upload and make awesome gallery
                  </span>
                  <br />
                  and add some text if you want.
                </>
              }
              actionText="Add gallery"
            />
          )}
          {ownsNonprofit && (
            <EmptyBlock
              icon={<MegaphoneIcon />}
              text={
                <>
                  <span className="font-bold">
                    The organization will make campaign
                  </span>
                  <br />
                  and add some text if you want.
                </>
              }
              actionText="Add campaign"
            />
          )}
          {ownsNonprofit && (
            <EmptyBlock
              icon={<ContactInfoIcon />}
              text={
                <>
                  <span className="font-bold">Add contact info</span>
                  <br />
                  and make it easy to find out more about your cause.
                </>
              }
              actionText="Add contact"
            />
          )}
          {ownsNonprofit && (
            <EmptyBlock
              icon={<TestimonialsIcon />}
              text={
                <>
                  <span className="font-bold">Add testimonials info</span>
                  <br />
                  and make it easy to find out more about your cause.
                </>
              }
              actionText="Add Testimonials"
            />
          )}
        </Masonry>
      </div>
      
      {isAboutUsEditorOpen && (
        <Modal  header={<div>Update your profile</div> }>
          <AboutUsEditor
            nonprofit={nonprofit}
            onSave={handleAboutUsSave}
            onCancel={() => setAboutUsEditorOpen(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default HomeTab;
