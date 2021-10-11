import { FC, useState } from "react";
import Button from "./Button";
import { Secondary } from "./Button.stories";
import Input from "./Input";

const CompanyCard: FC<{
  onDonate?: () => void;
}> = ({ onDonate }) => {
  // const onDonate = () => {
  //   donate({
  //     campaignId: campaign.id,
  //     challenge: {
  //       nonprofitId: campaign.nonprofit.paypalId || campaign.nonprofit.id,
  //       nonprofitName: campaign.nonprofit.name,
  //     },
  //     entityType: 'campaign',
  //     entityId: campaign.id,
  //   });
  // };

  return (
    <div className="grid grid-rows-6 p-30px mb-0">
      <div className="row-span-3">video</div>
      <div className="">stadistics</div>
      <div className="">title</div>
      <div className="flex flex-row mt-auto">
        {/* <Button type="button" onClick={onDonate}
        size={} variant={Secondary}></Button> */}
        {/* <Pressable style={styles.donateButton} onPress={onDonate}>
          <Text style={styles.donateText}>Donate</Text>
        </Pressable>
        <Pressable
          style={styles.moreButton}
          onPress={() => {
            window.open(`/campaign/${campaign.id}`, `_blank`);
          }}
        >
          <Text style={styles.moreText}>More</Text>
        </Pressable> */}
      </div>
    </div>
  );
};

export default CompanyCard;
