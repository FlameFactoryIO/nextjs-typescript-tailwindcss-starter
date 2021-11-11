import { Block } from "./Block";
import { EditPenIcon } from "./Icons";
import React from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';

const AboutUsBigBlock = ({ nonprofit, ownsNonprofit, onEditClick }) => (
  <Block>
    <div className="flex">
      <div className="font-bold text-16px leading-30px t:text-20px">
        About us
      </div>
      {ownsNonprofit && (
        <div onClick={onEditClick} className="cursor-pointer ml-5px">
          <EditPenIcon />
        </div>
      )}
    </div>
    <div className="font-light text-13px leading-19-5px t:text-14px t:leading-21px">
      {nonprofit.description}
    </div>
    <div className="flex flex-wrap items-center gap-y-5px gap-x-10px pt-14px text-13px">

      {nonprofit.interests ? (
        nonprofit.interests.map((interests, index) => (
          <div key={`${location}_${index}`} className="">
            <div className="flex items-center justify-center px-5px h-42px rounded-10px border-1px">
              <span className="font-bold">{interests.interest.name}</span>
            </div>
          </div>
        ))
      ) : ''
      }

      {nonprofit.locations ? (
        nonprofit.locations.map((location, index) => (
          <div key={`${location}_${index}`} className="">
            <div className="flex items-center justify-center gap-8px px-5px h-42px rounded-10px border-1px">
            <FaMapMarkerAlt />
              <span title={location.address} className="overflow-ellipsis overflow-hidden max-w-220px">{location.address}</span> 
            </div>
          </div>
        ))
      ) : ''
      }


    </div>

  </Block>
);

export default AboutUsBigBlock;
