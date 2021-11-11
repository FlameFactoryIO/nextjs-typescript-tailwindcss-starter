import React, { FC, useState } from "react";
import { FaClosedCaptioning, FaMapPin, FaXRay } from "react-icons/fa";
import Interest from "../dtos/Interest";
import Location from "../dtos/Location";
import Button from "./Button";
import Input from "./Input";
import Nonprofit from "../dtos/Nonprofit";

const AboutUsEditor: FC<{
  nonprofit: Nonprofit,
  onSave: (description: string, interests: Interest[], locations: Location[]) => void,
  onCancel: () => void,
}> = ({
  nonprofit,
  onSave = () => {},
  onCancel = () => {},
}) => {
  const [description, setDescription] = useState(nonprofit.description);
  const [locations, setLocations] = useState(nonprofit.locations);
  const [interests, setInterests] = useState(nonprofit.interests);

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
            className="w-full h-180px d:h-227px d:mx-0
                    bg-white border-1px border-solid border-input"
            placeholder="Add description"
            value={description}
            multiline
            onChange={setDescription}
          />
        </div>
      </div>
      <div className="flex gap-30px items-center justify-center">
        <div
          id="add-location"
          className="flex-1 flex flex-col gap-12px items-start"
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
              ? locations.map((location: Location) => (
                  <div key={location.address} className="bg-gray-200">
                    <FaMapPin />
                    {location.address}
                    <FaClosedCaptioning />
                  </div>
              ))
              : <div className="text-gray-500 font-light">Specify locations</div>}
          </div>
        </div>
        <div id="add-more-categories" className="flex"></div>
      </div>
    </div>
  );
};
export default AboutUsEditor;
