import { useQuery } from "react-query";
import Interest from "../dtos/Interest";
import { getInterests } from "../mtc-api/interests/useGetInterests";
import { useState } from "react";
import Button from "./Button";

const CausesSelector = ({
  showLoadMore = true,
  interests = [],
  onChange,
}: {
  showLoadMore: boolean,
  interests: Interest[],
  onChange: (interests: Interest[]) => void,
}) => {
  const { data: allInterests } = useQuery<Interest[]>(["INTERESTS"], getInterests);

  const [isFilterExpanded, setFilterExpanded] = useState(!showLoadMore);

  const handleInterestFilterToggle = (interest: Interest) => {
    if (interests?.indexOf(interest) > -1) {
      onChange([...interests.filter((i) => i !== interest)]);
      return;
    }
    onChange([...interests, interest]);
  };

  return (
    <>
      <div
        className={`grid grid-cols-1 t:grid-cols-3 d:grid-cols-1 d:w-270px gap-10px overflow-hidden ${
          !isFilterExpanded ? "h-327px t:h-200px d:h-467px" : ""
        }`}
      >
        {allInterests && allInterests.map((interest) => {
          const t = interest.name.split(" ");
          const emoji = t.shift();
          const name = t.join(" ");
          return (
            <div
              key={interest.name}
              className={`
                cursor-pointer rounded-10px border-1px border-secondary-gray-2 h-46px flex items-center px-20px gap-8px
                text-13px leading-15-6px font-bold
                ${interests?.indexOf(interest) > -1 ? "border-none bg-primary text-white" : ""}
              `}
              onClick={() => handleInterestFilterToggle(interest)}
            >
              <div className="text-22px leading-22px">{emoji}</div>
              <div>{name}</div>
            </div>
          );
        })}
      </div>

      {!isFilterExpanded && (
        <div className="relative t:col-span-3 d:col-span-1 h-60px -mt-55px -mx-20px -mb-20px ">
          <div className="absolute inset-0 transparent-gradient rounded-b-24px m-5px bottom-0 pt-10px">
            <div className="relative">
              <Button
                className="mx-auto rounded-24pxi text-12px leading-18px flex items-center gap-5px font-medium min-h-24px"
                onClick={() => setFilterExpanded(true)}
              >
                Load more
                <svg
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.50002 4.3301L9.00628 0.823853L10.0079 1.82544L5.50002 6.33327L0.992188 1.82544L1.99377 0.823853L5.50002 4.3301Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CausesSelector;
