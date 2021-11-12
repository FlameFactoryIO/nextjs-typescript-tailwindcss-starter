import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import TopNav from "../../components/TopNav";
import Image from "next/image";
import Questions from "../../components/Questions";
import { MoveTheChain } from "../../components/svg/MoveTheChain";

// noinspection JSUnusedGlobalSymbols
export default function Home() {
  return (
    <div className="w-full min-w-320px ">
      <Head>
        <title>Nonprofits</title>
        <style type="text/css">
          {`
            .hero-background {
              background: url('/images/background-dots.png') center no-repeat, linear-gradient(90deg, #0A173D 0%, #0C163B 38.02%, #080613 100%);
              background-size: cover;
            }
          `}
        </style>
      </Head>

      <TopNav />

      <div
        className="w-full hero-background"
      >
        <div className="t:relative flex flex-col d:mx-auto  d:max-w-2170px d:items-center">
          <div
            id="our-propose"
            className="
            pt-82px px-20px pb-49px
            t:pb-50px t:pr-0
            d:pt-148px d:pb-100px
            flex flex-col   d:max-w-1140px"
          >
            <p
              className="text-26px text-white text-center t:text-left
          leading-31-2px d:text-48px d:leading-57-6px
          pb-19px
          px-20px t:pl-31px t:pr-0 t:max-w-579px d:max-w-1040px
          mx-auto t:ml-0 t:mr-auto
          relative
          "
            >
              Our purpose at{" "}
              <span className="font-bold text-primary">Move the Chain</span> is
              to offer a platform to help promote your cause and raise funds.
            </p>
            <p
              className=" text-16px leading-20-8px
              d:text-18px d:leading-26px
              text-white text-center t:text-left
                font-light
                px-20px  t:pl-31px t:pr-0 t:max-w-375px d:max-w-545px
                t:pb-25px d:pb-53px
                mx-auto t:ml-0 t:mr-auto"
            >
              We offer a{" "}
              <span className="font-bold text-white">free platform</span> for
              your nonprofits allowing you to raise funds digitally, improve
              your online presence and expand your network to a broader
              audience.
            </p>
            <div className="mx-auto pt-24px
                            t:mx-0 t:pt-0 t:pl-31px ">
              <Link href={"#step-1"} passHref>
                <Button
                  type="button"
                  variant="primary"
                  className="t:block"
                  size="small"
                >
                  Get started
                </Button>
              </Link>
            </div>
          </div>
          <div
            id="hero-img"
            className="flex flex-col items-center t:items-end
          t:absolute   bottom-0 right-10
          t:pt-94px
          "
          >
            <div className="block t:hidden d:block">
              <Image
                alt=""
                src="/images/nonprofits/hero.png"
                width={640}
                height={449}
                objectFit="contain"
              />
            </div>

            <div className="hidden t:block d:hidden ">
              <Image
                alt=""
                src="/images/nonprofits/hero.png"
                width={400}
                height={282}
              />
            </div>
            {/* <div className="t:hidden bg-yellow-300">
            <Image
              alt=""
                src="/images/nonprofits/hero.png"
              width={320}
              height={254}

            />
          </div> */}
          </div>
        </div>
      </div>

      <div
        className="bg-footer px-20px pt-50px pb-51px
      t:pb-61px t:px-30px
      d:pt-98px d:pb-80px d:px-240px"
      >
        <div
          id="why-move-the-chain"
          className="flex-col gap-15px mx-auto text-center min-w-280px t:max-w-576px d:max-w-1140px"
        >
          <MoveTheChain className="mx-auto pb-20px w-41px h-57px" />
          <div className="mx-auto pb-35px text-center text-24px font-bold leading-28-5px">
            Why Move the Chain is right for your nonprofit?
          </div>
          <div className="flex flex-col t:flex-row gap-39px pb-17px t:pb-33px d:pb-58px">
            <div className="flex-1">
              <PiggyBankIcon className="mx-auto pb-13px" />
              <div className="mx-auto pb-8px text-center text-16px font-bold leading-24px d:text-20px d:leading-24px">
                We&apos;ll cover the cost
              </div>
              <p className="mx-auto text-center text-13px leading-17px d:text-16px d:leading-20-8px font-light">
                Move the Chain provides a free platform for nonprofits to
                promote causes, fundraise digitally and engage with donors.
              </p>
            </div>
            <div className="flex-1">
              <ConnectionIcon className="mx-auto pb-13px" />
              <div className="mx-auto pb-8px text-center text-16px font-bold leading-24px d:text-20px d:leading-24px">
                Create campaigns
              </div>
              <p className="mx-auto text-center text-13px leading-17px d:text-16px d:leading-20-8px font-light">
                Using video based campaigns, explain why you are raising funds
                and connect with current and new donors in a genuine and
                transparent way.
              </p>
            </div>
            <div className="flex-1">
              <SocialMediaIcon className="mx-auto pb-13px" />
              <div className="mx-auto pb-8px text-center text-16px font-bold leading-24px d:text-20px d:leading-24px">
                Boost your presence
              </div>
              <p className="mx-auto text-center text-13px leading-17px d:text-16px d:leading-20-8px font-light">
                Leverage our platform to raise funds and bring awareness to your
                cause. Connect with donors and corporations easier than ever
                before.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-center pb-29px">
              <div className="font-hand text-primary text-46px leading-38px">
                Claim your page
              </div>

              <svg
                className="ml-10px mt-15px"
                width="42"
                height="28"
                viewBox="0 0 42 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.746143 1.68062C3.22935 0.205261 6.53388 0.350976 8.9258 1.92789C11.2426 3.45153 12.5923 6.32835 12.3533 9.08525C12.229 10.4677 11.6868 11.8854 10.7212 12.8965C10.2123 13.4352 9.61331 13.892 8.91827 14.1581C8.25186 14.4094 7.54768 14.5124 6.83437 14.4523C5.40776 14.3321 4.08579 13.5028 3.50199 12.178C2.9261 10.863 3.09167 9.2689 3.76846 8.01903C4.53197 6.63456 5.75446 5.66061 7.09278 4.86147C8.23864 4.17635 9.46964 3.61765 10.7315 3.18841C13.3765 2.28919 16.1627 1.90979 18.9545 2.0534C21.6663 2.18825 24.3848 2.83721 26.8502 3.98984C29.3076 5.1326 31.4882 6.74941 33.3207 8.75141C35.073 10.6636 36.482 12.9164 37.4517 15.3193C38.4491 17.7973 38.9805 20.4224 39.0299 23.0938C39.0427 23.7166 39.0199 24.3356 38.9705 24.9516C38.9376 25.4164 38.4531 25.8137 37.9838 25.7443C37.4878 25.6719 37.1553 25.2572 37.1921 24.7569C37.2396 24.1586 37.2604 23.5575 37.2546 22.9534C37.2496 22.9168 37.2545 22.8723 37.2495 22.8358C37.2492 22.6736 37.2436 22.8892 37.2515 22.899C37.2327 22.8249 37.2424 22.7359 37.2413 22.6637C37.2312 22.5095 37.23 22.3563 37.2199 22.202C37.1987 21.9025 37.1775 21.603 37.1385 21.3015C37.0014 20.0886 36.7329 18.9243 36.421 17.7463C36.428 17.7651 36.4796 17.9509 36.433 17.8017C36.427 17.774 36.4121 17.7454 36.4062 17.7177C36.3873 17.6436 36.3595 17.5685 36.3406 17.4943C36.294 17.3451 36.2473 17.1959 36.1908 17.0546C36.0956 16.774 35.9914 16.4924 35.8784 16.2098C35.6612 15.6456 35.4154 15.0963 35.1499 14.5629C35.0092 14.2863 34.8685 14.0097 34.718 13.741C34.6506 13.6165 34.5753 13.4822 34.508 13.3577C34.4783 13.3005 34.4396 13.2422 34.401 13.1839C34.3773 13.1543 34.3634 13.1167 34.3396 13.0871C34.3248 13.0585 34.2327 12.9133 34.3089 13.0387C34.3773 13.1543 34.2713 12.9716 34.2476 12.9419C34.2099 12.8748 34.1634 12.8066 34.1248 12.7484C34.0406 12.6131 33.9555 12.4866 33.8703 12.3602C33.7 12.1074 33.5288 11.8635 33.3486 11.6186C32.9883 11.1288 32.5994 10.6539 32.1996 10.1958C31.9998 9.96677 31.7989 9.74663 31.5882 9.53441C31.4912 9.43373 31.3863 9.32317 31.2805 9.22151C31.232 9.17117 31.1826 9.12972 31.1341 9.07938C31.053 8.99845 31.2558 9.20079 31.1746 9.11985C31.142 9.08926 31.1014 9.04879 31.0688 9.01819C30.1884 8.18323 29.2261 7.43838 28.2087 6.78656C27.9397 6.613 27.6688 6.45725 27.3979 6.30149C27.3643 6.27979 27.3297 6.267 27.2872 6.24433C27.304 6.25518 27.4652 6.34488 27.3297 6.267C27.2704 6.23348 27.2022 6.19899 27.1429 6.16547C26.9985 6.08662 26.8532 6.01667 26.7089 5.93781C26.1375 5.65008 25.5542 5.38806 24.9494 5.1597C24.3622 4.93329 23.7633 4.7326 23.1516 4.56654C23.0034 4.52328 22.8541 4.48893 22.7059 4.44568C22.6792 4.44275 22.6446 4.42996 22.618 4.42704C22.4608 4.38281 22.6525 4.43983 22.6703 4.44178C22.5824 4.42314 22.4954 4.39561 22.4075 4.37697C22.1002 4.30729 21.7919 4.24651 21.4836 4.18573C20.2306 3.95845 18.9562 3.84591 17.6878 3.84211C17.5525 3.8453 17.3499 3.80511 17.2284 3.84585C17.2472 3.83889 17.4537 3.84349 17.2828 3.84279C17.2373 3.84682 17.2018 3.84292 17.1563 3.84696C17.0753 3.84709 16.9934 3.85613 16.9124 3.85626C16.5963 3.86668 16.2782 3.8949 15.9691 3.92409C15.333 3.98053 14.693 4.07257 14.06 4.18338C13.4358 4.29516 12.8256 4.44449 12.2222 4.61259C12.1482 4.6315 12.0643 4.65834 11.9902 4.67725C11.9902 4.67725 12.158 4.62358 12.0643 4.65834C12.0267 4.67225 11.9892 4.68615 11.9438 4.69018C11.7858 4.73593 11.6357 4.79155 11.4777 4.83729C11.1786 4.93963 10.8794 5.04197 10.5872 5.16308C9.99484 5.39543 9.40748 5.66436 8.83595 5.95303C8.5497 6.10182 8.27234 6.25158 7.99401 6.41024C7.91702 6.45585 7.84991 6.49353 7.77292 6.53914C7.63771 6.62341 7.918 6.44695 7.72456 6.56987C7.57949 6.66206 7.43441 6.75426 7.29823 6.84742C7.02587 7.03376 6.76142 7.22996 6.5128 7.44592C6.39343 7.54993 6.27405 7.65395 6.1626 7.76783C6.13202 7.80051 6.10242 7.82429 6.07185 7.85697C5.9811 7.94611 6.18428 7.73418 6.10242 7.82429C6.0403 7.89855 5.97026 7.96293 5.91703 8.03816C5.70106 8.28471 5.5276 8.55393 5.34427 8.83107C5.29007 8.9152 5.38861 8.75487 5.38861 8.75487C5.37582 8.78949 5.35414 8.82315 5.33246 8.8568C5.29798 8.92508 5.26351 8.99336 5.22904 9.06163C5.16898 9.19916 5.10796 9.34559 5.06471 9.49397C5.03913 9.56322 5.02938 9.65222 4.99491 9.7205C4.99491 9.7205 5.03414 9.52665 5.01355 9.63248C5.00965 9.66808 4.99589 9.7116 4.99199 9.7472C4.95763 9.89655 4.94107 10.0479 4.92352 10.2081C4.91573 10.2792 4.9089 10.3415 4.91 10.4137C4.9061 10.4493 4.91012 10.4948 4.90622 10.5304C4.89854 10.6827 4.91207 10.477 4.90415 10.4671C4.92498 10.5234 4.91328 10.6302 4.91535 10.6935C4.92534 10.7667 4.93435 10.8487 4.94434 10.9219C4.95433 10.995 4.97321 11.0691 4.99208 11.1432C5.00597 11.1808 5.05566 11.3844 5.01596 11.2539C4.9782 11.1057 5.05067 11.3478 5.06456 11.3854C5.09233 11.4604 5.12801 11.5454 5.16565 11.6126C5.18051 11.6412 5.18746 11.66 5.20232 11.6887C5.21023 11.6985 5.20926 11.7074 5.21718 11.7173C5.25481 11.7845 5.25481 11.7845 5.21718 11.7173C5.21023 11.6985 5.19342 11.6877 5.18648 11.6689C5.20134 11.6976 5.21718 11.7173 5.23301 11.737C5.24885 11.7568 5.26371 11.7854 5.27954 11.8052C5.31815 11.8635 5.36566 11.9227 5.41414 11.973C5.43789 12.0027 5.46261 12.0234 5.48637 12.053C5.51109 12.0737 5.62486 12.1853 5.51901 12.0836C5.41316 11.9819 5.56055 12.1152 5.59319 12.1458C5.65154 12.1882 5.70099 12.2296 5.75933 12.272C5.80976 12.3046 5.85922 12.346 5.91062 12.3697C5.94424 12.3914 6.04607 12.4475 5.91854 12.3795C5.78309 12.3017 5.93534 12.3904 5.95215 12.4012C6.07177 12.4594 6.19236 12.5086 6.31295 12.5578C6.37324 12.5824 6.43451 12.5982 6.48689 12.6129C6.51259 12.6247 6.56594 12.6306 6.59164 12.6424C6.53232 12.6089 6.39005 12.5933 6.53926 12.6276C6.82088 12.6855 7.09154 12.6791 7.36719 12.7093C7.10043 12.6801 7.31384 12.7035 7.39484 12.7033C7.45806 12.7012 7.52226 12.6903 7.58645 12.6793C7.74151 12.6602 7.88963 12.6224 8.03677 12.5935C8.18489 12.5557 7.8403 12.662 8.04664 12.5856C8.10292 12.5647 8.16808 12.5448 8.22436 12.524C8.35664 12.4664 8.48893 12.4088 8.6133 12.3414L8.70904 12.2888C8.70904 12.2888 8.55312 12.3978 8.66068 12.3196C8.72877 12.273 8.787 12.2343 8.85509 12.1877C8.98238 12.0936 9.10078 11.9985 9.21126 11.8935C9.24183 11.8608 9.38387 11.7143 9.30103 11.8133C9.20931 11.9113 9.30103 11.8133 9.32174 11.7885C9.35232 11.7558 9.37302 11.7311 9.4036 11.6984C9.50616 11.5835 9.60081 11.4588 9.69546 11.3341C9.78024 11.2173 9.8571 11.0906 9.93396 10.9639C9.99999 10.854 9.93896 11.0005 9.91033 11.0153C9.9202 11.0074 9.96649 10.9134 9.96649 10.9134C10.001 10.8451 10.0364 10.768 10.0709 10.6997C10.2009 10.4167 10.3042 10.1308 10.3906 9.83403C10.4034 9.7994 10.4083 9.7549 10.4211 9.72028C10.4525 9.59763 10.3828 9.90523 10.4054 9.7816C10.4221 9.71138 10.4378 9.65005 10.4456 9.57885C10.472 9.41963 10.4975 9.2693 10.515 9.1091C10.5316 8.9578 10.5491 8.79761 10.5479 8.64436C10.5468 8.57219 10.5536 8.50989 10.5525 8.43771C10.5564 8.40211 10.5524 8.35664 10.5563 8.32104C10.5601 8.20437 10.5666 8.55633 10.5613 8.35761C10.549 8.05905 10.5189 7.75853 10.4612 7.464C10.4323 7.31673 10.4025 7.17836 10.3727 7.03999C10.3528 6.97477 10.3418 6.91053 10.322 6.84531C10.3081 6.80776 10.3031 6.77119 10.2892 6.73364C10.2565 6.62197 10.3498 6.9204 10.2952 6.76131C10.1999 6.48068 10.0958 6.19908 9.96402 5.92345C9.90653 5.79106 9.84014 5.6577 9.77279 5.53324C9.73515 5.46607 9.69751 5.3989 9.65987 5.33173C9.63612 5.30211 9.62224 5.26456 9.59848 5.23494C9.62126 5.27346 9.69057 5.38013 9.62918 5.28334C9.45987 5.02162 9.27972 4.77672 9.08081 4.53878C8.99275 4.43907 8.90566 4.33046 8.80772 4.23867C8.783 4.21795 8.67313 4.07082 8.64548 4.0768C8.64548 4.0768 8.8087 4.22977 8.68604 4.11727C8.6534 4.08667 8.61186 4.05511 8.58019 4.01561C8.35862 3.82022 8.1183 3.63178 7.86713 3.46017C7.74155 3.37437 7.61499 3.29746 7.48844 3.22055C7.38758 3.15547 7.64167 3.30038 7.53095 3.24322C7.50525 3.2314 7.48052 3.21068 7.45482 3.19886C7.37869 3.1545 7.29269 3.11806 7.2067 3.08162C6.92398 2.95159 6.63043 2.83838 6.33492 2.74297C6.25685 2.71641 6.17779 2.69875 6.09971 2.67218C6.04734 2.65744 5.93174 2.64478 6.16098 2.6879C6.13431 2.68498 6.09971 2.67218 6.07304 2.66926C5.90604 2.63296 5.73904 2.59666 5.57107 2.56926C5.26082 2.52628 4.9496 2.4922 4.63546 2.48482C4.56335 2.48592 4.49124 2.48703 4.4201 2.47924C4.24032 2.47757 4.47443 2.47619 4.47443 2.47619C4.47443 2.47619 4.34799 2.48035 4.35689 2.48133C4.19391 2.4905 4.03982 2.50065 3.87587 2.51872C3.56574 2.55681 3.26256 2.61368 2.95743 2.68834C2.89226 2.70823 2.8182 2.72714 2.75303 2.74702C2.98216 2.70906 2.75303 2.74702 2.68787 2.7669C2.54766 2.8146 2.40649 2.87119 2.26531 2.92778C1.97309 3.04889 1.69671 3.18975 1.42726 3.34939C1.2437 3.46439 0.922612 3.43823 0.732836 3.36341C0.583501 3.24798 0.369853 3.06247 0.293483 2.85596C0.0951883 2.36589 0.313842 1.9305 0.746143 1.68062Z"
                  fill="red"
                />
                <path
                  d="M36.6937 20.8781C37.4648 22.5477 38.2437 24.2271 39.0147 25.8968C38.499 25.8403 37.9921 25.7848 37.4764 25.7283C38.3141 24.406 39.1508 23.0926 39.9974 21.7712C40.1167 21.5861 40.3654 21.4513 40.5758 21.4203C40.796 21.3813 41.0776 21.4392 41.2507 21.5842C41.4238 21.7293 41.5732 21.9258 41.6013 22.163C41.6283 22.4092 41.5684 22.6278 41.4373 22.8386C40.5996 24.1609 39.7629 25.4743 38.9163 26.7957C38.7527 27.0569 38.3963 27.189 38.1028 27.1569C37.7827 27.1219 37.5167 26.9216 37.3869 26.6282C36.6158 24.9586 35.8369 23.2791 35.0659 21.6095C34.8697 21.1827 35.0772 20.602 35.5195 20.4252C35.9628 20.2396 36.4827 20.4226 36.6937 20.8781Z"
                  fill="red"
                />
              </svg>
            </div>
            <p className="mx-auto text-center text-13px leading-17px d:text-16px d:leading-20-8px pb-24px font-light">
              Find your nonprofit in our database and provide information to
              verify your nonprofit.
            </p>
            <Button
              type="button"
              variant="primary"
              className="mx-auto"
              size="small"
            >
              Search your nonprofit
            </Button>
          </div>
        </div>
      </div>

      <div className="px-20px py-50px t:max-w-1140px t:mx-auto">
        <div
          id="step-1"
          className="t:mt-0 flex flex-col t:flex-row gap-18px d:gap-50px items-center"
        >
          <div className="t:flex-1 flex flex-col pb-15px">
            <div className="px-51px py-9px  border-solid border-2 rounded-10px font-bold text-primary border-primary mr-auto mb-25px">
              Step 1
            </div>
            <div className="text-20px font-bold leading-24px d:text-34px d:leading-41px mb-22px">
              Start by claiming your page!
            </div>
            <p className="text-13px leading-17px d:text-16px d:leading-20-8px pb-22px">
              With a simple click of a button, you can claim your page on Move
              the Chain! Follow those{" "}
              <span className="font-bold">simple steps</span> to get started:
            </p>
            <div className="px-20px">
              <ul className="list-disc text-primary text-13px leading-17px flex flex-col gap-y-14px font-bold">
                <li>
                  <p className="text-black font-light pl-9px">
                    Click on{" "}
                    “<span className="font-bold text-primary underline">search your nonprofit</span>” and
                    claim your page
                  </p>
                </li>
                <li>
                  <p className="text-black font-light pl-9px">
                    If you are part of{" "}
                    <span className="font-bold">PayPal Giving Fund</span>, you
                    will find your nonprofit. Simply click the{" "}
                    <span className="font-bold">“Claim Page”</span> button to
                    begin the process
                  </p>
                </li>
                <li>
                  <p className="text-black font-light pl-9px">
                    If you are not registered with PayPal Giving Fund, simply
                    enroll your nonprofit so you can start accepting donations
                    and create a <span className="font-bold"> profile</span> on
                    Move the Chain
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div aria-hidden className="t:flex-1">
            <Image
              src="/images/nonprofits/step1.png"
              width={540}
              height={500}
              objectFit="contain"
              alt="Mobile phone showing a user on the move the chain app and creating a campaign"
            />
          </div>
        </div>

        <div
          id="step-2"
          className="mt-40px t:mt-50px flex flex-col t:flex-row gap-18px d:gap-50px items-center"
        >
          <div className="t:flex-1 flex flex-col pb-15px">
            <div className="px-51px py-9px border-solid border-2 rounded-10px font-bold text-primary border-primary mr-auto mb-25px">
              Step 2
            </div>
            <div className="text-20px font-bold leading-24px d:text-34px d:leading-41px mb-22px">
              Update your Profile
            </div>
            <div className="px-20px">
              <ul className="list-disc text-primary text-13px leading-17px flex flex-col gap-y-14px font-bold">
                <li>
                  <p className="text-black font-light pl-9px">
                    Within <span className="font-bold">a few minutes</span> you can
                    update your profile!
                  </p>
                </li>
                <li>
                  <p className="text-black font-light pl-9px">
                    Be sure to include the best possible photos and videos to{" "}
                    <span className="font-bold">emphasize the great work</span> you’re
                    doing! Your “About” section should be both concise and heartfelt.
                  </p>
                </li>
                <li>
                  <p className="text-black font-light pl-9px">
                    This is your opportunity to create a profile that best represents
                    your organization to{" "}
                    <span className="font-bold">maximize the potential</span> of{" "}
                    <span className="font-bold">turning visitors into donors!</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div aria-hidden className="t:flex-1 order-last t:order-first">
            <Image
              src="/images/nonprofits/step2.png"
              width={473}
              height={500}
              objectFit="contain"
              alt="Tablet showing a nonprofit page that has little content and needs a nonprofit to complete there profile"
            />
          </div>
        </div>

        <div
          id="step-3"
          className="mt-40px t:mt-50px flex flex-col t:flex-row gap-18px d:gap-50px items-center"
        >
          <div className="t:flex-1 flex flex-col pb-15px">
            <div className="px-51px py-9px  border-solid border-2 rounded-10px font-bold text-primary border-primary mr-auto mb-25px">
              Step 3
            </div>
            <div className="text-20px font-bold leading-24px d:text-34px d:leading-41px mb-22px">
              Create a campaign!
            </div>
            <div className="px-20px">
              <ul className="list-disc text-primary text-13px leading-17px flex flex-col gap-y-14px font-bold">
                <li>
                  <p className="text-black font-light pl-9px">
                    Once you claim your page, you can get started right away by
                    launching a fundraising campaign.
                  </p>
                </li>
                <li>
                  <p className="text-black font-light pl-9px">
                    This is your{" "}
                    <span className="font-bold">opportunity to create </span> a
                    genuine and compelling video message that tells the story of{" "}
                    <span className="font-bold">your organization’s mission</span> the
                    cause you are trying to fund and how donations will be used to do
                    good
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div aria-hidden className="t:flex-1">
            <Image
              src="/images/nonprofits/step3.png"
              width={499}
              height={512}
              objectFit="contain"
              alt="Mobile phone showing a user on the move the chain app and creating a campaign"
            />
          </div>
        </div>

        <div
          id="step-4"
          className="mt-40px t:mt-50px flex flex-col t:flex-row gap-18px d:gap-50px items-center"
        >
          <div className="t:flex-1 flex flex-col pb-15px">
            <div className="px-51px py-9px  border-solid border-2 rounded-10px font-bold text-primary border-primary mr-auto mb-25px">
              Step 4
            </div>
            <div className="px-20px">
              <ul className="list-disc text-primary text-13px leading-17px flex flex-col gap-y-14px font-bold">
                <li>
                  <p className="text-black font-light pl-9px">
                    Last but certainly not least,{" "}
                    <span className="font-bold">sharing is key.</span>
                  </p>
                </li>
                <li>
                  <p className="text-black font-light pl-9px">
                    The impact of sharing on social media, email and text messages
                    cannot be understated in its ability to make your campaign
                    successful. Once your campaign is created, tell everyone about it.
                    The more you share, the more likely you are to{" "}
                    <span className="font-bold">reach your goal.</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div aria-hidden className="t:flex-1 order-last t:order-first">
            <Image
              src="/images/nonprofits/step4.png"
              width={540}
              height={500}
              objectFit="contain"
              alt="Sharing and giving got even more easier"
            />
          </div>
        </div>
      </div>

      <div className="px-20px pb-43px pt-56px t:pt-46px t:px-30px d:pt-72px d:px-232px d:pb-68px  w-full bg-footer">
        <div id="what-nonprofit-are" className="flex flex-col gap-30px ">
          <div className="text-20px leading-24px d:text-34px d:leading-41px  text-center font-bold pb-20px">
            What nonprofits are saying about Move the Chain
          </div>
          <div
            aria-hidden
            id="nonprofits-logos"
            className="grid grid-cols-3 mx-auto"
          >
            {/*<div className="flex">*/}
            {/*  <img*/}
            {/*    alt=""*/}
            {/*    src="/images/nonprofits/arrow-left.svg"*/}
            {/*    className="w-40px"*/}
            {/*  />*/}
            {/*</div>*/}
            <div className="flex items-center justify-center">
              <Image
                alt=""
                src="/images/nonprofits/logo-1.png"
                className="bg-white rounded-full"
                height={110}
                width={110}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt=""
                src="/images/nonprofits/logo-2.png"
                className="bg-white rounded-full"
                height={140}
                width={140}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt=""
                src="/images/nonprofits/logo-3.png"
                className="bg-white rounded-full"
                height={110}
                width={110}
              />
            </div>
            {/*<div className="flex">*/}
            {/*  <img*/}
            {/*    alt=""*/}
            {/*    src="/images/nonprofits/arrow-right.svg"*/}
            {/*    className="w-40px ml-auto"*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
          <p className="text-16px leading-20-8px d:text-18px d:leading-25-2px text-center t:w-708px d:max-w-914px mx-auto">
            <span className="font-bold text-primary">“</span>
            Move the Chain made it very easy to share our impact and needs with donors.
            <span className="font-bold text-primary">”</span>
          </p>

          <div className="d:max-w-914px mx-auto text-center">
            <div className=" h-50px w-50px border-primary border-2px rounded-full p-2px mx-auto">
              <Image
                alt=""
                src="/images/nonprofits/ceo.png"
                className="h-42px w-42px rounded-full"
                height={42}
                width={42}
              />
            </div>

            <div className="text-16px leading-20-8px d:text-18px d:leading-24px mt-10px">
              <div className="font-bold text-primary">Sam Gordon</div>
              <div className="font-bold">Director of Development at Boys & Girls Club of Stamford</div>
            </div>
          </div>
        </div>
      </div>

      {/*<div id="faq" className="w-full bg-gradient-to-b from-cream to-white">*/}
      {/*  <div className="w-280px t:w-768px d:w-1140px mx-auto items-center">*/}
      {/*    <Faq />*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div id="questions" className="w-full bg-blue-darkest">
        <div className="w-280px t:w-768px d:w-1140px mx-auto items-center">
          <Questions />
        </div>
      </div>
      <div className="w-full bg-footer">
        <Footer />
      </div>
    </div>
  );
}

const PiggyBankIcon = ({className}) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipPath="url(#clip0_3752:28267)">
      <path d="M52.8128 33.8267C52.2984 33.8267 51.8814 34.2437 51.8814 34.758C51.8814 35.4102 51.3509 35.9407 50.6988 35.9407C50.0468 35.9407 49.5162 35.4102 49.5162 34.758C49.5162 34.2435 49.0992 33.8267 48.5848 33.8267C48.0704 33.8267 47.6534 34.2437 47.6534 34.758C47.6534 36.4373 49.0197 37.8034 50.6988 37.8034C52.3779 37.8034 53.7442 36.4372 53.7442 34.758C53.7442 34.2434 53.3272 33.8267 52.8128 33.8267Z" fill="#E84300" stroke="#E84300" strokeWidth="0.4"/>
      <path d="M61.5555 33.9788L58.934 33.139C58.5982 33.0314 58.3336 32.7634 58.2262 32.422C57.6737 30.6654 56.84 29.0163 55.7481 27.5203C55.2505 26.8384 54.6971 26.1873 54.0926 25.5674C54.4794 23.8708 54.6896 21.9507 54.6624 20.2918C54.6234 17.9187 54.1491 16.5268 53.2126 16.0363C52.7082 15.7718 51.1733 14.9683 42.8649 18.7715C42.6681 18.8615 42.4844 18.9724 42.3143 19.0994C41.7541 18.9489 41.1816 18.8097 40.6056 18.6847C40.5363 18.6695 40.4647 18.6562 40.3949 18.6414C41.0681 17.1707 41.4613 15.5733 41.5351 13.9243C41.5581 13.4103 41.1603 12.975 40.6463 12.9522C40.1336 12.9267 39.697 13.3269 39.6741 13.8409C39.5527 16.5523 38.428 19.1034 36.5073 21.0243C35.3596 22.1719 34.0159 23.0055 32.5838 23.5305C30.1001 23.182 27.5704 23.182 25.0868 23.5305C23.6545 23.0055 22.3109 22.1719 21.1632 21.0243C19.114 18.975 17.9854 16.2504 17.9854 13.3523C17.9854 10.454 19.114 7.72953 21.1632 5.68028C23.2125 3.6309 25.9373 2.50228 28.8353 2.50228C31.7333 2.50228 34.458 3.6309 36.5073 5.68028C37.3308 6.50378 38.0113 7.44353 38.5299 8.47316C38.7613 8.93266 39.3214 9.11765 39.7808 8.88616C40.2402 8.65491 40.4251 8.09478 40.1937 7.63541C39.5859 6.42803 38.7887 5.32716 37.8246 4.3629C35.4235 1.96178 32.231 0.639404 28.8354 0.639404C25.4398 0.639404 22.2472 1.96178 19.8461 4.3629C17.445 6.76415 16.1226 9.95653 16.1226 13.3522C16.1226 16.7478 17.445 19.9403 19.8461 22.3414C20.5387 23.034 21.2922 23.6297 22.0893 24.1287C22.0895 24.1287 22.0898 24.1285 22.09 24.1285C21.5109 24.279 20.9361 24.448 20.3678 24.638C19.8799 24.8012 19.6166 25.3288 19.7798 25.8168C19.9428 26.3047 20.4706 26.5679 20.9584 26.4049C26.0379 24.7068 31.6329 24.7068 36.7124 26.4049C36.8104 26.4377 36.9099 26.4532 37.0078 26.4532C37.3974 26.4532 37.7606 26.2067 37.891 25.8168C38.0541 25.3289 37.7909 24.8012 37.303 24.638C36.7346 24.448 36.1599 24.2789 35.5807 24.1285C35.581 24.1285 35.5812 24.1287 35.5815 24.1287C36.3786 23.6297 37.132 23.034 37.8246 22.3414C38.4374 21.7287 38.9783 21.0595 39.4479 20.3484C39.7046 20.3983 39.9595 20.4505 40.2106 20.505C40.5451 20.5777 40.8781 20.6557 41.2081 20.7375C41.1978 20.778 41.1871 20.8184 41.1785 20.8595C40.7243 23.0152 40.7537 24.9217 41.2661 26.5258C41.7266 27.9677 42.5578 29.1358 43.7361 29.9979C45.125 31.0139 46.8018 31.4528 48.3206 31.4528C49.4637 31.4528 50.5176 31.204 51.2916 30.7657C52.1671 30.2698 52.9006 29.2249 53.4813 27.6562C53.7496 27.9694 54.004 28.2903 54.2438 28.6188C55.2159 29.9505 55.958 31.4183 56.4495 32.981C56.7381 33.8989 57.4546 34.6212 58.366 34.9133L60.9875 35.753C61.6754 35.9734 62.1375 36.6065 62.1375 37.3288V41.6757C62.1375 42.3979 61.6754 43.031 60.9875 43.2514L56.7639 44.6043C56.0881 44.8209 55.5163 45.2853 55.1536 45.912C53.4943 48.7798 50.8854 51.1529 47.399 52.9655C46.9963 53.1752 46.7173 53.55 46.6333 53.9943L45.2805 61.1572C45.2431 61.3545 45.0702 61.4977 44.8694 61.4977H40.471C40.2701 61.4977 40.0973 61.3544 40.0599 61.1572L39.3106 57.1985C39.1631 56.4197 38.4326 55.9023 37.6464 56.0214C35.7517 56.3079 33.7995 56.453 31.8441 56.453C30.3894 56.453 28.9532 56.3719 27.5754 56.2118C26.8135 56.1242 26.1038 56.6435 25.9614 57.3958L25.2494 61.1572C25.212 61.3545 25.0391 61.4977 24.8382 61.4977H20.4399C20.239 61.4977 20.0661 61.3544 20.0282 61.1542L18.7257 54.3889C18.6419 53.953 18.3681 53.5824 17.9743 53.372C12.0313 50.1994 8.89 44.8989 8.89 38.0439C8.89 34.5804 9.64775 31.5178 11.1421 28.9408C12.5366 26.5359 14.5734 24.5475 17.1957 23.0307C17.641 22.773 17.7931 22.2033 17.5356 21.7579C17.2781 21.3127 16.7084 21.1608 16.263 21.418C11.1781 24.3595 8.11125 28.8975 7.26687 34.6613V34.6612C7.17725 34.653 7.0875 34.6453 6.99813 34.636C7.01438 34.0142 6.90188 33.3867 6.65688 32.7777C6.1165 31.4344 5.0065 30.4649 3.82888 30.3078C2.90088 30.1835 2.01775 30.5775 1.40488 31.3873C0.51625 32.5615 0.661125 33.4908 0.939 34.0635C1.40813 35.0302 2.614 35.7139 4.61513 36.1438C4.56013 36.2262 4.49962 36.3089 4.43337 36.392C3.251 37.8749 1.858 38.2028 0.9535 38.2337C0.424 38.2515 0 38.6767 0 39.2065V39.211C0 39.7337 0.412375 40.1599 0.9345 40.1838C1.00137 40.1869 1.07125 40.1885 1.144 40.1885C2.2885 40.1885 4.12537 39.7664 5.89012 37.5535C6.16875 37.2043 6.39575 36.8358 6.57025 36.455C6.746 36.4749 6.91488 36.4919 7.07662 36.5069C7.07662 36.5065 7.07662 36.5063 7.07675 36.5059C7.045 37.0107 7.02738 37.5228 7.02738 38.0439C7.02738 41.9224 7.952 45.3805 9.77538 48.3227C11.4566 51.0352 13.8637 53.2562 16.9322 54.9264L18.1985 61.5034C18.4021 62.5794 19.3447 63.3604 20.4399 63.3604H24.8382C25.9334 63.3604 26.876 62.5794 27.0796 61.5034L27.7234 58.1024C29.0604 58.244 30.4446 58.3158 31.844 58.3158C33.764 58.3158 35.6818 58.182 37.5508 57.918L38.2294 61.5037C38.4331 62.5797 39.3757 63.3605 40.4707 63.3605H44.8691C45.9642 63.3605 46.9069 62.5795 47.1106 61.5032L48.4277 54.5293C52.1488 52.5617 54.9535 49.9769 56.7658 46.8449C56.8964 46.6192 57.0975 46.4535 57.332 46.3784L61.5555 45.0255C63.0176 44.5569 64 43.2108 64 41.6754V37.3285C64 35.7933 63.0176 34.4472 61.5555 33.9788ZM52.6598 22.9092C52.3013 25.9749 51.3396 28.5974 50.3734 29.1447C49.2751 29.7668 46.7395 29.8869 44.8358 28.4943C42.9298 27.1 42.2954 24.5928 43.001 21.2435C43.001 21.2434 43.001 21.2434 43.001 21.2434C43.0719 20.907 43.3109 20.616 43.6403 20.4653C48.3033 18.3308 50.9916 17.6327 51.9904 17.6327C52.1411 17.6327 52.2534 17.6485 52.3281 17.6778C52.6281 17.9975 53.0216 19.8152 52.6598 22.9092ZM2.61512 33.2502C2.51875 33.0514 2.74625 32.702 2.8905 32.5113C3.11913 32.2093 3.32975 32.1475 3.48887 32.1475C3.5225 32.1475 3.55387 32.1503 3.58262 32.1542C4.01087 32.2113 4.61088 32.6825 4.92875 33.4727C5.00362 33.6587 5.10087 33.9668 5.12362 34.351C3.83425 34.0839 2.8325 33.6988 2.61512 33.2502Z" fill="#E84300" stroke="#E84300" strokeWidth="0.4"/>
      <path d="M29.7397 12.2846V8.95162C30.8891 9.03375 31.3161 9.55912 31.7101 9.55912C32.2027 9.55912 32.4326 8.93525 32.4326 8.62325C32.4326 7.81862 30.8562 7.47387 29.7397 7.441V6.9975C29.7397 6.8005 29.4933 6.61987 29.2471 6.61987C28.9678 6.61987 28.7708 6.8005 28.7708 6.9975V7.47362C27.211 7.63787 25.6511 8.45887 25.6511 10.5277C25.6511 12.6295 27.2931 13.2206 28.7708 13.746V17.6046C27.096 17.4732 26.6527 16.3239 26.1108 16.3239C25.7003 16.3239 25.3556 16.8657 25.3556 17.2599C25.3556 18.0644 26.7348 19.1645 28.7708 19.1974V19.7064C28.7708 19.9034 28.968 20.084 29.2471 20.084C29.4935 20.084 29.7397 19.9034 29.7397 19.7064V19.1481C31.5131 18.9017 32.7281 17.7852 32.7281 15.7656C32.7281 13.5326 31.1682 12.81 29.7397 12.2846ZM28.8693 11.9727C27.9991 11.6444 27.2931 11.2996 27.2931 10.3637C27.2931 9.50987 27.9498 9.09937 28.8693 8.9845V11.9727ZM29.6411 17.5717V14.1072C30.4456 14.452 31.086 14.9117 31.086 15.9461C31.086 16.8822 30.5277 17.4076 29.6411 17.5717Z" fill="#E84300" stroke="#E84300" strokeWidth="0.4"/>
    </g>
    <defs>
      <clipPath id="clip0_3752:28267">
        <rect width="64" height="64" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const ConnectionIcon = ({className}) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M49.9654 20.6398C49.5085 20.0679 49.0185 19.512 48.5086 18.9871L47.0739 20.3788C47.5388 20.8588 47.9867 21.3667 48.4036 21.8886L49.9654 20.6398Z" fill="#E84300"/>
    <path d="M50.6076 25.2524L52.3783 24.3235C52.0364 23.6726 51.6604 23.0327 51.2615 22.4238L49.5887 23.5237C49.9527 24.0756 50.2956 24.6585 50.6076 25.2524Z" fill="#E84300"/>
    <path d="M46.8993 17.4796C46.3414 17.0056 45.7554 16.5527 45.1565 16.1348L44.0117 17.7725C44.5576 18.1555 45.0935 18.5724 45.6035 19.0033L46.8993 17.4796Z" fill="#E84300"/>
    <path d="M52.9007 32.9195L54.8914 32.7195C54.8194 31.9866 54.7114 31.2528 54.5705 30.5369L52.6088 30.9238C52.7347 31.5807 52.8337 32.2506 52.9007 32.9195Z" fill="#E84300"/>
    <path d="M52.1241 28.9757L54.0398 28.4018C53.8308 27.7019 53.5839 27.002 53.3079 26.3241L51.4552 27.078C51.7082 27.6999 51.9331 28.3358 52.1241 28.9757Z" fill="#E84300"/>
    <path d="M52.9132 36.9406L54.9039 37.1236C54.9679 36.4237 55.0039 35.7088 55.0039 34.924L53.0012 34.9999C53.0012 35.6478 52.9712 36.2997 52.9132 36.9406Z" fill="#E84300"/>
    <path d="M27.1 57.4759C27.7409 57.6149 28.3948 57.7279 29.0447 57.8109L29.2976 55.8282C28.7057 55.7512 28.1088 55.6482 27.5249 55.5212L27.1 57.4759Z" fill="#E84300"/>
    <path d="M31.0906 55.9799L31.0037 57.9796C31.3349 57.9929 31.6672 57.9996 32.0005 57.9996C32.3275 57.9996 32.6524 57.9926 32.9774 57.9786L32.8924 55.9789C32.2935 56.0069 31.6876 56.0059 31.0906 55.9799Z" fill="#E84300"/>
    <path d="M23.3324 56.3095C23.9423 56.5575 24.5672 56.7814 25.1901 56.9734L25.78 55.0627C25.2131 54.8877 24.6432 54.6838 24.0863 54.4568L23.3324 56.3095Z" fill="#E84300"/>
    <path d="M38.1996 55.0691L38.7885 56.9798C39.4144 56.7869 40.0393 56.5629 40.6472 56.3159L39.8993 54.4642C39.3444 54.6892 38.7735 54.8932 38.1996 55.0691Z" fill="#E84300"/>
    <path d="M34.687 55.829L34.94 57.8127C35.5889 57.7297 36.2398 57.6127 36.8847 57.4787L36.4617 55.524C35.8758 55.651 35.2789 55.754 34.687 55.829Z" fill="#E84300"/>
    <path d="M11.0867 36.9178C11.0287 36.2849 10.9997 35.639 10.9997 35.0001V34.9001L9 35.0001C9 35.7 9.032 36.4049 9.09998 37.0998L11.0867 36.9178Z" fill="#E84300"/>
    <path d="M12.5509 27.0618L10.6992 26.3049C10.4233 26.9808 10.1763 27.6797 9.96533 28.3816L11.881 28.9565C12.073 28.3156 12.299 27.6787 12.5509 27.0618Z" fill="#E84300"/>
    <path d="M20.0004 17.7656L18.8565 16.1259C18.2566 16.5458 17.6677 16.9987 17.1118 17.4716L18.4006 18.9994C18.9125 18.5625 19.4475 18.1485 20.0004 17.7656Z" fill="#E84300"/>
    <path d="M11.4005 30.9078L9.43684 30.5199C9.29486 31.2378 9.18688 31.9717 9.11389 32.6996L11.1046 32.8995C11.1696 32.2326 11.2696 31.5627 11.4005 30.9078Z" fill="#E84300"/>
    <path d="M14.4234 23.5057L12.7516 22.4059C12.3517 23.0188 11.9737 23.6577 11.6338 24.3056L13.4035 25.2364C13.7145 24.6485 14.0574 24.0656 14.4234 23.5057Z" fill="#E84300"/>
    <path d="M16.9339 20.371L15.5001 18.9772C14.9912 19.5001 14.5003 20.056 14.0424 20.6269L15.6021 21.8787C16.022 21.3558 16.47 20.8489 16.9339 20.371Z" fill="#E84300"/>
    <path d="M52.0007 38.9996C50.4632 39.0004 48.9431 39.3248 47.5391 39.9515C46.1352 40.5783 44.8788 41.4935 43.8517 42.6376L37.3287 37.7456C37.7634 36.9078 37.9937 35.9791 38.0008 35.0353C38.0078 34.0915 37.7915 33.1594 37.3694 32.3152C36.9473 31.4711 36.3315 30.7387 35.5722 30.1781C34.8129 29.6175 33.9317 29.2445 33.0007 29.0896V24.9486C35.8197 24.6913 38.431 23.3571 40.2914 21.2235C42.1518 19.09 43.1181 16.3214 42.9893 13.4936C42.8605 10.6658 41.6465 7.99653 39.5999 6.04097C37.5532 4.08542 34.8314 2.99414 32.0007 2.99414C29.17 2.99414 26.4482 4.08542 24.4016 6.04097C22.3549 7.99653 21.1409 10.6658 21.0121 13.4936C20.8833 16.3214 21.8496 19.09 23.71 21.2235C25.5704 23.3571 28.1817 24.6913 31.0007 24.9486V29.0896C30.0697 29.2446 29.1885 29.6178 28.4292 30.1785C27.67 30.7392 27.0541 31.4716 26.632 32.3159C26.21 33.1601 25.9936 34.0923 26.0007 35.0361C26.0078 35.98 26.238 36.9088 26.6727 37.7466L20.1507 42.6376C18.2481 40.5298 15.6062 39.2366 12.7744 39.0272C9.94268 38.8178 7.13921 39.7082 4.94725 41.5131C2.75529 43.3181 1.34363 45.8987 1.00594 48.718C0.668261 51.5374 1.43056 54.3784 3.13425 56.6499C4.83794 58.9215 7.35183 60.4488 10.1529 60.914C12.954 61.3793 15.8267 60.7466 18.1732 59.1478C20.5198 57.5489 22.1595 55.1069 22.7513 52.3297C23.3432 49.5526 22.8415 46.6542 21.3507 44.2376L27.8737 39.3466C28.9848 40.4087 30.4626 41.0015 31.9997 41.0015C33.5368 41.0015 35.0146 40.4087 36.1257 39.3466L42.6487 44.2376C41.3758 46.3102 40.8265 48.7467 41.0869 51.165C41.3473 53.5834 42.4027 55.847 44.0877 57.6012C45.7727 59.3554 47.9921 60.5009 50.398 60.8583C52.804 61.2157 55.2605 60.7648 57.3826 59.5762C59.5048 58.3876 61.1726 56.5285 62.1248 54.2902C63.0769 52.052 63.2595 49.5611 62.6441 47.2079C62.0286 44.8547 60.6497 42.7722 58.7236 41.2868C56.7976 39.8014 54.4331 38.9969 52.0007 38.9996ZM8.00072 58.0496V55.9996C8.00072 54.9387 8.42214 53.9213 9.17229 53.1712C9.92243 52.421 10.9399 51.9996 12.0007 51.9996C13.0616 51.9996 14.079 52.421 14.8291 53.1712C15.5793 53.9213 16.0007 54.9387 16.0007 55.9996V58.0496C14.7598 58.6739 13.3899 58.9991 12.0007 58.9991C10.6116 58.9991 9.24167 58.6739 8.00072 58.0496ZM10.0007 47.9996V46.9996C10.0007 46.4692 10.2114 45.9604 10.5865 45.5854C10.9616 45.2103 11.4703 44.9996 12.0007 44.9996C12.5311 44.9996 13.0399 45.2103 13.4149 45.5854C13.79 45.9604 14.0007 46.4692 14.0007 46.9996V47.9996C14.0007 48.53 13.79 49.0387 13.4149 49.4138C13.0399 49.7889 12.5311 49.9996 12.0007 49.9996C11.4703 49.9996 10.9616 49.7889 10.5865 49.4138C10.2114 49.0387 10.0007 48.53 10.0007 47.9996ZM18.0007 56.6886V55.9996C18.0001 54.9261 17.7115 53.8725 17.165 52.9485C16.6185 52.0246 15.8342 51.2642 14.8937 50.7466C15.6025 50.0075 15.999 49.0236 16.0007 47.9996V46.9996C16.0007 45.9387 15.5793 44.9213 14.8291 44.1712C14.079 43.421 13.0616 42.9996 12.0007 42.9996C10.9399 42.9996 9.92243 43.421 9.17229 44.1712C8.42214 44.9213 8.00072 45.9387 8.00072 46.9996V47.9996C8.0024 49.0236 8.3989 50.0075 9.10772 50.7466C8.16728 51.2642 7.38292 52.0246 6.83643 52.9485C6.28994 53.8725 6.00134 54.9261 6.00072 55.9996V56.6886C4.64214 55.4734 3.68454 53.8744 3.25463 52.1031C2.82473 50.3318 2.94278 48.4717 3.59317 46.769C4.24355 45.0662 5.39562 43.6011 6.89692 42.5675C8.39822 41.5338 10.178 40.9804 12.0007 40.9804C13.8234 40.9804 15.6032 41.5338 17.1045 42.5675C18.6058 43.6011 19.7579 45.0662 20.4083 46.769C21.0587 48.4717 21.1767 50.3318 20.7468 52.1031C20.3169 53.8744 19.3593 55.4734 18.0007 56.6886ZM30.0007 11.9996V10.9996C30.0007 10.4692 30.2114 9.96045 30.5865 9.58538C30.9616 9.21031 31.4703 8.99959 32.0007 8.99959C32.5311 8.99959 33.0399 9.21031 33.4149 9.58538C33.79 9.96045 34.0007 10.4692 34.0007 10.9996V11.9996C34.0007 12.53 33.79 13.0387 33.4149 13.4138C33.0399 13.7889 32.5311 13.9996 32.0007 13.9996C31.4703 13.9996 30.9616 13.7889 30.5865 13.4138C30.2114 13.0387 30.0007 12.53 30.0007 11.9996ZM32.0007 15.9996C33.0616 15.9996 34.079 16.421 34.8291 17.1712C35.5793 17.9213 36.0007 18.9387 36.0007 19.9996V22.0496C34.7598 22.6739 33.3899 22.9991 32.0007 22.9991C30.6115 22.9991 29.2417 22.6739 28.0007 22.0496V19.9996C28.0007 18.9387 28.4221 17.9213 29.1723 17.1712C29.9224 16.421 30.9398 15.9996 32.0007 15.9996ZM23.0007 13.9996C22.9975 12.4975 23.3703 11.0185 24.0851 9.69746C24.7999 8.37638 25.834 7.25521 27.0931 6.43616C28.3522 5.6171 29.7963 5.1262 31.2937 5.00821C32.7912 4.89023 34.2943 5.1489 35.6662 5.76065C37.038 6.3724 38.2349 7.31778 39.1478 8.51061C40.0607 9.70344 40.6605 11.1058 40.8926 12.5898C41.1247 14.0738 40.9817 15.5924 40.4765 17.0069C39.9714 18.4215 39.1203 19.6872 38.0007 20.6886V19.9996C38.0001 18.9261 37.7115 17.8725 37.165 16.9485C36.6185 16.0246 35.8342 15.2642 34.8937 14.7466C35.6025 14.0075 35.999 13.0236 36.0007 11.9996V10.9996C36.0007 9.93873 35.5793 8.92131 34.8291 8.17116C34.079 7.42102 33.0616 6.99959 32.0007 6.99959C30.9398 6.99959 29.9224 7.42102 29.1723 8.17116C28.4221 8.92131 28.0007 9.93873 28.0007 10.9996V11.9996C28.0024 13.0236 28.3989 14.0075 29.1077 14.7466C28.1673 15.2642 27.3829 16.0246 26.8364 16.9485C26.2899 17.8725 26.0013 18.9261 26.0007 19.9996V20.6886C25.0579 19.8477 24.3033 18.8172 23.7863 17.6645C23.2693 16.5118 23.0016 15.2629 23.0007 13.9996ZM32.0007 38.9996C31.2096 38.9996 30.4362 38.765 29.7784 38.3255C29.1206 37.8859 28.6079 37.2612 28.3052 36.5303C28.0024 35.7994 27.9232 34.9952 28.0776 34.2192C28.2319 33.4433 28.6129 32.7306 29.1723 32.1712C29.7317 31.6118 30.4444 31.2308 31.2204 31.0764C31.9963 30.9221 32.8005 31.0013 33.5314 31.3041C34.2624 31.6068 34.8871 32.1195 35.3266 32.7773C35.7661 33.4351 36.0007 34.2085 36.0007 34.9996C36.0007 36.0605 35.5793 37.0779 34.8291 37.828C34.079 38.5782 33.0616 38.9996 32.0007 38.9996ZM48.0007 58.0496V55.9996C48.0007 54.9387 48.4221 53.9213 49.1723 53.1712C49.9224 52.421 50.9398 51.9996 52.0007 51.9996C53.0616 51.9996 54.079 52.421 54.8291 53.1712C55.5793 53.9213 56.0007 54.9387 56.0007 55.9996V58.0496C54.7598 58.6739 53.3899 58.9991 52.0007 58.9991C50.6115 58.9991 49.2417 58.6739 48.0007 58.0496ZM50.0007 47.9996V46.9996C50.0007 46.4692 50.2114 45.9604 50.5865 45.5854C50.9616 45.2103 51.4703 44.9996 52.0007 44.9996C52.5311 44.9996 53.0399 45.2103 53.4149 45.5854C53.79 45.9604 54.0007 46.4692 54.0007 46.9996V47.9996C54.0007 48.53 53.79 49.0387 53.4149 49.4138C53.0399 49.7889 52.5311 49.9996 52.0007 49.9996C51.4703 49.9996 50.9616 49.7889 50.5865 49.4138C50.2114 49.0387 50.0007 48.53 50.0007 47.9996ZM58.0007 56.6886V55.9996C58.0001 54.9261 57.7115 53.8725 57.165 52.9485C56.6185 52.0246 55.8342 51.2642 54.8937 50.7466C55.6025 50.0075 55.999 49.0236 56.0007 47.9996V46.9996C56.0007 45.9387 55.5793 44.9213 54.8291 44.1712C54.079 43.421 53.0616 42.9996 52.0007 42.9996C50.9398 42.9996 49.9224 43.421 49.1723 44.1712C48.4221 44.9213 48.0007 45.9387 48.0007 46.9996V47.9996C48.0024 49.0236 48.3989 50.0075 49.1077 50.7466C48.1673 51.2642 47.3829 52.0246 46.8364 52.9485C46.2899 53.8725 46.0013 54.9261 46.0007 55.9996V56.6886C44.6421 55.4734 43.6845 53.8744 43.2546 52.1031C42.8247 50.3318 42.9428 48.4717 43.5932 46.769C44.2436 45.0662 45.3956 43.6011 46.8969 42.5675C48.3982 41.5338 50.178 40.9804 52.0007 40.9804C53.8234 40.9804 55.6032 41.5338 57.1045 42.5675C58.6058 43.6011 59.7579 45.0662 60.4083 46.769C61.0587 48.4717 61.1767 50.3318 60.7468 52.1031C60.3169 53.8744 59.3593 55.4734 58.0007 56.6886Z" fill="#E84300"/>
  </svg>
);

const SocialMediaIcon = ({className}) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipPath="url(#clip0_3752:28300)">
      <path d="M55.0063 0H52.2547C51.0451 0 51.0451 1.87527 52.2547 1.87527H55.0063C57.848 1.87527 60.1599 4.17885 60.1599 7.01026V28.7099C60.1599 31.5414 57.8481 33.845 55.0063 33.845H51.8855C51.6796 33.845 51.4794 33.9128 51.3158 34.0379L45.5892 38.4183V34.7827C45.5892 34.2648 45.1695 33.845 44.6516 33.845H33.2399C32.3054 33.845 31.4073 33.5984 30.6151 33.1294V22.6039C30.6151 20.6324 29.611 18.8905 28.0862 17.86V7.01026C28.0862 4.17885 30.3981 1.87527 33.2399 1.87527H46.3788C47.5882 1.87527 47.5882 0 46.3788 0H33.2399C29.3641 0 26.2109 3.14483 26.2109 7.01026V17.0358C25.7816 16.9333 25.3343 16.8774 24.8739 16.8774H7.70946C4.54388 16.8774 1.96838 19.4463 1.96838 22.6039V24.6286C1.96838 25.838 3.84365 25.838 3.84365 24.6286V22.6039C3.84365 20.4803 5.57778 18.7527 7.70946 18.7527H24.8741C27.0058 18.7527 28.74 20.4803 28.74 22.6039V33.5027C28.7288 33.5855 28.7293 33.6689 28.74 33.751V39.7159C28.74 39.8338 28.7329 39.9512 28.7223 40.0679H26.7886C24.6579 40.0679 22.8817 41.6058 22.5134 43.6269C22.4281 43.6591 22.3462 43.7039 22.2703 43.7625L18.0766 47.0005V44.5047C18.0766 43.9869 17.6569 43.567 17.139 43.567H7.70946C5.57778 43.567 3.84365 41.8394 3.84365 39.7159V30.2544C3.84365 29.0449 1.96838 29.0449 1.96838 30.2544V39.716C1.96838 42.8736 4.54388 45.4424 7.70946 45.4424H16.2014V48.9092C16.2014 49.6613 17.1147 50.1125 17.7122 49.6514L22.4422 45.9993V56.5477C22.4422 58.9386 24.3921 60.8837 26.7887 60.8837H32.5427V63.0716C32.5427 63.8235 33.4559 64.2752 34.0533 63.8139L37.8483 60.8837H38.9695C41.3661 60.8837 43.316 58.9385 43.316 56.5477V54.8829C43.316 53.6735 41.4407 53.6735 41.4407 54.8829V56.5477C41.4407 57.9046 40.3322 59.0084 38.9695 59.0084H37.5284C37.321 59.0084 37.1195 59.0772 36.9554 59.2038L34.4178 61.163V59.9459C34.4178 59.4281 33.9981 59.0083 33.4802 59.0083H26.7886C25.426 59.0083 24.3174 57.9044 24.3174 56.5476V44.404C24.3174 43.0471 25.4259 41.9433 26.7886 41.9433H38.9695C40.3321 41.9433 41.4407 43.0472 41.4407 44.404V49.0071C41.4407 50.2165 43.316 50.2165 43.316 49.0071V44.4042C43.316 42.0132 41.3661 40.0682 38.9695 40.0682H30.6045C30.6117 39.951 30.6153 35.2152 30.6153 35.2152C31.442 35.5476 32.3284 35.7204 33.24 35.7204H43.714V40.3161C43.714 41.0663 44.6234 41.518 45.2214 41.0608L52.2031 35.7204H55.0064C58.8821 35.7204 62.0353 32.5756 62.0353 28.71V7.01026C62.0352 3.14483 58.882 0 55.0063 0V0Z" fill="#E84300"/>
      <path d="M46.4659 6.92763C45.2753 6.62371 44.0622 7.56435 44.0622 8.79452C44.0622 10.1386 43.5723 11.4339 42.6836 12.4412L40.1002 15.3645C39.9329 15.1078 39.6439 14.9379 39.3147 14.9379H34.2715C33.7535 14.9379 33.3339 15.3577 33.3339 15.8755V27.2228C33.3339 27.7406 33.7535 28.1604 34.2715 28.1604H39.3147C39.6937 28.1604 40.0192 27.9353 40.1671 27.612C41.1881 28.2358 42.3713 28.5731 43.5751 28.5731H52.4879C53.8498 28.5731 54.9734 27.3913 54.9095 26.0329C54.8811 25.4313 54.9121 17.3535 54.9121 17.1741C54.9121 15.8374 53.8246 14.7498 52.4906 14.7498L47.8558 14.7359L48.0477 14.2814C48.9247 12.2045 48.7803 9.79617 47.6619 7.83876C47.4009 7.38145 46.976 7.05802 46.4659 6.92763C46.976 7.05802 45.9556 6.79736 46.4659 6.92763C46.976 7.05802 45.2755 6.62371 46.4659 6.92763ZM38.3771 26.2852H35.2091V16.8132H38.3771V26.2852ZM52.4879 16.6249C52.7907 16.6249 53.037 16.8712 53.037 17.174C53.037 17.3524 53.0351 17.8366 53.0326 18.493C53.0187 22.1176 53.0095 25.5503 53.0362 26.1209C53.046 26.3268 52.9458 26.4641 52.8853 26.5276C52.7805 26.6374 52.6394 26.6977 52.4879 26.6977H43.5751C42.5127 26.6977 41.4729 26.3296 40.647 25.6611L40.2524 25.3415V18.0241L44.0893 13.6824C45.2811 12.3317 45.9374 10.5958 45.9374 8.7944C45.9374 8.74139 46.0098 8.72764 46.0338 8.7689C46.8642 10.222 46.9712 12.0099 46.3202 13.5517L45.5803 15.3043C45.4581 15.5935 45.4889 15.9244 45.6618 16.1862C45.8349 16.448 46.1275 16.6058 46.4411 16.6068L52.4879 16.6249Z" fill="#E84300"/>
      <path d="M9.9955 32.5668C9.47755 32.5668 9.05786 32.9866 9.05786 33.5044C9.05786 34.0222 9.47755 34.442 9.9955 34.442H12.7594L12.2431 37.5649C12.1586 38.0757 12.5044 38.5584 13.0152 38.6429C13.0671 38.6515 13.1184 38.6557 13.1692 38.6557C13.6198 38.6557 14.0172 38.33 14.0932 37.8708L14.66 34.4422H16.922L16.4057 37.565C16.3212 38.0758 16.667 38.5585 17.1778 38.643C17.2297 38.6517 17.281 38.6558 17.3318 38.6558C17.7824 38.6558 18.1798 38.3301 18.2558 37.8709L18.8226 34.4423H22.5848C23.1028 34.4423 23.5224 34.0225 23.5224 33.5047C23.5224 32.9868 23.1028 32.567 22.5848 32.567H19.1327L19.5109 30.2797H22.5848C23.1028 30.2797 23.5224 29.8599 23.5224 29.3421C23.5224 28.8242 23.1028 28.4044 22.5848 28.4044H19.8209L20.3372 25.2816C20.4218 24.7708 20.0759 24.2881 19.5651 24.2036C19.0537 24.1188 18.5716 24.4649 18.4871 24.9757L17.9203 28.4043H15.6583L16.1746 25.2815C16.2592 24.7707 15.9134 24.288 15.4025 24.2034C14.8905 24.1187 14.4091 24.4647 14.3245 24.9756L13.7577 28.4042H9.9955C9.47755 28.4042 9.05786 28.824 9.05786 29.3418C9.05786 29.8596 9.47755 30.2794 9.9955 30.2794H13.4476L13.0694 32.5668H9.9955ZM15.3484 30.2794H17.6103L17.2322 32.5668H14.9702L15.3484 30.2794Z" fill="#E84300"/>
      <path d="M32.8681 46.7813C32.111 46.1579 31.1037 45.912 30.0933 46.1577C28.7985 46.4721 27.4919 47.6825 27.4919 49.6777C27.4919 50.9195 27.9451 51.9974 28.8774 52.973C29.6389 53.77 30.7378 54.5279 32.4403 55.4305C32.5777 55.5034 32.7286 55.5398 32.8795 55.5398C33.0304 55.5398 33.1813 55.5034 33.3187 55.4305C36.2888 53.8559 38.2669 52.275 38.2669 49.6777C38.2669 47.6716 36.9139 46.4736 35.573 46.1762C34.5656 45.9526 33.589 46.1899 32.8681 46.7813ZM36.3915 49.6777C36.3915 51.0786 35.4622 52.1146 32.8793 53.5365C30.2965 52.1145 29.3671 51.0785 29.3671 49.6777C29.3671 48.6353 29.9707 48.1172 30.5356 47.9799C30.6398 47.9547 30.7513 47.9404 30.8659 47.9404C31.2909 47.9404 31.7581 48.1367 32.0461 48.6952C32.2103 49.0129 32.542 49.21 32.898 49.2026C33.2554 49.1955 33.5778 48.9857 33.729 48.6616C34.0324 48.0113 34.6705 47.8969 35.1666 48.0071C35.7589 48.1382 36.3915 48.6461 36.3915 49.6777Z" fill="#E84300"/>
    </g>
    <defs>
      <clipPath id="clip0_3752:28300">
        <rect width="64" height="64" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);
