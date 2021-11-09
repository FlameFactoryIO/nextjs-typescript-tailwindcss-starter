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
import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { twitterShare } from "../mtc-api/share";
import { TopAndRecentDonations } from "../components/Donations";

// noinspection JSUnusedGlobalSymbols
export default function NonprofitProfile({
  claiming,
  nonprofit,
  name,
  token,
  ownsNonprofit,
}) {
  console.debug("nonprofit ", JSON.stringify(nonprofit));
  //1: public 2// owner 3//owner in preview
  const pageVariant: "1" | "2" | "3" = "3";
  return (
    <div className="w-full min-w-320px">
      <Head>
        <title>Nonprofit {nonprofit.name}</title>
      </Head>

      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />
      <div className="w-full bg-blue">
        <div
          id="hero-section"
          className="px-20px pt-88px pb-0
          t:pt-147px t:px-120px  items-center t:items-start

        "
        >
          {/* page preview */}
          <div>
            {pageVariant == "3" && (
              <div className="flex justify-between p-5px items-center border-1px border-yellow-border rounded-10px">
                <div className="text-white text-14px leading-21px font-light">
                  [ ] Page Preview
                </div>
                <Button
                  variant="white"
                  className=" text-black text-12px leading-18px font-blod"
                >
                  Exit Public View
                </Button>
              </div>
            )}
          </div>
          {/* logo section */}
          <div>
            {/*{pageVariant === "2" && (*/}
            {/*  <div className="flex justify-between p-5px items-center border-1px border-yellow-border rounded-10px">*/}
            {/*    <div className="text-white text-14px leading-21px font-light">*/}
            {/*      [ ] Page Preview*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*)}*/}
            {pageVariant == "3" && (
              <div className="flex flex-col  t:flex-row mt-30px t:mt-40px items-center gap-16px">
                <div
                  aria-hidden
                  className=" border-2px border-nonprofit-logo p-4px rounded-full  min-w-70px max-w-140px relative"
                >
                  <img
                    src={nonprofit.logoUrl}
                    className="rounded-full object-cover object-center w-70px h-70px t:w-140px t:h-140px"
                    alt=""
                  />

                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute  -top-2 -right-2"
                  >
                    <circle cx="13" cy="13" r="13" fill="#FBBC1B" />
                    <path
                      d="M18.8372 8.40744L11.6754 15.6058L8.29717 12.2103C7.75666 11.667 6.9459 11.667 6.40538 12.2103C5.86487 12.7535 5.86487 13.5684 6.40538 14.1117L10.7295 18.4581C10.9997 18.7297 11.4051 18.8657 11.6754 18.8657C11.9456 18.8657 12.351 18.7297 12.6213 18.4581L20.7289 10.3089C21.2695 9.76559 21.2695 8.9507 20.7289 8.40744C20.1884 7.86419 19.3777 7.86419 18.8372 8.40744Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="">
                  <div
                    className="text-white font-bold
                    text-26px leading-31-2px t:text-34px t:leading-40-8px
                    text-center t:text-left "
                  >
                    The Nobody&apos;s Cats Foundation
                  </div>
                  <div className="flex max-w-233px mx-auto mt-34px rounded-19px border-1px border-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99981 19.2254C15.0948 19.2254 19.2252 15.0951 19.2252 10C19.2252 4.90501 15.0948 0.774658 9.99981 0.774658C4.90476 0.774658 0.774414 4.90501 0.774414 10C0.774414 15.0951 4.90476 19.2254 9.99981 19.2254Z"
                        fill="#E84300"
                      />
                      <path
                        d="M10 20C4.48645 20 0 15.5143 0 10C0 4.48645 4.48645 0 10 0C15.5143 0 20 4.48645 20 10C20 15.5143 15.5143 20 10 20ZM10 1.54918C5.34004 1.54918 1.54918 5.34004 1.54918 10C1.54918 14.66 5.34004 18.4508 10 18.4508C14.66 18.4508 18.4508 14.6592 18.4508 10C18.4508 5.34004 14.66 1.54918 10 1.54918Z"
                        fill="#E84300"
                      />
                      <path
                        d="M9.38737 12.3968L8.21511 13.5811C7.72911 14.072 6.94208 14.072 6.4565 13.5812C5.97081 13.0905 5.97081 12.2954 6.4564 11.8048L8.80132 9.43591C9.28691 8.94533 10.074 8.94533 10.5596 9.43591C10.7215 9.59944 10.9839 9.59944 11.1458 9.43591C11.3077 9.27237 11.3077 9.00722 11.1458 8.84369C10.3365 8.02606 9.02446 8.02606 8.21511 8.84369L5.8702 11.2126C5.06084 12.0302 5.06084 13.3556 5.8702 14.1733C6.67946 14.9913 7.99156 14.9913 8.80134 14.1733L9.9736 12.989C10.1355 12.8255 10.1355 12.5603 9.9736 12.3968C9.81173 12.2333 9.54924 12.2333 9.38737 12.3968Z"
                        fill="white"
                      />
                      <path
                        d="M14.6041 5.35004C13.7948 4.53241 12.4824 4.53241 11.673 5.35004L10.2665 6.77088C10.1047 6.93441 10.1047 7.19956 10.2665 7.36309C10.4284 7.52662 10.6909 7.52662 10.8528 7.36309L12.2592 5.94225C12.7448 5.45168 13.5323 5.45168 14.0179 5.94225C14.5035 6.4328 14.5035 7.22796 14.0179 7.71851L11.4388 10.324C10.9532 10.8146 10.1661 10.8146 9.68052 10.324C9.51865 10.1605 9.25618 10.1605 9.09431 10.324C8.93243 10.4876 8.93243 10.7527 9.09431 10.9162C9.90366 11.7339 11.2157 11.7339 12.025 10.9162L14.6041 8.31075C15.4135 7.49311 15.4135 6.16767 14.6041 5.35004Z"
                        fill="white"
                      />
                    </svg>

                    <div
                      className="text-white font-light
                    text-12px leading-18px
                    text-center t:text-left"
                    >
                      {nonprofit.siteUrl}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* image down */}
          <div
            className="min-w-280px t:max-w-750px
          transform translate-y-30px t:translate-y-95px  "
          >
            <div aria-hidden className="flex-1">
              {/*shadow-4-10-24-8*/}
              <img
                className="rounded-24px object-contain"
                alt=""
                src={nonprofit.bannerUrl}
                width={750}
                height={276}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-40px t:mt-106px">
        <div id="content" className="flex flex-col t:flex-row mt-  t:mr-120px ">
          <div>
            <div
              id="share-links"
              className="flex items start gap-10px  ml-20px t:ml-120px"
            >
              {nonprofit.facebook && (
                <Link href={nonprofit.facebook} passHref>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="14" cy="14" r="14" fill="#4F8FEF" />
                    <path
                      d="M14.7528 15.0162H16.4732L17.1614 12.3065H14.7528V10.9516C14.7528 10.2539 14.7528 9.5968 16.1291 9.5968H17.1614V7.32067C16.937 7.29154 16.0899 7.22583 15.1952 7.22583C13.3269 7.22583 12.0001 8.34831 12.0001 10.4097V12.3065H9.93555V15.0162H12.0001V20.7742H14.7528V15.0162Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              )}
              {nonprofit.linkedIn && (
                <Link href={nonprofit.linkedIn} passHref>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="14" cy="14" r="14" fill="#0041E8" />
                    <path
                      d="M10.7827 9.43439C10.7825 9.78039 10.6425 10.1121 10.3936 10.3567C10.1446 10.6012 9.80703 10.7385 9.45512 10.7383C9.10321 10.7382 8.76579 10.6005 8.51707 10.3558C8.26836 10.111 8.12873 9.77908 8.12891 9.43309C8.12908 9.08709 8.26905 8.75533 8.51801 8.51079C8.76697 8.26626 9.10454 8.12898 9.45645 8.12915C9.80836 8.12932 10.1458 8.26694 10.3945 8.51172C10.6432 8.7565 10.7828 9.08839 10.7827 9.43439ZM10.8225 11.7044H8.16871V19.8711H10.8225V11.7044ZM15.0154 11.7044H12.3749V19.8711H14.9889V15.5855C14.9889 13.1981 18.1535 12.9763 18.1535 15.5855V19.8711H20.7741V14.6984C20.7741 10.6737 16.0902 10.8238 14.9889 12.8002L15.0154 11.7044Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              )}
              {nonprofit.instagram && (
                <Link href={nonprofit.instagram} passHref>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="14" cy="14" r="14" fill="#00A2E8" />
                    <path
                      d="M13.9998 11.9678C13.4608 11.9678 12.9439 12.1819 12.5628 12.563C12.1816 12.9441 11.9675 13.461 11.9675 14C11.9675 14.539 12.1816 15.0559 12.5628 15.437C12.9439 15.8182 13.4608 16.0323 13.9998 16.0323C14.5388 16.0323 15.0557 15.8182 15.4368 15.437C15.8179 15.0559 16.032 14.539 16.032 14C16.032 13.461 15.8179 12.9441 15.4368 12.563C15.0557 12.1819 14.5388 11.9678 13.9998 11.9678ZM13.9998 10.6129C14.8981 10.6129 15.7596 10.9698 16.3948 11.605C17.03 12.2402 17.3869 13.1017 17.3869 14C17.3869 14.8983 17.03 15.7599 16.3948 16.3951C15.7596 17.0303 14.8981 17.3871 13.9998 17.3871C13.1015 17.3871 12.2399 17.0303 11.6047 16.3951C10.9695 15.7599 10.6127 14.8983 10.6127 14C10.6127 13.1017 10.9695 12.2402 11.6047 11.605C12.2399 10.9698 13.1015 10.6129 13.9998 10.6129ZM18.403 10.4436C18.403 10.6682 18.3138 10.8835 18.155 11.0423C17.9962 11.2011 17.7808 11.2903 17.5562 11.2903C17.3317 11.2903 17.1163 11.2011 16.9575 11.0423C16.7987 10.8835 16.7095 10.6682 16.7095 10.4436C16.7095 10.219 16.7987 10.0036 16.9575 9.84481C17.1163 9.68601 17.3317 9.5968 17.5562 9.5968C17.7808 9.5968 17.9962 9.68601 18.155 9.84481C18.3138 10.0036 18.403 10.219 18.403 10.4436ZM13.9998 8.58067C12.3238 8.58067 12.0502 8.58541 11.2705 8.61996C10.7394 8.64502 10.383 8.71615 10.0525 8.84486C9.75846 8.95867 9.54642 9.09483 9.32084 9.32109C9.10882 9.52594 8.94579 9.77603 8.84394 10.0527C8.71523 10.3846 8.6441 10.7403 8.61972 11.2707C8.58449 12.0186 8.58042 12.2801 8.58042 14C8.58042 15.676 8.58517 15.9496 8.61972 16.7293C8.64478 17.2598 8.71591 17.6168 8.84394 17.9467C8.9591 18.2413 9.09459 18.4534 9.31949 18.6783C9.54778 18.9059 9.75981 19.0421 10.0511 19.1545C10.3857 19.2839 10.7421 19.3557 11.2705 19.3801C12.0183 19.4153 12.2798 19.4194 13.9998 19.4194C15.6757 19.4194 15.9494 19.4146 16.7291 19.3801C17.2588 19.355 17.6158 19.2839 17.9464 19.1559C18.2397 19.0414 18.4531 18.9052 18.678 18.6803C18.9063 18.452 19.0425 18.24 19.1549 17.9487C19.2837 17.6147 19.3555 17.2577 19.3798 16.7293C19.4151 15.9815 19.4191 15.72 19.4191 14C19.4191 12.3241 19.4144 12.0504 19.3798 11.2707C19.3548 10.741 19.2837 10.3833 19.1549 10.0527C19.0528 9.77632 18.8901 9.52632 18.6787 9.32109C18.474 9.10895 18.2238 8.94591 17.9471 8.84418C17.6152 8.71548 17.2588 8.64435 16.7291 8.61996C15.9812 8.58473 15.7197 8.58067 13.9998 8.58067ZM13.9998 7.22583C15.8403 7.22583 16.07 7.2326 16.7921 7.26648C17.5136 7.30035 18.0047 7.41348 18.4369 7.58148C18.884 7.75354 19.2606 7.98657 19.6373 8.36254C19.9817 8.70118 20.2483 9.11081 20.4183 9.56293C20.5857 9.99444 20.6995 10.4862 20.7333 11.2077C20.7652 11.9298 20.774 12.1595 20.774 14C20.774 15.8406 20.7672 16.0702 20.7333 16.7923C20.6995 17.5138 20.5857 18.0049 20.4183 18.4371C20.2488 18.8895 19.9822 19.2992 19.6373 19.6375C19.2985 19.9819 18.8889 20.2484 18.4369 20.4186C18.0054 20.5859 17.5136 20.6997 16.7921 20.7336C16.07 20.7654 15.8403 20.7742 13.9998 20.7742C12.1592 20.7742 11.9296 20.7674 11.2075 20.7336C10.486 20.6997 9.99488 20.5859 9.56268 20.4186C9.11039 20.2489 8.70069 19.9823 8.3623 19.6375C8.01776 19.2989 7.75122 18.8893 7.58123 18.4371C7.41323 18.0056 7.3001 17.5138 7.26623 16.7923C7.23439 16.0702 7.22559 15.8406 7.22559 14C7.22559 12.1595 7.23236 11.9298 7.26623 11.2077C7.3001 10.4856 7.41323 9.99512 7.58123 9.56293C7.75075 9.11053 8.01736 8.70079 8.3623 8.36254C8.70078 8.01789 9.11046 7.75132 9.56268 7.58148C9.99488 7.41348 10.4853 7.30035 11.2075 7.26648C11.9296 7.23464 12.1592 7.22583 13.9998 7.22583Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              )}
              {nonprofit.youtube && (
                <Link href={nonprofit.youtube} passHref>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="14" cy="14" r="14" fill="#FF003D" />
                    <path
                      d="M23.1062 9.97146C23.0039 9.61592 22.8047 9.29404 22.5297 9.04002C22.2469 8.7782 21.9004 8.59091 21.5227 8.49583C20.1094 8.13279 14.4469 8.13279 14.4469 8.13279C12.0863 8.10661 9.72626 8.22173 7.38012 8.47749C7.00247 8.57959 6.65656 8.77107 6.37316 9.03489C6.0947 9.29598 5.89301 9.61795 5.78765 9.97073C5.53455 11.2995 5.41158 12.6487 5.42039 14.0001C5.41136 15.3503 5.53403 16.6991 5.78765 18.0295C5.89075 18.3808 6.09169 18.7013 6.3709 18.9602C6.65011 19.2191 6.99781 19.4061 7.38012 19.5051C8.8123 19.8674 14.4469 19.8674 14.4469 19.8674C16.8105 19.8937 19.1736 19.7785 21.5227 19.5227C21.9004 19.4277 22.2469 19.2404 22.5297 18.9785C22.8082 18.7196 23.0061 18.3977 23.1054 18.0471C23.3651 16.7189 23.4914 15.3691 23.4825 14.017C23.502 12.6591 23.3759 11.303 23.1062 9.97073V9.97146ZM12.6467 16.5113V11.4896L17.3579 14.0008L12.6467 16.5113Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
          <div
            className="flex flex-col
                t:mt-9px d:mt-20px
                t:w-320px d:w-450px
                t:h-323px d:h-1539px
                bg-footer rounded-20px
                px-10px pt-25px pb-15px"
          >
            <TopAndRecentDonations className="flex-1" />
          </div>
        </div>
      </div>
      {/* <div id="share-links" className="flex items start gap10px"></div>
      <div id="share-links" className="flex items start gap10px"></div> */}
      <div id="footer" className="w-full bg-footer">
        <div className="px-20px pt-30px pb-15px mx-auto">
          <Footer />
        </div>
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
