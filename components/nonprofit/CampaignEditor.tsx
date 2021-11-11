import React, { FC, useState } from "react";
import { FaClosedCaptioning, FaMapMarkerAlt } from "react-icons/fa";
import Interest from "../../dtos/Interest";
import Location from "../../dtos/Location";
import Button from "../Button";
import CausesSelector from "../Causes";
import Input from "../Input";
import Nonprofit from "../../dtos/Nonprofit";
import Modal from "../Modal";
import { CloseIcon } from "./Icons";
import { CampaignEditorParameters } from "../../dtos/Campaign";
import { Money } from "../svg/Money";

const CampaignEditor: FC<{
  nonprofit: Nonprofit;
  onSave: (campaign: CampaignEditorParameters) => void;
  onCancel: () => void;
}> = ({ nonprofit, onSave = () => {}, onCancel = () => {} }) => {
  const [campaignId, setCampaignId] = useState<number | undefined>(
    nonprofit.currentCampaign?.id || undefined
  );
  const [title, setTitle] = useState(nonprofit.currentCampaign?.title || "");
  const [description, setDescription] = useState(
    nonprofit.currentCampaign?.description || ""
  );
  const [startDate, setStartDate] = useState(
    nonprofit.currentCampaign?.startDate || new Date()
  );
  const [endDate, setEndDate] = useState(
    nonprofit.currentCampaign?.endDate || new Date()
  );
  const [goal, setGoal] = useState(
    nonprofit.currentCampaign?.goal
      ? isNaN(Number(nonprofit.currentCampaign.goal))
        ? 0
        : Number(nonprofit.currentCampaign.goal)
      : 0
  );
  const [fileUrl, setFileUrl] = useState("");

  const handleGoalChange = (value: string) => {
    if (value.indexOf(".") > -1) return;

    const n = parseInt(value, 10);
    if (isNaN(n)) return;
    if (n < 0) return;

    setGoal(Math.min(n, 49999));
  };

  return (
    <Modal
      header="Update your profile"
      onClose={onCancel}
      footer={
        <Button
          onClick={() =>
            onSave({
              campaignId,
              title,
              description,
              startDate,
              endDate,
              goal,
              fileUrl,
            })
          }
        >
          Save
        </Button>
      }
    >
      <div className="flex flex-col p-20px">
        <div className="flex flex-col t:flex-row">
          <div id="title-input" className=" pb-30px t:pb-40px">
            <div className="flex flex-col">
              <div className="font-ligth text-12px">Campaign Name</div>
              <Input
                className="w-full  t:mx-0
                      bg-white border-1px border-solid border-input"
                placeholder="Campaign Name"
                value={title}
                onChange={setTitle}
              />
            </div>
          </div>
          <div id="goal-input" className=" pb-30px t:pb-40px">
            <Input
              className="mt-15px flex-1 text-center text-48px pr-30px"
              inputClassName={"text-center"}
              prefix={<Money className="w-18px h-18px ml-30px" />}
              onChange={handleGoalChange}
              value={goal.toString()}
            />
          </div>
        </div>
        <div>[TIME PICKER]</div>
        <div>[FILE EXPLORER]</div>
        <div>
          <div className="font-bold text-20px">Add description</div>
          <div id="description-input" className=" pb-30px t:pb-40px">
            <Input
              className="w-full h-180px t:h-227px t:mx-0
                      bg-white border-1px border-solid border-input"
              placeholder="Add description"
              value={description}
              multiline
              onChange={setDescription}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default CampaignEditor;
