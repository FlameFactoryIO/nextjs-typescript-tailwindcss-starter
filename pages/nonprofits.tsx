import Head from "next/head";
import Footer from "../components/Footer";
import Button from "../components/Button";
import TopNav from "../components/TopNav";

// noinspection JSUnusedGlobalSymbols
export default function Home() {
  return (
    <div className="w-full min-w-320px">
      <Head>
        <title>Nonprofits</title>
      </Head>

      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

      <div className="px-20px pt-82px pb-330px bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">
        <div id="our-purpose" className="flex flex-col  mx-auto relative">
          <p className="text-26px text-white text-center leading-31-2px">
            Our purpose at{" "}
            <span className="font-bold text-primary">Mo ve the Chain</span> is
            to offer a platform to help promote your cause and raise funds.
          </p>
          <p className="text-16px pt-21px text-white text-center leading-20-8px font-light pb-50px">
            We offer a{" "}
            <span className="font-bold text-white">free platform</span> for your
            nonprofits allowing you to raise funds digitally, improve your
            online presence and expand your network to a broader audience.
          </p>
          <div>{/* TODO: move images */}</div>
        </div>
      </div>

      <div className="bg-footer px-20px pt-50px pb-62px">
        <div
          id="why-move-the-chain"
          className="grid grid-rows-5 gap-15px mx-auto text-center "
        >
          <div>
            <img className="mx-auto pb-20px" src="/images/mtc.svg" alt="logo" />
            <div className="mx-auto pb-35px text-center text-24px font-bold leading-28-5px">
              Why Move the Chain is right for your nonprofit?
            </div>
          </div>
          <div>
            <img
              className="mx-auto pb-13px"
              src="/images/piggy-bank.svg"
              alt="logo"
            />
            <div className="mx-auto pb-8px text-center text-16px font-bold leading-24px">
              We 'll cover the cost
            </div>
            <p className="mx-auto text-center text-13px leading-17px font-light">
              Move the Chain provides a free platform for nonprofits to promote
              causes, fundraise digitally and engage with donors.
            </p>
          </div>
          <div>
            <img
              className="mx-auto pb-13px"
              src="/images/connection.svg"
              alt="logo"
            />
            <div className="mx-auto pb-8px text-center text-16px font-bold leading-24px">
              Create campaigns
            </div>
            <p className="mx-auto text-center text-13px leading-17px font-light">
              Using video based campaigns, explain why you are raising funds and
              connect with current and new donors in a genuine and transparent
              way.
            </p>
          </div>
          <div>
            <img
              className="mx-auto pb-13px"
              src="/images/social-media.svg"
              alt="logo"
            />
            <div className="mx-auto pb-8px text-center text-16px font-bold leading-24px">
              Boost your presence
            </div>
            <p className="mx-auto text-center text-13px leading-17px font-light">
              Leverage our platform to raise funds and bring awareness to your
              cause. Connect with donors and corporations easiler than ever
              before.
            </p>
          </div>
          <div>
            <div className="flex flex-row pb-29px">
              <div className="font-hand text-primary mx-auto text-center text-46px leading-38px">
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
            {/* TODO: move firulete */}
            <p className="mx-auto text-center text-13px leading-17px pb-24px font-light">
              Find your nonprofit in our database and provide information to
              verify your nonprofit.
            </p>
            <Button
              type="button"
              variant="primary"
              className="mx-auto px-30px py-11px w-140px h-46px rounded-10pxi"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>

      <div className="px-20px py-50px  w-full">
        <div id="steps" className="grid grid-rows-4 space-y-40px">
          <div
            id="step-1"
            className="grid grid-rows-2 t:grid-cols-2 t:grid-rows-1"
          >
            <div id="step-1-steps" className=" flex flex-col pb-15px">
              <div className="px-51px py-9px  border-solid border-2 rounded-10px font-bold text-primary border-primary mr-auto mb-25px">
                Step 1
              </div>
              <div className="text-20px font-bold leading-24px mb-22px">
                Start by claiming your page!
              </div>
              <p className="text-13px leading-17px pb-22px">
                With a simple click of a button, you can claim your page on Move
                the Chain! Follow those{" "}
                <span className="font-bold">simple steps </span>to get started:
              </p>
              <div className="px-20px ">
                <ol className="list-decimal text-primary text-13px leading-17px flex flex-col gap-y-14px font-bold">
                  <li>
                    <p className="text-black font-light pl-9px">
                      Click on{" "}
                      <span className="font-bold">“Claim your page”</span> and
                      search for your nonprofit
                    </p>
                  </li>
                  <li>
                    <p className="text-black font-light pl-9px">
                      If you are part of{" "}
                      <span className="font-bold">PayPal Giving Fund</span>, you
                      will find your nonprofit. Simply click the{" "}
                      <span className="font-bold">“Claim Page”</span> button to
                      beging the process
                    </p>
                  </li>
                  <li>
                    <p className="text-black font-light pl-9px">
                      If you are not registered with PayPal Giving Fund, simply
                      enroll your nonprofit so you can start accepting donations
                      and create a <span className="font-bold"> profile</span>{" "}
                      on Move the Chain
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div
              id="step-1-img"
              className="grid grid-col-2 grid-rows-2 t:pl-34px relative"
            >
              <div className=" bg-gray-200 col-span-2 row-span-2"></div>
            </div>
          </div>
          <div
            id="step-2"
            className="grid grid-rows-2 t:grid-cols-2  t:grid-rows-1"
          >
            <div
              id="step-2-steps"
              className="t:col-start-2 flex flex-col pb-20px t:pl-34px"
            >
              <div className="px-51px py-9px  border-solid border-2 rounded-10px font-bold text-primary border-primary mr-auto mb-25px">
                Step 2
              </div>
              <div className="text-20px font-bold leading-24px mb-22px">
                Update your Profile
              </div>
              <p className="text-13px leading-17px pb-22px font-light">
                Within <span className="font-bold">a few minutes </span> you can
                update your profile!
              </p>
              <p className="text-13px leading-17px pb-22px font-light">
                Be sure to include the best possible photos and videos to{" "}
                <span className="font-bold">emphasize the great work </span>
                you’re doing! Your “About” section should be both concise and
                heartfelt.
              </p>
              <p className="text-13px leading-17px pb-12px font-light">
                This is your opportunity to create a profile that best
                represents your organization to
                <span className="font-bold">
                  {" "}
                  maximize the potential{" "}
                </span> of{" "}
                <span className="font-bold">
                  turning visitors into donors!{" "}
                </span>
              </p>
            </div>
            <div
              id="step-2-img"
              className="t:col-start-1 t:row-start-1 grid grid-col-2 grid-rows-2  relative"
            >
              <div className=" bg-gray-200 col-span-2 row-span-2"></div>
            </div>
          </div>
          <div
            id="step-3"
            className="grid grid-rows-2 t:grid-cols-2 t:grid-rows-1"
          >
            <div id="step-3-steps" className=" flex flex-col pb-15px">
              <div className="px-51px py-9px  border-solid border-2 rounded-10px font-bold text-primary border-primary mr-auto mb-25px">
                Step 3
              </div>
              <div className="text-20px font-bold leading-24px mb-22px">
                Create a campaign!
              </div>
              <p className="text-13px leading-17px pb-22px font-light">
                Once you claim your page, you can get started right away by
                launching a fundraising campaign.
              </p>
              <p className="text-13px leading-17px pb-22px font-light">
                This is your{" "}
                <span className="font-bold">opportunity to create </span> a
                genuine and compelling video message that tells the story of
                <span className="font-bold">
                  your organization’s mission{" "}
                </span>{" "}
                the cause you are trying to fund and how donations will be used
                to do good.{" "}
              </p>
            </div>
            <div
              id="step-3-img"
              className="grid grid-col-2 grid-rows-2 t:pl-34px relative"
            >
              <div className=" bg-gray-200 col-span-2 row-span-2">
                {/* TODO: move images */}
              </div>
            </div>
          </div>
          <div
            id="step-4"
            className="grid grid-rows-2 t:grid-cols-2  t:grid-rows-1"
          >
            <div
              id="step-4-steps"
              className="t:col-start-2 flex flex-col pb-20px t:pl-34px"
            >
              <div className="px-51px py-9px  border-solid border-2 rounded-10px font-bold text-primary border-primary mr-auto mb-25px">
                Step 4
              </div>
              <div className="text-20px  leading-24px d:text-34px d:leading-41px font-bold mb-22px">
                Spread the word and ask your supporters to give.
              </div>
              <p className="text-13px leading-17px  d:text-16px d:leading-20-8px pb-22px font-light">
                Last but certainly not least,{" "}
                <span className="font-bold"> sharing is key. </span>
              </p>
              <p className="text-13px leading-17px d:text-16px d:leading-20-8px pb-22px font-light">
                The impact of sharing on social media, email and text messages
                cannot be understated in its ability to make your campaign
                successful. Once your campaign is created, tell everyone about
                it. The more you share, the more likely you are to
                <span className="font-bold">reach your goal. </span>{" "}
              </p>
            </div>
            <div
              id="step-4-img"
              className="t:col-start-1 t:row-start-1 grid grid-col-2 grid-rows-2  relative"
            >
              <div className=" bg-gray-200 col-span-2 row-span-2">
                {/* TODO: move images */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20px pb-44px pt-50px w-full bg-your-opportunity">
        <div id="what-nonprofit-are" className="flex flex-col gap-30px ">
          <h1 className="text-20px leading-24px d:text-34px d:leading-41px  text-center font-bold pb-20px">
            What nonprofits are saying about Move the Chain
          </h1>
          <div id="nonprofits-logos" className="pb-29px">
            <div className="bg-gray-200 text-center ">
              {/* TODO: logos */}LOGOS
            </div>
          </div>
          <p className="text-16px leading-20-8px  d:text-18px d:leading-25-2px text-center pb-40px ">
            <span className="font-bold text-primary">“</span>Move the Chain is
            helping us easily connect with new donors without having to worry
            about the back end of tax receipting - so we can focus on our
            mission.<span className="font-bold text-primary">” </span>
          </p>
          <div
            id="ceo-at-prove"
            className="pb-80px flex flex-row justify-center gap-10px "
          >
            <div className=" bg-gray-200 h-43px w-43px">
              {/* TODO: move images */}CEO
            </div>
            <div className="flex flex-col text-16px leading-20-8px  d:text-18px d:leading-24px text-center">
              <span className="font-bold text-primary">Name of individual</span>
              <span className="font-bold hidden t:block">
                - CEO at Girls Who Code
              </span>
              <span className="font-bold t:hidden">- CEO at Prove</span>
            </div>
          </div>
          <h1 className="text-24px leading-28-8px d:text-43px d:leading-51-6px  text-center font-bold pb-24px">
            Frequently Asked Questions
          </h1>
          <h1 className="text-16px leading-20-8px d:text-18px d:leading-21-6px text-center text-primary underline font-bold pb-24px">
            Have another quesiton? Visit our Full FAQ page
          </h1>
        </div>
      </div>

      <div className="px-20px pt-44px pb-50px w-full bg-nonprofit-questions ">
        <div id="questions" className="flex flex-col t:flex-row gap-30px">
          <div>
            <h1 className="text-20px leading-24px d:text-34px d:leading-41px text-white text-center t:text-left font-bold">
              Questions?
            </h1>
            <p className="text-16px leading-20-8px d:text-18px d:leading-25px text-white text-center t:text-left font-light">
              Do you have questions about Move the Chain? Reach out and we’ll be
              happy to answer your questions!
            </p>
          </div>
          <div className="mx-auto t:pl-107px d:t:pl-276px d:pr-151px">
            <Button
              type="button"
              variant="primary"
              className="px-30px py-11px w-140px h-46px rounded-10pxi "
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div id="footer" className="w-full bg-footer">
        <div className="px-20px pt-30px pb-15px mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
