import React, { FC, useState } from "react";
import { FaClosedCaptioning, FaMapPin, FaXRay } from "react-icons/fa";
import Interest from "../dtos/Interest";
import Location from "../dtos/Location";
import Button from "./Button";
import Input from "./Input";

const AboutUsEditor: FC<{
  description?: string;
  interests: Interest[];
  locations: Location[];
  onDescriptionChange: (value: string) => void;
  onInterestsChange: (value: string) => void;
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
        <div
          id="about-input"
          className=" items-center pb-30px t:pb-40px"
        >
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
      <div className="flex gap-30px items-center justify-center">
        <div
          id="add-location"
          className="flex-1  flex flex-col gap-12px items-start"
        >
          <div>Add Location</div>
          <div className="flex">
            <div
              id="location-input"
              className="grid grid-rows-1 t:grid-cols-1 items-center pb-30px t:pb-40px"
            >
              <Input
                className="min-w-50px
                    
                    bg-white border-1px border-solid border-input
                    t:max-w-642px
                    d:max-w-522px d:h-227px d:mx-0
                  "
                value={location}
                onChange={setLocation}
                prefix={<FaMapPin className="ml-14px" />}
                placeholder="Add Location"
              />
            </div>
            <Button size="small">add</Button>
          </div>
          <div className="flex flex-col items-start">
            <div>Location</div>
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
        <div id="add-more-categories" className="flex"></div>
      </div>
    </div>
  );
};
export default AboutUsEditor;
