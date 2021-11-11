import Head from "next/head";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import {
  getNonProfitData,
  getNonProfitDataByPaypalId,
} from "../mtc-api/nonprofit/useNonProfitPage";
import { getPaypalAuthToken } from "../mtc-api/nonprofit/usePaypalToken";
import { searchNonprofit } from "../mtc-api/nonprofit/useSearchNonprofit";
import cache from "../utils/cache";
import moment from "moment";
import redirect from "../utils/redirect";
import React, { useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
import { DonationList, TopAndRecentDonations } from "../components/Donations";
import NonprofitProfileTabs from "../components/nonprofit/NonprofitProfileTabs";
import {
  ArrowIcon,
  ClaimedIcon,
  EmptyBannerIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon, LinkIcon,
  YoutubeIcon
} from "../components/nonprofit/Icons";

type Mode = "public" | "preview" | "edit";

// noinspection JSUnusedGlobalSymbols
export default function NonprofitProfile({
  claiming,
  nonprofit,
  name,
  token,
  ownsNonprofit,
}) {
  const [mode, setMode] = useState<Mode>(ownsNonprofit ? "edit" : "public");

  console.debug("nonprofit ", JSON.stringify(nonprofit));
  return (
    <div className="w-full min-w-320px">
      <Head>
        <style type="text/css">
          {`
            .dots-background {
              background: url('/images/background-dots.png') left no-repeat, linear-gradient(90deg, #0A173D 0%, #0C163B 38.02%, #080613 100%);
              background-size: cover;
            }
          `}
        </style>
      </Head>

      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

      <div className="w-full dots-background">
        <div className="px-20px pt-50px h-500px d:pt-77px -mb-74px t:-mb-180px flex flex-col items-center t:items-stretch pt-60px">
          <div className={`flex flex-col t:flex-row items-center t:items-start t:pt-60px gap-16px ${mode === "public" && "pt-46px"}`}>

            {mode !== "public" && (
              <div className="t:order-last mt-40px t:mt-0 t:ml-auto">
                {mode === "preview" ? (
                  <Button variant="white" onClick={() => setMode("edit")}>Exit Public View</Button>
                ) : mode === "edit" ? (
                  <Button variant="white" onClick={() => setMode("preview")}>Preview Page</Button>
                ) : null}
              </div>
            )}

            <div className="t:order-first flex flex-col t:flex-row items-center mt-30px t:mt-0 gap-16px">
              <div
                aria-hidden
                className="flex items-center border-2px border-nonprofit-logo p-4px rounded-full relative"
              >
                <img
                  src={nonprofit.logoUrl}
                  className="rounded-full object-cover object-center w-80px h-80px t:w-140px t:h-140px"
                  alt=""
                />

                <ClaimedIcon className="absolute top-0 right-0 t:top-10px t:right-10px" />
              </div>

              <div className="text-center t:text-left flex flex-col items-center t:items-start gap-14px">
                <div className="font-extrabold text-white text-26px leading-31-2px">{nonprofit.name}</div>
                <div
                  className="
                    flex items-center gap-7px p-6px pr-17px
                    text-white font-light text-12px leading-18px
                    bg-black bg-opacity-40 rounded-full border-1px border-white border-opacity-20
                    "
                >
                  <LinkIcon />
                  <span className="overflow-ellipsis overflow-hidden max-w-220px">
                    {nonprofit.siteUrl}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col t:flex-row px-20px gap-20px">
          <div className="flex-1 flex flex-col">
            {nonprofit.bannerUrl ? (
              <img src={nonprofit.bannerUrl} className="h-103px t:h-276px object-cover rounded-10px t:rounded-24px" />
            ) : (
              <div className="h-103px t:h-276px bg-footer flex items-center justify-center rounded-10px t:rounded-24px">
                <EmptyBannerIcon />
              </div>
            )}
            <div className="mt-10px flex gap-10px">
              {nonprofit.facebook && <FacebookIcon />}
              {nonprofit.linkedIn && <LinkedinIcon />}
              {nonprofit.instagram && <InstagramIcon />}
              {nonprofit.youtube && <YoutubeIcon />}
              <Button size="small" className="ml-auto">Follow</Button>
            </div>
            <NonprofitProfileTabs className="mt-26px" />
          </div>

          <div className="flex-none bg-footer rounded-20px px-10px pt-25px pb-15px">
            <div className="flex flex-col items-center">
              <div className=" font-hand text-primary font-middle text-42px -mb-10px" style={{transform: "rotate(-5.4deg)"}}>Support <span className="text-21px">❤</span>️</div>
              <ArrowIcon />
            </div>

            <div className="mt-10px text-center text-20px leading-30px font-extrabold">{nonprofit.name}</div>

            <TopAndRecentDonations className="mt-20px h-600px t:h-auto" />
          </div>
        </div>

      <div className="w-full bg-footer">
        <Footer />
      </div>
    </div>
  );
}

const normalizePayPalNPSearchResults = (results) => ({
  claimed: false,
  ...results,
  ...results.contact,
  ...results.address,
  contactEmail: results.contact.email,
  street1: results.address.line1,
  street2: results.address.line2 || null,
  province: results.address.state,
  country: "USA",
  countryCode: "US",
  siteUrl: results.contact.website,
  paypalId: results.id,
  interests: results.categories,
});

export const getServerSideProps = async ({ req, res, params, query }) => {
  try {
    const { name, paypalId } = query;
    const claiming = !!query.claim;
    let nonprofit = cache.get(name);

    if (!nonprofit) {
      nonprofit = await (paypalId
        ? getNonProfitDataByPaypalId(paypalId)
        : getNonProfitData(name));

      if (nonprofit) {
        if (nonprofit.campaigns.length) {
          let current = nonprofit.campaigns.filter(
            (c) => !moment().isAfter(c.endDate) && (!c.hidden || c.isLive)
          );
          if (current.length) nonprofit.currentCampaign = current[0];
          nonprofit.pastCampaigns = nonprofit.campaigns.filter(
            (c) => moment().isAfter(c.endDate) && !c.hidden
          );
        }

        cache.set(name, nonprofit);
      } else {
        const token = await getPaypalAuthToken();

        const { results } = await searchNonprofit({
          token,
          search: name,
          pageSize: 1,
        });

        if (results.length) {
          nonprofit = normalizePayPalNPSearchResults(results[0]);
        }

        if (nonprofit) {
          cache.set(name, nonprofit);
        } else {
          console.info("redirecting tried to access nonprofit", name);
          redirect(res, "/");
          return {
            props: { nonprofit: null, name },
          };
        }
        return {
          props: {
            claiming,
            nonprofit,
            name,
          },
        };
      }
    }

    return {
      props: {
        claiming,
        nonprofit,
        name,
        token: req?.cookies?.token || null,
        ownsNonprofit: !!(
          req?.cookies?.token && req?.cookies?.paypalId == nonprofit.paypalId
        ),
      },
    };
  } catch (e) {
    redirect(res, "/");
    const { name } = query;
    return {
      props: { nonprofit: null, name },
    };
  }
};
