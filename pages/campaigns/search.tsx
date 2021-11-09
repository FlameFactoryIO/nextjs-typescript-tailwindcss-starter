// todo(hmassad): save search parameters and scroll position to localstorage

import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import TopNav from "../../components/TopNav";
import Input from "../../components/Input";
import { useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getInterests } from "../../mtc-api/interests/useGetInterests";
import Interest from "../../dtos/Interest";
import TrendingCampaign from "../../components/TrendingCampaign";
import { useSearchCampaigns } from "../../mtc-api/campaign/useGetCampaigns";

const Remove = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 16.5C4.0816 16.5 0.5 12.9184 0.5 8.5C0.5 4.0816 4.0816 0.5 8.5 0.5C12.9184 0.5 16.5 4.0816 16.5 8.5C16.5 12.9184 12.9184 16.5 8.5 16.5ZM8.5 14.9C10.1974 14.9 11.8253 14.2257 13.0255 13.0255C14.2257 11.8253 14.9 10.1974 14.9 8.5C14.9 6.80261 14.2257 5.17475 13.0255 3.97452C11.8253 2.77428 10.1974 2.1 8.5 2.1C6.80262 2.1 5.17475 2.77428 3.97452 3.97452C2.77428 5.17475 2.1 6.80261 2.1 8.5C2.1 10.1974 2.77428 11.8253 3.97452 13.0255C5.17475 14.2257 6.80262 14.9 8.5 14.9ZM8.5 7.3688L10.7624 5.1056L11.8944 6.2376L9.6312 8.5L11.8944 10.7624L10.7624 11.8944L8.5 9.6312L6.2376 11.8944L5.1056 10.7624L7.3688 8.5L5.1056 6.2376L6.2376 5.1056L8.5 7.3688Z"
      fill="#E84300"
    />
  </svg>
);

