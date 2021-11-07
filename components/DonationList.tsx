import { FC, useMemo, useRef, useState } from "react";
import { useDonations } from "../mtc-api/donations/Donation";
import InfiniteScroll from 'react-infinite-scroll-component';
import * as timeago from 'timeago.js';
import { v4 as uuidV4 } from 'uuid';
import { MoveTheChain } from "./svg/MoveTheChain";

const DonationList: FC<{
  className?: string,
  maxItems?: number,
}> = ({
  className = "",
  maxItems = 50,
}) => {
  const [selected, setSelected] = useState<"recent" | "top">("recent");
  // ids of the divs that contain the infinite scrolls have to be unique
  const idTopRef = useRef(uuidV4());
  const idRecentRef = useRef(uuidV4());

  const topDonations = useDonations({ type: "top" });
  const recentDonations = useDonations({ type: "recent" });
  const selectedDonationDatasource = useMemo(() => {
    return selected === "recent" ? recentDonations : topDonations;
  }, [selected, recentDonations, topDonations]);

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

        {["recent", "top"].map(type => (
          <div
            key={type}
            id={type === "recent" ? idRecentRef.current : idTopRef.current}
            className={`${type !== selected ? "hidden" : ""} mt-20px flex-1 overflow-y-auto`}
          >
            <InfiniteScroll
              key={type}
              scrollableTarget={type === "recent" ? idRecentRef.current : idTopRef.current}
              dataLength={selectedDonationDatasource.data?.results?.length || 0}
              next={() => {
                if (!selectedDonationDatasource.isFetchingNextPage && selectedDonationDatasource.hasNextPage) {
                  selectedDonationDatasource.fetchNextPage().catch();
                }
              }}
              hasMore={selectedDonationDatasource.hasNextPage && selectedDonationDatasource.data?.results?.length < maxItems}
              loader={
                <div className={'my-4 flex flex-row justify-center'}>
                  Loading...
                </div>
              }
              endMessage={<MoveTheChain className="mx-auto w-16px h-16px"/>}
            >
              {selectedDonationDatasource.data?.results.map((d, index) => (
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
        ))}
    </div>
  );
}

export default DonationList;
