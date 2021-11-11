import React, { FC, useState } from "react";
import { FaClosedCaptioning, FaMapPin, FaXRay } from "react-icons/fa";
import Interest from "../dtos/Interest";
import Location from "../dtos/Location";
import Button from "./Button";
import CausesSelector from "./Causes";
import Input from "./Input";

const AboutUsEditor: FC<{
  description?: string;
  interests: Interest[];
  locations: Location[];
  onDescriptionChange: (value: string) => void;
  onInterestsChange: (value: Interest[]) => void;
  onLocationsChange: (value: string) => void;
}> = ({
  description = "",
  interests = [],
  locations = [],
  onDescriptionChange = () => {},
  onInterestsChange = () => {},
  onLocationsChange = () => {},
}) => {
  const [location, setLocation] = useState("");
  return (
    // SECTION CONTAINER
    <div className="flex flex-col p-20px">
      <div className="flex flex-col">
        <div className="font-bold text-20px">About</div>
        <div id="about-input" className=" pb-30px t:pb-40px">
          <Input
            className="w-full
                    h-180px
                    bg-white border-1px border-solid border-input d:h-227px d:mx-0
                  "
            placeholder="Add description"
            value={description}
            multiline
            onChange={onDescriptionChange}
          />
        </div>
      </div>
      <div className="grid t:grid-cols-2 gap-30px ">
        <div
          id="add-location"
          className="flex-1  flex flex-col gap-12px items-start  "
        >
          <div className="font-bold">Add Location</div>
          <div className="flex  gap-15px">
            <div id="location-input" className=" items-center flex-1">
              <Input
                className="min-w-200px
                    bg-white border-1px border-solid border-input
                    t:max-w-642px
                    d:max-w-522px 
                  "
                value={location}
                onChange={setLocation}
                prefix={<FaMapPin className="ml-14px" />}
                placeholder="Add Location"
              />
            </div>
            <Button size="small">Add</Button>
          </div>
          <div className="flex flex-col items-start">
            <div className="font-light text-10px">Location</div>
            {locations
              ? locations.map((location: Location) => {
                  <div className="bg-gray-200">
                    <FaMapPin />
                    {location.address}
                    <FaClosedCaptioning />
                  </div>;
                })
              : null}
          </div>
        </div>
        <div id="add-more-categories" className="flex flex-col gap-11px ">
          <div className="font-bold">Add more categories</div>
          <CausesSelector
            onChange={onInterestsChange}
            interests={interests}
            showLoadMore={false}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutUsEditor;