// noinspection JSUnusedGlobalSymbols
export default function CampaignSearch() {
  const [nameFilter, setNameFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [interestsFilter, setInterestsFilter] = useState<Interest[]>([]);

  const [isFilterExpanded, setFilterExpanded] = useState(false);

  const { data: interests } = useQuery<Interest[]>(["INTERESTS"], getInterests);
  const { data: campaigns } = useSearchCampaigns({
    name: nameFilter,
    location: locationFilter,
    interests: interestsFilter,
    // ...(process.env.NEXT_PUBLIC_PAYPAL_URL.indexOf("sandbox") == -1
    //   ? {
    //     state: locationFilter,
    //     cause_area: interestsFilter,
    //   }
    //   : {}),
    options: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: !!(interestsFilter || locationFilter || nameFilter),
    },
  });

  const handleInterestFilterToggle = (interest: Interest) => {
    setInterestsFilter((prev) => {
      if (prev?.indexOf(interest) > -1) {
        return [...prev.filter((i) => i !== interest)];
      }
      return [...prev, interest];
    });
  };

  return (
    <div className="w-full min-w-320px">
      <Head>
        <title>Move the Chain: Discover campaigns</title>
        <style type="text/css">{`
          .transparent-gradient {
            background: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.8));
          }
        `}</style>
      </Head>

      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />
      <div className="w-full bg-gradient-to-r from-blue-dark to-we-connect-charities-bg-right">
        <div
          id="hero"
          className="px-20px pt-82px pb-27px
          t:pt-104px  t:pb-25px
          d:pt-148px  d:pb-49px
          flex flex-col items-center mx-auto
          t:max-w-707px d:max-w-780px
        "
        >
          <div
            className="
              text-26px leading-31-2px d:text-48px d:leading-57-6px font-bold text-white text-center
              pb-20px t:pb-22px d:pb-40px"
          >
            Discover campaigns
          </div>
          <div
            className="
              text-16px leading-24px t:leading-20-8 d:text-18px d:leading-27px font-light text-white text-center
              pb-20px t:pb-35px d:pb-33px"
          >
            Text about campaigns that can go on two rows. Text about campaigns that can go on two rows.
            Text about campaigns that can go on two rows.
          </div>
          <div className="flex flex-col t:flex-row gap-5px items-stretch">
            <Input
              className="min-w-280px d:max-2-521px font-light"
              placeholder={"Search for a campaign or keyword"}
              onChange={(value) => setNameFilter(value)}
            />
            <Button className="min-w-110px t:max-w-140px d:max-w-130px">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-cream to-white ">
        <div
          className="w-280px t:w-708px d:w-auto t:max-w-1140px mx-auto
            px-20px t:px-30px pt-84px t:pt-88px d:pt-110px
            flex flex-col d:flex-row gap-35px d:items-start d:pb-81px"
        >
          <div
            id="filters"
            className="rounded-24px shadow-0-6-24 border-1px border-search-border border-opacity-20 bg-white p-15px select-none
            "
          >
            <div
              className="mt-23px mb-31px d:mb-39px
            text-18px leading-27px font-bold"
            >
              Browse campaigns by:
            </div>
            <div className=" ont-light text-16px leading-24px">Location</div>
            <Input
              className="border-primary"
              placeholder="Browse by location"
              onChange={(value) => setLocationFilter(value)}
            />

            <div className="mt-23px font-light text-16px leading-24px">
              Causes
            </div>
            <div
              className={`grid grid-cols-1 t:grid-cols-3 d:grid-cols-1 d:w-270px gap-10px overflow-hidden ${
                !isFilterExpanded ? "h-327px t:h-200px d:h-467px" : ""
              }`}
            >
              {interests &&
                interests.map((interest) => {
                  const t = interest.name.split(" ");
                  const emoji = t.shift();
                  const name = t.join(" ");
                  return (
                    <div
                      key={interest.name}
                      className={`
                        cursor-pointer rounded-10px border-1px border-secondary-gray-2 h-46px flex items-center px-20px gap-8px
                        text-13px leading-15-6px font-bold
                        ${
                          interestsFilter?.indexOf(interest) > -1
                            ? "border-none bg-primary text-white"
                            : ""
                        }
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
                      className="mx-auto rounded-24pxi text-12px leading-18px flex items-center gap-5px font-medium"
                      size="small"
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
          </div>

          <div id="results" className="flex-1 flex flex-col ">
            <div className="flex flex-col border-b-2px border-gray-100 select-none ">
              {!nameFilter &&
              !locationFilter &&
              interestsFilter.length === 0 ? (
                <div className="text-13px leading-19-5px d:text-16px d:leading-24px font-light">
                  Top Campaigns
                </div>
              ) : (
                // show selected filters
                <>
                  <div className="text-13px leading-19-5px d:text-16px d:leading-24px font-light">
                    Search results and top nonprofits for:
                  </div>
                  <div className="flex flex-row flex-wrap gap-x-20px gap-y-5px font-bold text-12px leading-18px d:text-14px d:leading-21px">
                    {locationFilter && (
                      <div
                        className="flex items-center gap-2px"
                        onClick={() => setLocationFilter(undefined)}
                      >
                        <span>{locationFilter}</span>
                        <Remove />
                      </div>
                    )}

                    {interestsFilter.map((interest) => {
                      const t = interest.name.split(" ");
                      t.shift();
                      const name = t.join(" ");
                      return (
                        <div
                          key={name}
                          className="flex items-center gap-2px cursor-pointer"
                          onClick={() =>
                            setInterestsFilter((prev) => [
                              ...prev.filter((i) => i !== interest),
                            ])
                          }
                        >
                          <span>{name}</span>
                          <Remove />
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {!campaigns?.results?.length ? (
              <div className="flex flex-col items-center justify-center mt-27px t:mt-47px d:mt-67px ">
                <Image
                  src="/images/shared/no-results.svg"
                  width={218}
                  height={218}
                />
                <div
                  className="font-light text-13px leading-16-9px text-16px leading-24px pb-46px"
                >
                  There are <span className="font-bold">no matches</span> for
                  the search criteria.
                </div>
              </div>
            ) : (
              // results grid
              <div
                id="results"
                className="flex-1 grid t:grid-cols-2 d:grid-cols-3
                gap-40px
                t:gap-x-30px t:gap-y-47px
                d:gap-x-20px d:gap-y-40px"
              >
                {campaigns?.results?.map((campaign) => (
                  <TrendingCampaign key={campaign.id} campaign={campaign} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div id="footer" className="w-full bg-footer">
        <div className="w-320px t:w-708px d:w-1140px mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient(); // new query client not to share data between users and server
//   await queryClient.prefetchQuery<Interest[]>(["INTERESTS"], getInterests);
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
