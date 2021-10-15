import { FC, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const TrendingCampaigns: FC = () => {
  return (
    <div
      id="trending-campaigns"
      className="container flex flex-col text-center mx-auto"
    >
      <h1 className="font-bold text-26 t:text-43 text-white">
        Trending Campaigns
      </h1>
      <p className="text-14 t:text-18 text-white">
        Campaigns are an opportunity for nonprofits to organize short burst
        fundraising to fund a specific need. The campaign is created by the
        nonprofit to explain the impact of your donation.{" "}
        <span className="font-bold ">#Transparencyiskey </span>
      </p>
      <div className="container flex flex-col t:flex-row mx-auto gap-10">
        <div className=" bg-gray-300 flex flex-col">
          <img style={{ width: 261, height: 320 }} />
        </div>
        <div className=" bg-gray-300 flex flex-col">
          <img style={{ width: 261, height: 320 }} />
        </div>
        <div className=" bg-gray-300 flex flex-col">
          <img style={{ width: 261, height: 320 }} />
        </div>
        <div className=" bg-gray-300 flex flex-col">
          <img style={{ width: 261, height: 320 }} />
        </div>
      </div>
    </div>
  );
};

export default TrendingCampaigns;
