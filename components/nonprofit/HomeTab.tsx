import React, { FC, useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import { EmptyBlock } from "./Block";
import {
  MegaphoneIcon,
  GalleryIcon,
  ContactInfoIcon,
  TestimonialsIcon,
} from "./Icons";
import AboutUsEditor from "./AboutUsEditor";
import Interest from "../../dtos/Interest";
import AboutUsBlock from "./AboutUsBlock";
import MasonryList from "./MasonryList";
import Campaign from "../../dtos/Campaign";
import CampaignEditor from "./CampaignEditor";

const HomeTab: FC<{
  nonprofit: Nonprofit;
  ownsNonprofit: boolean;
}> = ({ nonprofit, ownsNonprofit }) => {
  const [isAboutUsEditorOpen, setAboutUsEditorOpen] = useState(false);
  const [isCampaignEditorOpen, setCampaignEditorOpen] = useState(false);

  const handleAboutUsSave = (
    description: string,
    interests: Interest[],
    locations: string[]
  ) => {
    try {
      // todo save to db
    } catch (e) {
    } finally {
      setAboutUsEditorOpen(false);
    }
  };

  const handleCampaignSave = (campaign: Campaign) => {
    try {
      // todo save to db
    } catch (e) {
    } finally {
      setCampaignEditorOpen(false);
    }
  };

  if (!nonprofit) {
    return null;
  }
  return (
    <div
      className="w-full m-0 p-0 min-w-280px
      flex flex-col t:flex-row t:flex-wrap items-center gap-29px"
    >
      <MasonryList>
        {nonprofit?.description ? (
          <AboutUsBlock
            nonprofit={nonprofit}
            ownsNonprofit={ownsNonprofit}
            onEditClick={() => setAboutUsEditorOpen(true)}
          />
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
            onClick={() => setAboutUsEditorOpen(false)}
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
            onClick={() => setCampaignEditorOpen(true)}
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
      </MasonryList>

      {isAboutUsEditorOpen && (
        <AboutUsEditor
          nonprofit={nonprofit}
          onSave={handleAboutUsSave}
          onCancel={() => setAboutUsEditorOpen(false)}
        />
      )}
      {isCampaignEditorOpen && (
        <CampaignEditor
          nonprofit={nonprofit}
          onSave={handleCampaignSave}
          onCancel={() => setAboutUsEditorOpen(false)}
        />
      )}
    </div>
  );
};

export default HomeTab;
