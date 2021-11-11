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
import Image from "next/image";
import Link from "next/link";
import { twitterShare } from "../mtc-api/share";
import { DonationList, TopAndRecentDonations } from "../components/Donations";
import NonprofitProfileTabs from "../components/nonprofit/NonprofitProfileTabs";
import { EmptyBannerIcon } from "../components/nonprofit/EmptyBannerIcon";
import { Facebook } from "../components/svg/Facebook";

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
      {/*<div className="w-full bg-blue-darkest">*/}

      {/*    /!*<div>*!/*/}
      {/*    /!*  {pageVariant == "3" && (*!/*/}
      {/*    /!*    <div className="flex justify-between p-5px items-center border-1px border-yellow-border rounded-10px">*!/*/}
      {/*    /!*      <div className="text-white text-14px leading-21px font-light">*!/*/}
      {/*    /!*        [ ] Page Preview*!/*/}
      {/*    /!*      </div>*!/*/}
      {/*    /!*      <Button*!/*/}
      {/*    /!*        variant="white"*!/*/}
      {/*    /!*        className=" text-black text-12px leading-18px font-blod"*!/*/}
      {/*    /!*      >*!/*/}
      {/*    /!*        Exit Public View*!/*/}
      {/*    /!*      </Button>*!/*/}
      {/*    /!*    </div>*!/*/}
      {/*    /!*  )}*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    /!* logo section *!/*/}
      {/*    <div>*/}
      {/*      /!*{pageVariant === "2" && (*!/*/}
      {/*      /!*  <div className="flex justify-between p-5px items-center border-1px border-yellow-border rounded-10px">*!/*/}
      {/*      /!*    <div className="text-white text-14px leading-21px font-light">*!/*/}
      {/*      /!*      [ ] Page Preview*!/*/}
      {/*      /!*    </div>*!/*/}
      {/*      /!*  </div>*!/*/}
      {/*      /!*)}*!/*/}

      {/*        <div className="flex flex-col  t:flex-row mt-30px t:mt-40px items-center gap-16px">*/}
      {/*          <div*/}
      {/*            aria-hidden*/}
      {/*            className=" border-2px border-nonprofit-logo p-4px rounded-full  min-w-70px max-w-140px relative"*/}
      {/*          >*/}
      {/*            <img*/}
      {/*              src={nonprofit.logoUrl}*/}
      {/*              className="rounded-full object-cover object-center w-70px h-70px t:w-140px t:h-140px"*/}
      {/*              alt=""*/}
      {/*            />*/}

      {/*            <svg*/}
      {/*              width="26"*/}
      {/*              height="26"*/}
      {/*              viewBox="0 0 26 26"*/}
      {/*              fill="none"*/}
      {/*              xmlns="http://www.w3.org/2000/svg"*/}
      {/*              className="absolute  -top-2 -right-2"*/}
      {/*            >*/}
      {/*              <circle cx="13" cy="13" r="13" fill="#FBBC1B" />*/}
      {/*              <path*/}
      {/*                d="M18.8372 8.40744L11.6754 15.6058L8.29717 12.2103C7.75666 11.667 6.9459 11.667 6.40538 12.2103C5.86487 12.7535 5.86487 13.5684 6.40538 14.1117L10.7295 18.4581C10.9997 18.7297 11.4051 18.8657 11.6754 18.8657C11.9456 18.8657 12.351 18.7297 12.6213 18.4581L20.7289 10.3089C21.2695 9.76559 21.2695 8.9507 20.7289 8.40744C20.1884 7.86419 19.3777 7.86419 18.8372 8.40744Z"*/}
      {/*                fill="white"*/}
      {/*              />*/}
      {/*            </svg>*/}
      {/*          </div>*/}

      {/*          <div className="">*/}
      {/*            <div*/}
      {/*              className="text-white font-bold*/}
      {/*              text-26px leading-31-2px t:text-34px t:leading-40-8px*/}
      {/*              text-center t:text-left "*/}
      {/*            >*/}
      {/*              The Nobody&apos;s Cats Foundation*/}
      {/*            </div>*/}
      {/*            <div className="flex max-w-233px mx-auto mt-34px rounded-19px border-1px border-white">*/}
      {/*              <svg*/}
      {/*                width="20"*/}
      {/*                height="20"*/}
      {/*                viewBox="0 0 20 20"*/}
      {/*                fill="none"*/}
      {/*                xmlns="http://www.w3.org/2000/svg"*/}
      {/*              >*/}
      {/*                <path*/}
      {/*                  d="M9.99981 19.2254C15.0948 19.2254 19.2252 15.0951 19.2252 10C19.2252 4.90501 15.0948 0.774658 9.99981 0.774658C4.90476 0.774658 0.774414 4.90501 0.774414 10C0.774414 15.0951 4.90476 19.2254 9.99981 19.2254Z"*/}
      {/*                  fill="#E84300"*/}
      {/*                />*/}
      {/*                <path*/}
      {/*                  d="M10 20C4.48645 20 0 15.5143 0 10C0 4.48645 4.48645 0 10 0C15.5143 0 20 4.48645 20 10C20 15.5143 15.5143 20 10 20ZM10 1.54918C5.34004 1.54918 1.54918 5.34004 1.54918 10C1.54918 14.66 5.34004 18.4508 10 18.4508C14.66 18.4508 18.4508 14.6592 18.4508 10C18.4508 5.34004 14.66 1.54918 10 1.54918Z"*/}
      {/*                  fill="#E84300"*/}
      {/*                />*/}
      {/*                <path*/}
      {/*                  d="M9.38737 12.3968L8.21511 13.5811C7.72911 14.072 6.94208 14.072 6.4565 13.5812C5.97081 13.0905 5.97081 12.2954 6.4564 11.8048L8.80132 9.43591C9.28691 8.94533 10.074 8.94533 10.5596 9.43591C10.7215 9.59944 10.9839 9.59944 11.1458 9.43591C11.3077 9.27237 11.3077 9.00722 11.1458 8.84369C10.3365 8.02606 9.02446 8.02606 8.21511 8.84369L5.8702 11.2126C5.06084 12.0302 5.06084 13.3556 5.8702 14.1733C6.67946 14.9913 7.99156 14.9913 8.80134 14.1733L9.9736 12.989C10.1355 12.8255 10.1355 12.5603 9.9736 12.3968C9.81173 12.2333 9.54924 12.2333 9.38737 12.3968Z"*/}
      {/*                  fill="white"*/}
      {/*                />*/}
      {/*                <path*/}
      {/*                  d="M14.6041 5.35004C13.7948 4.53241 12.4824 4.53241 11.673 5.35004L10.2665 6.77088C10.1047 6.93441 10.1047 7.19956 10.2665 7.36309C10.4284 7.52662 10.6909 7.52662 10.8528 7.36309L12.2592 5.94225C12.7448 5.45168 13.5323 5.45168 14.0179 5.94225C14.5035 6.4328 14.5035 7.22796 14.0179 7.71851L11.4388 10.324C10.9532 10.8146 10.1661 10.8146 9.68052 10.324C9.51865 10.1605 9.25618 10.1605 9.09431 10.324C8.93243 10.4876 8.93243 10.7527 9.09431 10.9162C9.90366 11.7339 11.2157 11.7339 12.025 10.9162L14.6041 8.31075C15.4135 7.49311 15.4135 6.16767 14.6041 5.35004Z"*/}
      {/*                  fill="white"*/}
      {/*                />*/}
      {/*              </svg>*/}

      {/*              <div*/}
      {/*                className="text-white font-light*/}
      {/*              text-12px leading-18px*/}
      {/*              text-center t:text-left"*/}
      {/*              >*/}
      {/*                {nonprofit.siteUrl}*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*    /!* image down *!/*/}
      {/*    <div*/}
      {/*      className="min-w-280px t:max-w-750px*/}
      {/*    transform translate-y-30px t:translate-y-95px  "*/}
      {/*    >*/}
      {/*      <div aria-hidden className="flex-1">*/}
      {/*        /!*shadow-4-10-24-8*!/*/}
      {/*        <img*/}
      {/*          className="rounded-24px object-contain"*/}
      {/*          alt=""*/}
      {/*          src={nonprofit.bannerUrl}*/}
      {/*          width={750}*/}
      {/*          height={276}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="w-full mt-40px t:mt-106px">*/}
      {/*  <div id="content" className="flex flex-col t:flex-row mt-  t:mr-120px ">*/}
      {/*    <div>*/}
      {/*      <div*/}
      {/*        id="share-links"*/}
      {/*        className="flex items start gap-10px  ml-20px t:ml-120px"*/}
      {/*      >*/}
      {/*        {nonprofit.facebook && (*/}
      {/*          <Link href={nonprofit.facebook} passHref>*/}
      {/*            <svg*/}
      {/*              width="28"*/}
      {/*              height="28"*/}
      {/*              viewBox="0 0 28 28"*/}
      {/*              fill="none"*/}
      {/*              xmlns="http://www.w3.org/2000/svg"*/}
      {/*            >*/}
      {/*              <circle cx="14" cy="14" r="14" fill="#4F8FEF" />*/}
      {/*              <path*/}
      {/*                d="M14.7528 15.0162H16.4732L17.1614 12.3065H14.7528V10.9516C14.7528 10.2539 14.7528 9.5968 16.1291 9.5968H17.1614V7.32067C16.937 7.29154 16.0899 7.22583 15.1952 7.22583C13.3269 7.22583 12.0001 8.34831 12.0001 10.4097V12.3065H9.93555V15.0162H12.0001V20.7742H14.7528V15.0162Z"*/}
      {/*                fill="white"*/}
      {/*              />*/}
      {/*            </svg>*/}
      {/*          </Link>*/}
      {/*        )}*/}
      {/*        {nonprofit.linkedIn && (*/}
      {/*          <Link href={nonprofit.linkedIn} passHref>*/}
      {/*            <svg*/}
      {/*              width="28"*/}
      {/*              height="28"*/}
      {/*              viewBox="0 0 28 28"*/}
      {/*              fill="none"*/}
      {/*              xmlns="http://www.w3.org/2000/svg"*/}
      {/*            >*/}
      {/*              <circle cx="14" cy="14" r="14" fill="#0041E8" />*/}
      {/*              <path*/}
      {/*                d="M10.7827 9.43439C10.7825 9.78039 10.6425 10.1121 10.3936 10.3567C10.1446 10.6012 9.80703 10.7385 9.45512 10.7383C9.10321 10.7382 8.76579 10.6005 8.51707 10.3558C8.26836 10.111 8.12873 9.77908 8.12891 9.43309C8.12908 9.08709 8.26905 8.75533 8.51801 8.51079C8.76697 8.26626 9.10454 8.12898 9.45645 8.12915C9.80836 8.12932 10.1458 8.26694 10.3945 8.51172C10.6432 8.7565 10.7828 9.08839 10.7827 9.43439ZM10.8225 11.7044H8.16871V19.8711H10.8225V11.7044ZM15.0154 11.7044H12.3749V19.8711H14.9889V15.5855C14.9889 13.1981 18.1535 12.9763 18.1535 15.5855V19.8711H20.7741V14.6984C20.7741 10.6737 16.0902 10.8238 14.9889 12.8002L15.0154 11.7044Z"*/}
      {/*                fill="white"*/}
      {/*              />*/}
      {/*            </svg>*/}
      {/*          </Link>*/}
      {/*        )}*/}
      {/*        {nonprofit.instagram && (*/}
      {/*          <Link href={nonprofit.instagram} passHref>*/}
      {/*            <svg*/}
      {/*              width="28"*/}
      {/*              height="28"*/}
      {/*              viewBox="0 0 28 28"*/}
      {/*              fill="none"*/}
      {/*              xmlns="http://www.w3.org/2000/svg"*/}
      {/*            >*/}
      {/*              <circle cx="14" cy="14" r="14" fill="#00A2E8" />*/}
      {/*              <path*/}
      {/*                d="M13.9998 11.9678C13.4608 11.9678 12.9439 12.1819 12.5628 12.563C12.1816 12.9441 11.9675 13.461 11.9675 14C11.9675 14.539 12.1816 15.0559 12.5628 15.437C12.9439 15.8182 13.4608 16.0323 13.9998 16.0323C14.5388 16.0323 15.0557 15.8182 15.4368 15.437C15.8179 15.0559 16.032 14.539 16.032 14C16.032 13.461 15.8179 12.9441 15.4368 12.563C15.0557 12.1819 14.5388 11.9678 13.9998 11.9678ZM13.9998 10.6129C14.8981 10.6129 15.7596 10.9698 16.3948 11.605C17.03 12.2402 17.3869 13.1017 17.3869 14C17.3869 14.8983 17.03 15.7599 16.3948 16.3951C15.7596 17.0303 14.8981 17.3871 13.9998 17.3871C13.1015 17.3871 12.2399 17.0303 11.6047 16.3951C10.9695 15.7599 10.6127 14.8983 10.6127 14C10.6127 13.1017 10.9695 12.2402 11.6047 11.605C12.2399 10.9698 13.1015 10.6129 13.9998 10.6129ZM18.403 10.4436C18.403 10.6682 18.3138 10.8835 18.155 11.0423C17.9962 11.2011 17.7808 11.2903 17.5562 11.2903C17.3317 11.2903 17.1163 11.2011 16.9575 11.0423C16.7987 10.8835 16.7095 10.6682 16.7095 10.4436C16.7095 10.219 16.7987 10.0036 16.9575 9.84481C17.1163 9.68601 17.3317 9.5968 17.5562 9.5968C17.7808 9.5968 17.9962 9.68601 18.155 9.84481C18.3138 10.0036 18.403 10.219 18.403 10.4436ZM13.9998 8.58067C12.3238 8.58067 12.0502 8.58541 11.2705 8.61996C10.7394 8.64502 10.383 8.71615 10.0525 8.84486C9.75846 8.95867 9.54642 9.09483 9.32084 9.32109C9.10882 9.52594 8.94579 9.77603 8.84394 10.0527C8.71523 10.3846 8.6441 10.7403 8.61972 11.2707C8.58449 12.0186 8.58042 12.2801 8.58042 14C8.58042 15.676 8.58517 15.9496 8.61972 16.7293C8.64478 17.2598 8.71591 17.6168 8.84394 17.9467C8.9591 18.2413 9.09459 18.4534 9.31949 18.6783C9.54778 18.9059 9.75981 19.0421 10.0511 19.1545C10.3857 19.2839 10.7421 19.3557 11.2705 19.3801C12.0183 19.4153 12.2798 19.4194 13.9998 19.4194C15.6757 19.4194 15.9494 19.4146 16.7291 19.3801C17.2588 19.355 17.6158 19.2839 17.9464 19.1559C18.2397 19.0414 18.4531 18.9052 18.678 18.6803C18.9063 18.452 19.0425 18.24 19.1549 17.9487C19.2837 17.6147 19.3555 17.2577 19.3798 16.7293C19.4151 15.9815 19.4191 15.72 19.4191 14C19.4191 12.3241 19.4144 12.0504 19.3798 11.2707C19.3548 10.741 19.2837 10.3833 19.1549 10.0527C19.0528 9.77632 18.8901 9.52632 18.6787 9.32109C18.474 9.10895 18.2238 8.94591 17.9471 8.84418C17.6152 8.71548 17.2588 8.64435 16.7291 8.61996C15.9812 8.58473 15.7197 8.58067 13.9998 8.58067ZM13.9998 7.22583C15.8403 7.22583 16.07 7.2326 16.7921 7.26648C17.5136 7.30035 18.0047 7.41348 18.4369 7.58148C18.884 7.75354 19.2606 7.98657 19.6373 8.36254C19.9817 8.70118 20.2483 9.11081 20.4183 9.56293C20.5857 9.99444 20.6995 10.4862 20.7333 11.2077C20.7652 11.9298 20.774 12.1595 20.774 14C20.774 15.8406 20.7672 16.0702 20.7333 16.7923C20.6995 17.5138 20.5857 18.0049 20.4183 18.4371C20.2488 18.8895 19.9822 19.2992 19.6373 19.6375C19.2985 19.9819 18.8889 20.2484 18.4369 20.4186C18.0054 20.5859 17.5136 20.6997 16.7921 20.7336C16.07 20.7654 15.8403 20.7742 13.9998 20.7742C12.1592 20.7742 11.9296 20.7674 11.2075 20.7336C10.486 20.6997 9.99488 20.5859 9.56268 20.4186C9.11039 20.2489 8.70069 19.9823 8.3623 19.6375C8.01776 19.2989 7.75122 18.8893 7.58123 18.4371C7.41323 18.0056 7.3001 17.5138 7.26623 16.7923C7.23439 16.0702 7.22559 15.8406 7.22559 14C7.22559 12.1595 7.23236 11.9298 7.26623 11.2077C7.3001 10.4856 7.41323 9.99512 7.58123 9.56293C7.75075 9.11053 8.01736 8.70079 8.3623 8.36254C8.70078 8.01789 9.11046 7.75132 9.56268 7.58148C9.99488 7.41348 10.4853 7.30035 11.2075 7.26648C11.9296 7.23464 12.1592 7.22583 13.9998 7.22583Z"*/}
      {/*                fill="white"*/}
      {/*              />*/}
      {/*            </svg>*/}
      {/*          </Link>*/}
      {/*        )}*/}
      {/*        {nonprofit.youtube && (*/}
      {/*          <Link href={nonprofit.youtube} passHref>*/}
      {/*            <svg*/}
      {/*              width="28"*/}
      {/*              height="28"*/}
      {/*              viewBox="0 0 28 28"*/}
      {/*              fill="none"*/}
      {/*              xmlns="http://www.w3.org/2000/svg"*/}
      {/*            >*/}
      {/*              <circle cx="14" cy="14" r="14" fill="#FF003D" />*/}
      {/*              <path*/}
      {/*                d="M23.1062 9.97146C23.0039 9.61592 22.8047 9.29404 22.5297 9.04002C22.2469 8.7782 21.9004 8.59091 21.5227 8.49583C20.1094 8.13279 14.4469 8.13279 14.4469 8.13279C12.0863 8.10661 9.72626 8.22173 7.38012 8.47749C7.00247 8.57959 6.65656 8.77107 6.37316 9.03489C6.0947 9.29598 5.89301 9.61795 5.78765 9.97073C5.53455 11.2995 5.41158 12.6487 5.42039 14.0001C5.41136 15.3503 5.53403 16.6991 5.78765 18.0295C5.89075 18.3808 6.09169 18.7013 6.3709 18.9602C6.65011 19.2191 6.99781 19.4061 7.38012 19.5051C8.8123 19.8674 14.4469 19.8674 14.4469 19.8674C16.8105 19.8937 19.1736 19.7785 21.5227 19.5227C21.9004 19.4277 22.2469 19.2404 22.5297 18.9785C22.8082 18.7196 23.0061 18.3977 23.1054 18.0471C23.3651 16.7189 23.4914 15.3691 23.4825 14.017C23.502 12.6591 23.3759 11.303 23.1062 9.97073V9.97146ZM12.6467 16.5113V11.4896L17.3579 14.0008L12.6467 16.5113Z"*/}
      {/*                fill="white"*/}
      {/*              />*/}
      {/*            </svg>*/}
      {/*          </Link>*/}
      {/*        )}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div*/}
      {/*      className="flex flex-col*/}
      {/*          t:mt-9px d:mt-20px*/}
      {/*          t:w-320px d:w-450px*/}
      {/*          t:h-323px d:h-1539px*/}
      {/*          bg-footer rounded-20px*/}
      {/*          px-10px pt-25px pb-15px"*/}
      {/*    >*/}
      {/*      <TopAndRecentDonations className="flex-1" />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*/!* <div id="share-links" className="flex items start gap10px"></div>*/}
      {/*<div id="share-links" className="flex items start gap10px"></div> *!/*/}


      <div className="w-full dots-background">
        <div className="px-20px pt-50px h-500px d:pt-77px -mb-74px t:-mb-180px">
          {mode === "preview" ? (
            <Button onClick={() => setMode("edit")}>Edit Page</Button>
          ) : mode === "edit" ? (
            <Button onClick={() => setMode("preview")}>Preview Page</Button>
          ) : null}
        </div>
      </div>

      <div className="">
        <div className="flex flex-col t:flex-row px-20px gap-20px">
          <div className="flex-1">
            {nonprofit.bannerUrl ? (
              <div>
                <img src={nonprofit.bannerUrl} className="object-cover rounded-10px" />
                <div className="mt-10px flex">

                  <Button size="small" className="ml-auto">Follow</Button>
                </div>
              </div>
            ) : (
              <div className="h-276px bg-footer flex items-center justify-center rounded-10px">
                <EmptyBannerIcon />
              </div>
            )}
            <NonprofitProfileTabs />
          </div>

          <div className="w-300px bg-footer rounded-20px px-10px pt-25px pb-15px">
            <div className="flex flex-col items-center">
              <div className=" font-hand text-primary font-middle text-42px -mb-10px" style={{transform: "rotate(-5.4deg)"}}>Support <span className="text-21px">❤</span>️</div>
              <svg width="45" height="29" viewBox="0 0 45 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4515:5376)">
                  <path d="M1.2452 8.13333C3.19926 6.1599 6.30965 5.4964 8.91686 6.38544C11.4413 7.24308 13.3929 9.59383 13.8373 12.2171C14.0558 13.5337 13.8941 14.9841 13.24 16.1585C12.8967 16.7829 12.4498 17.3528 11.8674 17.7685C11.308 18.1635 10.6776 18.4297 9.99926 18.5462C8.6426 18.7793 7.21186 18.3273 6.34821 17.2356C5.4943 16.1511 5.2629 14.6277 5.59047 13.3009C5.9662 11.8279 6.8683 10.626 7.92048 9.55865C8.82113 8.644 9.83157 7.8264 10.902 7.12182C13.146 5.64539 15.647 4.61858 18.2798 4.0771C20.836 3.54682 23.5227 3.49335 26.0957 3.9698C28.6589 4.43898 31.0791 5.41625 33.2685 6.83617C35.3615 8.19186 37.2175 9.9476 38.701 11.9492C40.2284 14.014 41.3577 16.3284 42.0497 18.8024C42.2122 19.3789 42.3407 19.9604 42.4436 20.5457C42.5254 20.9861 42.1706 21.4729 41.7171 21.5218C41.238 21.5745 40.8283 21.269 40.7415 20.7945C40.6411 20.2263 40.5151 19.6618 40.3636 19.101C40.3501 19.0682 40.3439 19.0256 40.3304 18.9928C40.291 18.842 40.3379 19.0439 40.3476 19.0512C40.3121 18.9868 40.2997 18.9016 40.2812 18.8347C40.2345 18.6936 40.1963 18.5513 40.1496 18.4102C40.0575 18.1366 39.9653 17.863 39.8561 17.5919C39.4352 16.4963 38.9039 15.4778 38.3287 14.457C38.3397 14.4728 38.4327 14.6332 38.3532 14.5056C38.341 14.4813 38.3202 14.4582 38.308 14.4339C38.2725 14.3695 38.2285 14.3063 38.193 14.2419C38.1135 14.1144 38.034 13.9868 37.9472 13.869C37.7907 13.6309 37.6257 13.394 37.4522 13.1583C37.1137 12.6858 36.7521 12.2341 36.376 11.8019C36.1782 11.5785 35.9804 11.3551 35.7753 11.1415C35.6826 11.042 35.58 10.9352 35.4872 10.8356C35.4457 10.7895 35.3957 10.7446 35.3457 10.6997C35.3164 10.6779 35.2944 10.6463 35.2652 10.6245C35.2444 10.6014 35.1236 10.4886 35.2249 10.5869C35.3164 10.6779 35.1736 10.5335 35.1444 10.5117C35.0931 10.4583 35.0333 10.4061 34.9833 10.3612C34.8722 10.2557 34.7624 10.1586 34.6526 10.0616C34.433 9.86747 34.2147 9.6819 33.9878 9.49756C33.5341 9.1289 33.0573 8.781 32.5745 8.45139C32.3331 8.28658 32.093 8.13029 31.8456 7.98376C31.731 7.91351 31.6067 7.83599 31.4836 7.76698C31.4263 7.73186 31.3702 7.70525 31.313 7.67013C31.2179 7.61443 31.4556 7.75368 31.3605 7.69798C31.3227 7.6774 31.2752 7.64955 31.2374 7.62897C30.2162 7.06487 29.1406 6.60442 28.0362 6.24389C27.7439 6.14741 27.4541 6.06797 27.1644 5.98854C27.1279 5.97648 27.0926 5.97293 27.0475 5.96212C27.0658 5.96815 27.2374 6.01265 27.0926 5.97293C27.0293 5.95609 26.9574 5.94049 26.8941 5.92364C26.7407 5.88517 26.5886 5.85521 26.4352 5.81674C25.8339 5.68714 25.2278 5.58435 24.6097 5.51812C24.0086 5.44939 23.4027 5.40747 22.7933 5.40086C22.6449 5.39645 22.4977 5.40057 22.3493 5.39616C22.3238 5.3999 22.2885 5.39635 22.2629 5.40009C22.106 5.39693 22.2982 5.40363 22.3152 5.40114C22.2289 5.40506 22.1413 5.40047 22.055 5.40439C21.7521 5.41386 21.4505 5.43185 21.1489 5.44984C19.928 5.54133 18.7148 5.74478 17.5335 6.04797C17.4084 6.08367 17.2102 6.09524 17.107 6.16252C17.1228 6.15152 17.316 6.10587 17.1568 6.14654C17.1155 6.16128 17.0815 6.16626 17.0402 6.181C16.9648 6.20071 16.8907 6.22894 16.8154 6.24866C16.5237 6.33479 16.2346 6.43796 15.954 6.53988C15.3757 6.74622 14.8024 6.98663 14.2401 7.24282C13.6863 7.49778 13.1545 7.78432 12.6337 8.08665C12.5694 8.12215 12.4977 8.16742 12.4334 8.20293C12.4334 8.20293 12.5766 8.11239 12.4977 8.16742C12.4662 8.18943 12.4346 8.21145 12.3933 8.22618C12.2574 8.30696 12.1312 8.39501 11.9952 8.47578C11.7416 8.64336 11.4879 8.81094 11.2453 8.99431C10.7502 9.35377 10.2687 9.74607 9.80661 10.1529C9.57621 10.3606 9.35432 10.567 9.13367 10.782C9.07306 10.843 9.01972 10.8943 8.95911 10.9554C8.85366 11.0665 9.07182 10.8345 8.92154 10.9957C8.80882 11.1166 8.69611 11.2374 8.59191 11.3571C8.38351 11.5963 8.18487 11.8429 8.00573 12.104C7.9198 12.2296 7.83386 12.3553 7.75768 12.4882C7.73713 12.526 7.71534 12.5553 7.69479 12.5931C7.63189 12.698 7.76972 12.4516 7.71534 12.5553C7.67548 12.6394 7.62587 12.7163 7.59453 12.7992C7.45317 13.0808 7.35685 13.3733 7.25327 13.6755C7.22317 13.7669 7.27611 13.5939 7.27611 13.5939C7.27258 13.6292 7.26054 13.6658 7.2485 13.7023C7.23293 13.7742 7.21736 13.8461 7.20179 13.918C7.17916 14.0605 7.15778 14.2115 7.15342 14.36C7.14636 14.4307 7.15881 14.5158 7.14324 14.5877C7.14324 14.5877 7.13287 14.3978 7.1393 14.5013C7.14428 14.5354 7.142 14.5792 7.14698 14.6133C7.15112 14.7605 7.17229 14.9054 7.19471 15.0587C7.20467 15.1268 7.21338 15.1864 7.23186 15.2533C7.23684 15.2874 7.25157 15.3288 7.25655 15.3628C7.28623 15.5064 7.24908 15.3117 7.23933 15.3044C7.27233 15.3518 7.28727 15.454 7.3045 15.5124C7.33148 15.5781 7.35971 15.6522 7.38669 15.7179C7.41367 15.7836 7.44916 15.848 7.48466 15.9124C7.50666 15.944 7.60214 16.1214 7.53364 16.0096C7.46266 15.8808 7.58864 16.0886 7.61065 16.1202C7.65465 16.1833 7.70841 16.2538 7.75967 16.3072C7.78043 16.3302 7.79143 16.346 7.81219 16.3691C7.82194 16.3764 7.82319 16.3849 7.83294 16.3921C7.88421 16.4456 7.88421 16.4456 7.83294 16.3921C7.82194 16.3764 7.80368 16.3703 7.79268 16.3545C7.81343 16.3776 7.83294 16.3921 7.85245 16.4067C7.87196 16.4212 7.89272 16.4443 7.91223 16.4589C7.96225 16.5037 8.02079 16.5474 8.07807 16.5825C8.10734 16.6043 8.13536 16.6176 8.16463 16.6395C8.19265 16.6528 8.32549 16.729 8.2024 16.66C8.07932 16.591 8.24869 16.6794 8.28647 16.6999C8.35102 16.7253 8.40706 16.7519 8.47161 16.7773C8.52641 16.7954 8.58245 16.822 8.636 16.8315C8.67254 16.8436 8.78088 16.8713 8.64576 16.8388C8.50088 16.7991 8.66403 16.8448 8.68229 16.8509C8.80766 16.876 8.93178 16.8927 9.05591 16.9094C9.11797 16.9177 9.17879 16.9175 9.23109 16.9185C9.25787 16.9233 9.30893 16.9159 9.33571 16.9207C9.2724 16.9038 9.13623 16.9237 9.2834 16.9196C9.55946 16.9053 9.80979 16.8339 10.0736 16.7954C9.8183 16.8327 10.0225 16.8028 10.0979 16.7831C10.1562 16.7659 10.2133 16.7402 10.2704 16.7144C10.4101 16.6592 10.5388 16.5882 10.6687 16.5257C10.7974 16.4547 10.5024 16.637 10.676 16.5159C10.7233 16.4829 10.7791 16.4486 10.8265 16.4156C10.9356 16.3301 11.0448 16.2445 11.1442 16.1517L11.2206 16.0796C11.2206 16.0796 11.1019 16.2188 11.1831 16.1199C11.2352 16.0601 11.28 16.01 11.3321 15.9502C11.4278 15.8318 11.515 15.7147 11.5924 15.5903C11.6129 15.5525 11.7097 15.3817 11.6565 15.4939C11.5949 15.6073 11.6565 15.4939 11.6698 15.4658C11.6904 15.428 11.7036 15.4 11.7242 15.3622C11.7919 15.2305 11.8498 15.0915 11.9077 14.9526C11.9583 14.8234 11.9992 14.6869 12.0401 14.5504C12.075 14.4322 12.0536 14.5833 12.0306 14.604C12.0378 14.5943 12.0582 14.4956 12.0582 14.4956C12.0738 14.4237 12.0881 14.3433 12.1037 14.2714C12.1562 13.9767 12.1832 13.6856 12.1919 13.3886C12.1954 13.3532 12.1892 13.3107 12.1927 13.2753C12.1923 13.1536 12.2018 13.4567 12.1929 13.3362C12.1915 13.2668 12.1913 13.206 12.1813 13.1378C12.1674 12.9832 12.1547 12.8372 12.1323 12.6839C12.1112 12.5391 12.0887 12.3858 12.0506 12.2434C12.0321 12.1765 12.0234 12.1169 12.0049 12.05C11.9999 12.0159 11.9852 11.9746 11.9802 11.9405C11.9555 11.831 12.0466 12.157 11.9937 11.9734C11.9101 11.6985 11.8094 11.4261 11.6844 11.166C11.622 11.0359 11.5607 10.9144 11.4995 10.7928C11.4653 10.7369 11.4395 10.6798 11.4053 10.6239C11.3833 10.5923 11.3698 10.5595 11.3478 10.5279C11.2903 10.4319 11.4493 10.6871 11.36 10.5522C11.2035 10.3141 11.0385 10.0772 10.8492 9.8526C10.7637 9.7433 10.6697 9.63525 10.5769 9.53571C10.5256 9.48231 10.4744 9.4289 10.4231 9.3755C10.3938 9.35368 10.3718 9.32209 10.3426 9.30027C10.3731 9.33061 10.4634 9.41311 10.3828 9.33788C10.162 9.13527 9.93512 8.95094 9.69248 8.77761C9.58642 8.70612 9.47911 8.62611 9.36578 8.56438C9.33776 8.55108 9.19994 8.44073 9.17565 8.45298C9.17565 8.45298 9.36453 8.55586 9.22318 8.48083C9.18541 8.46025 9.13912 8.44092 9.1001 8.41182C8.84666 8.28357 8.57745 8.16633 8.30222 8.06737C8.16461 8.01789 8.02824 7.97692 7.89187 7.93596C7.78228 7.89978 8.05377 7.97319 7.93691 7.94677C7.91014 7.94199 7.88211 7.92869 7.85534 7.9239C7.77377 7.90103 7.68493 7.88791 7.59609 7.8748C7.30156 7.82216 7.001 7.7878 6.70294 7.77047C6.62386 7.76463 6.54602 7.76731 6.46694 7.76147C6.41463 7.76042 6.304 7.77659 6.52775 7.76128C6.50222 7.76501 6.46694 7.76147 6.4414 7.76521C6.27722 7.77181 6.11304 7.77841 5.9501 7.79353C5.65099 7.82856 5.35314 7.8721 5.05901 7.9412C4.99218 7.95967 4.92534 7.97814 4.85726 7.98809C4.68954 8.03001 4.90707 7.97211 4.90707 7.97211C4.90707 7.97211 4.79042 8.00656 4.79893 8.00532C4.64948 8.05326 4.50855 8.09997 4.36034 8.15643C4.08096 8.26687 3.81257 8.39311 3.54668 8.53638C3.49084 8.57064 3.42649 8.60614 3.37066 8.64041C3.5747 8.54968 3.37066 8.64041 3.31482 8.67467C3.19589 8.75295 3.07819 8.83976 2.9605 8.92656C2.71785 9.10993 2.49472 9.30785 2.28258 9.52156C2.13956 9.67296 1.83444 9.72627 1.63975 9.70253C1.47286 9.63123 1.22918 9.51026 1.10818 9.33655C0.805141 8.92846 0.90333 8.47041 1.2452 8.13333Z" fill="#E84300"/>
                  <path d="M39.3413 17.3075C40.4626 18.6747 41.5935 20.0493 42.7148 21.4166C42.2212 21.4887 41.7361 21.5596 41.2425 21.6318C41.7023 20.1987 42.1633 18.7741 42.6316 17.3398C42.6979 17.1387 42.8967 16.953 43.085 16.8733C43.2805 16.7838 43.5566 16.7695 43.7527 16.8627C43.9489 16.9558 44.1355 17.1025 44.2189 17.3165C44.3036 17.539 44.3007 17.757 44.2297 17.9848C43.7699 19.4179 43.3089 20.8425 42.8406 22.2769C42.7515 22.5596 42.4518 22.7687 42.1709 22.8097C41.8646 22.8545 41.5686 22.7325 41.3768 22.4908C40.2556 21.1236 39.1246 19.749 38.0033 18.3818C37.7175 18.032 37.7702 17.4414 38.1391 17.17C38.5067 16.8901 39.0347 16.9347 39.3413 17.3075Z" fill="#E84300"/>
                </g>
                <defs>
                  <clipPath id="clip0_4515:5376">
                    <rect width="22.0202" height="41.6273" fill="white" transform="matrix(0.144651 0.989483 0.989483 -0.144651 0.605469 6.63232)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="mt-10px text-center text-20px leading-30px font-extrabold">{nonprofit.name}</div>

            <TopAndRecentDonations className="mt-20px" />
          </div>
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
