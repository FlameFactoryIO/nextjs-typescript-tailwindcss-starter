import { FC, useRef, useState } from "react";
import { useDonations } from "../mtc-api/donations/Donation";
import InfiniteScroll from 'react-infinite-scroll-component';
import * as timeago from 'timeago.js';
import { v4 as uuidV4 } from 'uuid';
import { MoveTheChain } from "./svg/MoveTheChain";

export const DonationList: FC<{
  className?: string,
  donations?: any,
  maxItems?: number,
}> = ({
  className = "",
  donations,
  maxItems,
}) => {
  // id of the div that contains the infinite scroll have to be unique
  const uniqueId = useRef(uuidV4());

  return (
    <div
      id={uniqueId.current}
      className={`mt-20px flex-1 overflow-y-auto ${className}`}
    >
      <InfiniteScroll
        scrollableTarget={uniqueId.current}
        dataLength={donations?.data?.results?.length || 0}
        next={() => {
          if (!donations.isFetchingNextPage && donations.hasNextPage) {
            donations.fetchNextPage().catch();
          }
        }}
        hasMore={donations.hasNextPage && donations.data?.results?.length < maxItems}
        loader={
          <div className={'my-4 flex flex-row justify-center'}>
            Loading...
          </div>
        }
        endMessage={<MoveTheChain className="mx-auto w-16px h-16px"/>}
      >
        {donations.data?.results.map((d, index) => (
          <div key={d.id} className={`mr-1px mb-10px flex flex-col`}>
            <div className={`pt-10px pb-12px px-10px bg-white rounded-tl-10px rounded-tr-10px ${index % 2 === 0 ? "rounded-br-10px  tri-right btm-right" : "rounded-bl-10px tri-right btm-left"}`}>
              <div className="flex items-center">
                <div className="flex-1 font-bold text-14px leading-19px">{d.donor || <span className="font-light opacity-50 italic">Undisclosed donor</span>}</div>
                <div className="font-light opacity-50 text-11px leading-14px">{timeago.format(d.date)}</div>
              </div>
              <div className="mt-3px font-light text-11px leading-14px">Donated{" "}<span className="font-bold text-green-500">${d.amount}</span>{" "}to{" "}<span className="font-bold">{d.nonprofit}</span></div>
            </div>
            {/* https://css-tricks.com/snippets/css/css-triangle/ */}
            <div className={`w-0 h-0 border-t-4 border-b-4 border-l-8 border-r-8 border-t-white border-b-transparent ${index % 2 === 0 ? "mr-auto border-l-white border-r-transparent" : "ml-auto border-r-white border-l-transparent"}`}/>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export const TopAndRecentDonations: FC<{
  className?: string,
  maxItems?: number,
}> = ({
  className = "",
  maxItems = 50,
}) => {
  const [selected, setSelected] = useState<"recent" | "top">("recent");

  const topDonations = useDonations({ type: "top" });
  const recentDonations = useDonations({ type: "recent" });

  return (
    <div className={`flex flex-col overflow-hidden ${className}`}>
      <div className="font-bold uppercase grid grid-cols-2 text-center flex items-center justify-center select-none text-12px leading-14px font-light">
        <div className="flex items-center justify-center">
          <div className={`border-b-2 ${selected === "recent" ? "border-primary font-bold" : "border-transparent"} cursor-pointer`} onClick={() => {setSelected("recent")}}>Recent Donations</div>
        </div>
        <div className="flex items-center justify-center">
          <div className={`border-b-2 ${selected === "top" ? "border-primary font-bold" : "border-transparent"} cursor-pointer`} onClick={() => {setSelected("top")}}>Top Donations</div>
        </div>
      </div>

        {[["recent", recentDonations], ["top", topDonations]].map(([type, datasource]) => (
          <DonationList
            key={String(type)}
            className={`${type !== selected ? "hidden" : ""}`}
            donations={datasource}
            maxItems={maxItems}
          />
        ))}
    </div>
  );
}
