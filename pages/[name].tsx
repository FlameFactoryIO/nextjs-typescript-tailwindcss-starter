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
import { DonationList, TopAndRecentDonations } from "../components/Donations";
import NonprofitProfileTabs from "../components/nonprofit/NonprofitProfileTabs";
import {
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
