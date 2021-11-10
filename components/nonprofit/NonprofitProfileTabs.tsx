import React, { FC, useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import HomeTab from "./HomeTab";

type Tab = "home" | "our impact" | "campaigns" | "fundraiser" | "posts" | "contact";

const NonprofitProfileTabs: FC<{
  nonprofit?: Nonprofit;
  ownsNonprofit?: boolean,
  className?: string,
}> = ({
  nonprofit,
  ownsNonprofit,
  className = "",
}) => {
  const [selected, setSelected] = useState<Tab>("home");

  return (
    <div className={`w-full flex flex-col overflow-hidden ${className}`}>
      <div className="text-center flex gap-30px text-14px leading-16px font-light select-none">
        {["home", "our impact", "campaigns", "fundraiser", "posts", "contact"].map((tab: Tab) => (
          <div
            key={tab}
            className={`border-b-3px py-10px px-5px ${selected === tab ? "border-primary font-bold" : "border-transparent"} cursor-pointer uppercase whitespace-nowrap`}
            onClick={() => {setSelected(tab)}}
          >
            {tab}
          </div>
        ))}
      </div>

      {selected === "home" && <HomeTab/>}
      {selected === "our impact" && <HomeTab/>}
      {selected === "campaigns" && <HomeTab/>}
      {selected === "fundraiser" && <HomeTab/>}
      {selected === "posts" && <HomeTab/>}
      {selected === "contact" && <HomeTab/>}
    </div>
  );
};

export default NonprofitProfileTabs;
