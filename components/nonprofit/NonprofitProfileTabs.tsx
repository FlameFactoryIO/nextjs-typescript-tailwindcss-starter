import React, { FC, useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import HomeTab from "./HomeTab";

type Tab = "home" | "our impact" | "campaigns" | "fundraiser" | "posts" | "contact";

const NonprofitProfileTabs: FC<{
  nonprofit: Nonprofit;
  ownsNonprofit: boolean,
  className?: string,
}> = ({
  nonprofit,
  ownsNonprofit,
  className = "",
}) => {
  const [selected, setSelected] = useState<Tab>("home");

  return (
    <div className={className}>
      <div className="text-center select-none whitespace-nowrap mb-40px overflow-hidden h-39px max-w-full">
        <div className="flex overflow-x-auto gap-30px text-14px leading-16px font-light">
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
      </div>

      {selected === "home" && <HomeTab nonprofit={nonprofit} ownsNonprofit={ownsNonprofit}/>}
      {selected === "our impact" && <HomeTab nonprofit={nonprofit} ownsNonprofit={ownsNonprofit}/>}
      {selected === "campaigns" && <HomeTab nonprofit={nonprofit} ownsNonprofit={ownsNonprofit}/>}
      {selected === "fundraiser" && <HomeTab nonprofit={nonprofit} ownsNonprofit={ownsNonprofit}/>}
      {selected === "posts" && <HomeTab nonprofit={nonprofit} ownsNonprofit={ownsNonprofit}/>}
      {selected === "contact" && <HomeTab nonprofit={nonprofit} ownsNonprofit={ownsNonprofit}/>}
    </div>
  );
};

export default NonprofitProfileTabs;
