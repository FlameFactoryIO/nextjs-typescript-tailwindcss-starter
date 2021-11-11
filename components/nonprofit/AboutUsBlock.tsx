import { Block, EmptyBlock } from "./Block";
import { EditPenIcon, MegaphoneIcon } from "./Icons";
import React, { useState } from "react";
import Interest from "../../dtos/Interest";
import AboutUsEditor from "./AboutUsEditor";
import Nonprofit from "../../dtos/Nonprofit";
import { FaMapMarkerAlt } from "react-icons/fa";

const AboutUsBlock = ({
  nonprofit,
  ownsNonprofit,
  displayLocationAndInterests = false
}: {
  nonprofit: Nonprofit,
  ownsNonprofit: boolean,
  displayLocationAndInterests?: boolean,
}) => {
  const [isEditorOpen, setEditorOpen] = useState(false);

  const handleAboutUsSave = (
    description: string,
    interests: number[],
    locations: string[]
  ) => {
    try {
      // todo save to db
    } catch (e) {
    } finally {
      setEditorOpen(false);
    }
  };

  if (!nonprofit?.testimonials?.length) {
    if (!ownsNonprofit) {
      return null;
    }

    return (
      <EmptyBlock
        icon={<MegaphoneIcon />}
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
        onClick={() => setEditorOpen(true)}
      />
    );
  }

  return (
    <Block>
      <div className="flex">
        <div className="font-bold text-16px leading-30px t:text-20px">
          About us
        </div>
        {ownsNonprofit && (
          <div onClick={() => setEditorOpen(true)} className="cursor-pointer ml-5px">
            <EditPenIcon/>
          </div>
        )}
      </div>

      <div className="font-light text-13px leading-19-5px t:text-14px t:leading-21px">
        {nonprofit.description}
      </div>

      {displayLocationAndInterests && (
        <div className="flex flex-wrap items-center gap-y-5px gap-x-10px pt-14px text-13px">
          {nonprofit.interests?.map((interests, index) => (
            <div key={`${location}_${index}`} className="">
              <div className="flex items-center justify-center px-5px h-42px rounded-10px border-1px">
                <span className="font-bold">{interests.interest.name}</span>
              </div>
            </div>
          ))}
          {nonprofit.locations?.map((location, index) => (
            <div key={`${location}_${index}`} className="">
              <div className="flex items-center justify-center gap-8px px-5px h-42px rounded-10px border-1px">
                <FaMapMarkerAlt />
                <span title={location.address} className="overflow-ellipsis overflow-hidden max-w-220px">{location.address}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {isEditorOpen && (
        <AboutUsEditor nonprofit={nonprofit} onSave={handleAboutUsSave} onCancel={() => setEditorOpen(false)} />
      )}
    </Block>
  );
};

export default AboutUsBlock;
