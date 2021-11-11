import React, { FC, useState } from "react";
import { FaClosedCaptioning, FaMapMarkerAlt } from "react-icons/fa";
import Interest from "../dtos/Interest";
import Location from "../dtos/Location";
import Button from "./Button";
import CausesSelector from "./Causes";
import Input from "./Input";
import Nonprofit from "../dtos/Nonprofit";

const AboutUsEditor: FC<{
  nonprofit: Nonprofit;
  onSave: (
    description: string,
    interests: Interest[],
    locations: Location[]
  ) => void;
  onCancel: () => void;
}> = ({ nonprofit, onSave = () => {}, onCancel = () => {} }) => {
  const [description, setDescription] = useState(nonprofit.description);
  const [locations, setLocations] = useState(
    nonprofit.locations.map((location) => location.address)
  );
  const [interests, setInterests] = useState(nonprofit.interests);

  const [location, setLocation] = useState("");

  return (
    // SECTION CONTAINER
    <div className="flex flex-col p-20px">
      <div className="flex flex-col">
        <div className="font-bold text-20px">About</div>
        <div id="about-input" className=" pb-30px t:pb-40px">
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
      <div className="grid t:grid-cols-2 gap-30px ">
        <div
          id="add-location"
          className="flex-1 flex flex-col gap-12px items-start"
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
                prefix={<FaMapMarkerAlt className="ml-14px" />}
                placeholder="Add Location"
              />
            </div>
            <Button
              size="small"
              onClick={() => setLocations([...locations, location])}
            >
              Add
            </Button>
          </div>
          <div className="flex flex-col items-start">
            <div className="font-light text-10px">Location</div>
            {locations ? (
              locations.map((location,index) => (
                <div key={`${location}_${index}`} className="bg-gray-200">
                  <FaMapMarkerAlt />
                  {location}
                  <FaClosedCaptioning />
                </div>
              ))
            ) : (
              <div className="text-gray-500 font-light">Specify locations</div>
            )}
          </div>
        </div>
        <div id="add-more-categories" className="flex flex-col gap-11px ">
          <div className="font-bold">Add more categories</div>
          <CausesSelector
            onChange={setInterests}
            interests={interests}
            showLoadMore={false}
          />
        </div>
      </div>
      <div className="flex item-center "></div>
      <Button className="mx-auto m-10px" variant="primary" type="submit"   size="small">SAVE</Button>
    </div>
  );
};
export default AboutUsEditor;
