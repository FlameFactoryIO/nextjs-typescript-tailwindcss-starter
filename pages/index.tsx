import Head from "next/head";
import Footer from "../components/Footer";
import Button from "../components/Button";

// noinspection JSUnusedGlobalSymbols
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Move the Chain</title>
      </Head>

      <div className="w-full">Move the Chain [login]</div>

      <div className="w-full">

        <div className="pt-36px pl-13px pr-14px pb-40px t:pt-54px t:py-20px t:pb-50px d:pt-21px d:px-120px d:pb-59px bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">
          <div
            id="we-connect-charities"
            className="min-w-280px t:min-w-768px d:max-w-1140px flex flex-col t:flex-row mx-auto"
          >
            <div
              className="t:pl-29 t:flex-1 flex-none order-2 t:order-1 grid grid-cols-2 grid-rows-3 gap-2"
            >
              <div className=" row-span-2 ml-auto bg-gray-300 ">
                {/* <img
                  className="t:hidden  d:hidden "
                  style={{ width: 122.4, height: 163.2 }}
                />
                <img
                  className="t:block sm:hidden d:hidden "
                  style={{ width: 150, height: 220 }}
                />
                <img
                  className="sm:hidden t:hidden d:block"
                  style={{ width: 240, height: 320 }}
                /> */}
                <img style={{ width: 240, height: 320 }} />
              </div>
              <div className="row-span-3 mr-auto bg-gray-100">
                {/* <img
                  className="t:hidden  d:hidden "
                  style={{ width: 153, height: 245 }}
                />
                <img
                  className="t:block sm:hidden d:hidden "
                  style={{ width: 185, height: 340 }}
                />

                <img
                  className="sm:hidden t:hidden d:block"
                  style={{ width: 300, height: 480 }}
                /> */}
                <img style={{ width: 300, height: 480 }} />
              </div>
              <div className="ml-auto bg-gray-200">
                {/* <img
                  className="t:hidden  d:hidden "
                  style={{ width: 122.4, height: 76.5 }}
                />
                <img
                  className="t:block sm:hidden d:hidden "
                  style={{ width: 150, height: 110 }}
                />

                <img
                  className="sm:hidden t:hidden d:block"
                  style={{ width: 240, height: 150 }}
                /> */}
                <img style={{ width: 240, height: 150 }} />
              </div>
            </div>

            <div className="t:flex-1 px-20px py-10px t:py-0 flex-none t:order-2 order-1 flex flex-col">
              <p className="text-white text-26px d:text-48px leading-31-2px d:leading-57-6px text-center t:text-left">
                We connect charities, corporations and donors.
              </p>
              <p className="text-white text-14px d:text-18px leading-18-2px d:leading-26px py-12px t:py-9px d:py-19 text-center t:text-left">
                Making a difference has never been more fun and rewarding.
              </p>
              <div className="font-hand text-26px d:text-32px leading-38px text-primary py-13px t:py-16px d:py-17 flex">
                <div>How you can help move the chain</div>
                <svg className="ml-10px mt-15px" width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.746143 1.68062C3.22935 0.205261 6.53388 0.350976 8.9258 1.92789C11.2426 3.45153 12.5923 6.32835 12.3533 9.08525C12.229 10.4677 11.6868 11.8854 10.7212 12.8965C10.2123 13.4352 9.61331 13.892 8.91827 14.1581C8.25186 14.4094 7.54768 14.5124 6.83437 14.4523C5.40776 14.3321 4.08579 13.5028 3.50199 12.178C2.9261 10.863 3.09167 9.2689 3.76846 8.01903C4.53197 6.63456 5.75446 5.66061 7.09278 4.86147C8.23864 4.17635 9.46964 3.61765 10.7315 3.18841C13.3765 2.28919 16.1627 1.90979 18.9545 2.0534C21.6663 2.18825 24.3848 2.83721 26.8502 3.98984C29.3076 5.1326 31.4882 6.74941 33.3207 8.75141C35.073 10.6636 36.482 12.9164 37.4517 15.3193C38.4491 17.7973 38.9805 20.4224 39.0299 23.0938C39.0427 23.7166 39.0199 24.3356 38.9705 24.9516C38.9376 25.4164 38.4531 25.8137 37.9838 25.7443C37.4878 25.6719 37.1553 25.2572 37.1921 24.7569C37.2396 24.1586 37.2604 23.5575 37.2546 22.9534C37.2496 22.9168 37.2545 22.8723 37.2495 22.8358C37.2492 22.6736 37.2436 22.8892 37.2515 22.899C37.2327 22.8249 37.2424 22.7359 37.2413 22.6637C37.2312 22.5095 37.23 22.3563 37.2199 22.202C37.1987 21.9025 37.1775 21.603 37.1385 21.3015C37.0014 20.0886 36.7329 18.9243 36.421 17.7463C36.428 17.7651 36.4796 17.9509 36.433 17.8017C36.427 17.774 36.4121 17.7454 36.4062 17.7177C36.3873 17.6436 36.3595 17.5685 36.3406 17.4943C36.294 17.3451 36.2473 17.1959 36.1908 17.0546C36.0956 16.774 35.9914 16.4924 35.8784 16.2098C35.6612 15.6456 35.4154 15.0963 35.1499 14.5629C35.0092 14.2863 34.8685 14.0097 34.718 13.741C34.6506 13.6165 34.5753 13.4822 34.508 13.3577C34.4783 13.3005 34.4396 13.2422 34.401 13.1839C34.3773 13.1543 34.3634 13.1167 34.3396 13.0871C34.3248 13.0585 34.2327 12.9133 34.3089 13.0387C34.3773 13.1543 34.2713 12.9716 34.2476 12.9419C34.2099 12.8748 34.1634 12.8066 34.1248 12.7484C34.0406 12.6131 33.9555 12.4866 33.8703 12.3602C33.7 12.1074 33.5288 11.8635 33.3486 11.6186C32.9883 11.1288 32.5994 10.6539 32.1996 10.1958C31.9998 9.96677 31.7989 9.74663 31.5882 9.53441C31.4912 9.43373 31.3863 9.32317 31.2805 9.22151C31.232 9.17117 31.1826 9.12972 31.1341 9.07938C31.053 8.99845 31.2558 9.20079 31.1746 9.11985C31.142 9.08926 31.1014 9.04879 31.0688 9.01819C30.1884 8.18323 29.2261 7.43838 28.2087 6.78656C27.9397 6.613 27.6688 6.45725 27.3979 6.30149C27.3643 6.27979 27.3297 6.267 27.2872 6.24433C27.304 6.25518 27.4652 6.34488 27.3297 6.267C27.2704 6.23348 27.2022 6.19899 27.1429 6.16547C26.9985 6.08662 26.8532 6.01667 26.7089 5.93781C26.1375 5.65008 25.5542 5.38806 24.9494 5.1597C24.3622 4.93329 23.7633 4.7326 23.1516 4.56654C23.0034 4.52328 22.8541 4.48893 22.7059 4.44568C22.6792 4.44275 22.6446 4.42996 22.618 4.42704C22.4608 4.38281 22.6525 4.43983 22.6703 4.44178C22.5824 4.42314 22.4954 4.39561 22.4075 4.37697C22.1002 4.30729 21.7919 4.24651 21.4836 4.18573C20.2306 3.95845 18.9562 3.84591 17.6878 3.84211C17.5525 3.8453 17.3499 3.80511 17.2284 3.84585C17.2472 3.83889 17.4537 3.84349 17.2828 3.84279C17.2373 3.84682 17.2018 3.84292 17.1563 3.84696C17.0753 3.84709 16.9934 3.85613 16.9124 3.85626C16.5963 3.86668 16.2782 3.8949 15.9691 3.92409C15.333 3.98053 14.693 4.07257 14.06 4.18338C13.4358 4.29516 12.8256 4.44449 12.2222 4.61259C12.1482 4.6315 12.0643 4.65834 11.9902 4.67725C11.9902 4.67725 12.158 4.62358 12.0643 4.65834C12.0267 4.67225 11.9892 4.68615 11.9438 4.69018C11.7858 4.73593 11.6357 4.79155 11.4777 4.83729C11.1786 4.93963 10.8794 5.04197 10.5872 5.16308C9.99484 5.39543 9.40748 5.66436 8.83595 5.95303C8.5497 6.10182 8.27234 6.25158 7.99401 6.41024C7.91702 6.45585 7.84991 6.49353 7.77292 6.53914C7.63771 6.62341 7.918 6.44695 7.72456 6.56987C7.57949 6.66206 7.43441 6.75426 7.29823 6.84742C7.02587 7.03376 6.76142 7.22996 6.5128 7.44592C6.39343 7.54993 6.27405 7.65395 6.1626 7.76783C6.13202 7.80051 6.10242 7.82429 6.07185 7.85697C5.9811 7.94611 6.18428 7.73418 6.10242 7.82429C6.0403 7.89855 5.97026 7.96293 5.91703 8.03816C5.70106 8.28471 5.5276 8.55393 5.34427 8.83107C5.29007 8.9152 5.38861 8.75487 5.38861 8.75487C5.37582 8.78949 5.35414 8.82315 5.33246 8.8568C5.29798 8.92508 5.26351 8.99336 5.22904 9.06163C5.16898 9.19916 5.10796 9.34559 5.06471 9.49397C5.03913 9.56322 5.02938 9.65222 4.99491 9.7205C4.99491 9.7205 5.03414 9.52665 5.01355 9.63248C5.00965 9.66808 4.99589 9.7116 4.99199 9.7472C4.95763 9.89655 4.94107 10.0479 4.92352 10.2081C4.91573 10.2792 4.9089 10.3415 4.91 10.4137C4.9061 10.4493 4.91012 10.4948 4.90622 10.5304C4.89854 10.6827 4.91207 10.477 4.90415 10.4671C4.92498 10.5234 4.91328 10.6302 4.91535 10.6935C4.92534 10.7667 4.93435 10.8487 4.94434 10.9219C4.95433 10.995 4.97321 11.0691 4.99208 11.1432C5.00597 11.1808 5.05566 11.3844 5.01596 11.2539C4.9782 11.1057 5.05067 11.3478 5.06456 11.3854C5.09233 11.4604 5.12801 11.5454 5.16565 11.6126C5.18051 11.6412 5.18746 11.66 5.20232 11.6887C5.21023 11.6985 5.20926 11.7074 5.21718 11.7173C5.25481 11.7845 5.25481 11.7845 5.21718 11.7173C5.21023 11.6985 5.19342 11.6877 5.18648 11.6689C5.20134 11.6976 5.21718 11.7173 5.23301 11.737C5.24885 11.7568 5.26371 11.7854 5.27954 11.8052C5.31815 11.8635 5.36566 11.9227 5.41414 11.973C5.43789 12.0027 5.46261 12.0234 5.48637 12.053C5.51109 12.0737 5.62486 12.1853 5.51901 12.0836C5.41316 11.9819 5.56055 12.1152 5.59319 12.1458C5.65154 12.1882 5.70099 12.2296 5.75933 12.272C5.80976 12.3046 5.85922 12.346 5.91062 12.3697C5.94424 12.3914 6.04607 12.4475 5.91854 12.3795C5.78309 12.3017 5.93534 12.3904 5.95215 12.4012C6.07177 12.4594 6.19236 12.5086 6.31295 12.5578C6.37324 12.5824 6.43451 12.5982 6.48689 12.6129C6.51259 12.6247 6.56594 12.6306 6.59164 12.6424C6.53232 12.6089 6.39005 12.5933 6.53926 12.6276C6.82088 12.6855 7.09154 12.6791 7.36719 12.7093C7.10043 12.6801 7.31384 12.7035 7.39484 12.7033C7.45806 12.7012 7.52226 12.6903 7.58645 12.6793C7.74151 12.6602 7.88963 12.6224 8.03677 12.5935C8.18489 12.5557 7.8403 12.662 8.04664 12.5856C8.10292 12.5647 8.16808 12.5448 8.22436 12.524C8.35664 12.4664 8.48893 12.4088 8.6133 12.3414L8.70904 12.2888C8.70904 12.2888 8.55312 12.3978 8.66068 12.3196C8.72877 12.273 8.787 12.2343 8.85509 12.1877C8.98238 12.0936 9.10078 11.9985 9.21126 11.8935C9.24183 11.8608 9.38387 11.7143 9.30103 11.8133C9.20931 11.9113 9.30103 11.8133 9.32174 11.7885C9.35232 11.7558 9.37302 11.7311 9.4036 11.6984C9.50616 11.5835 9.60081 11.4588 9.69546 11.3341C9.78024 11.2173 9.8571 11.0906 9.93396 10.9639C9.99999 10.854 9.93896 11.0005 9.91033 11.0153C9.9202 11.0074 9.96649 10.9134 9.96649 10.9134C10.001 10.8451 10.0364 10.768 10.0709 10.6997C10.2009 10.4167 10.3042 10.1308 10.3906 9.83403C10.4034 9.7994 10.4083 9.7549 10.4211 9.72028C10.4525 9.59763 10.3828 9.90523 10.4054 9.7816C10.4221 9.71138 10.4378 9.65005 10.4456 9.57885C10.472 9.41963 10.4975 9.2693 10.515 9.1091C10.5316 8.9578 10.5491 8.79761 10.5479 8.64436C10.5468 8.57219 10.5536 8.50989 10.5525 8.43771C10.5564 8.40211 10.5524 8.35664 10.5563 8.32104C10.5601 8.20437 10.5666 8.55633 10.5613 8.35761C10.549 8.05905 10.5189 7.75853 10.4612 7.464C10.4323 7.31673 10.4025 7.17836 10.3727 7.03999C10.3528 6.97477 10.3418 6.91053 10.322 6.84531C10.3081 6.80776 10.3031 6.77119 10.2892 6.73364C10.2565 6.62197 10.3498 6.9204 10.2952 6.76131C10.1999 6.48068 10.0958 6.19908 9.96402 5.92345C9.90653 5.79106 9.84014 5.6577 9.77279 5.53324C9.73515 5.46607 9.69751 5.3989 9.65987 5.33173C9.63612 5.30211 9.62224 5.26456 9.59848 5.23494C9.62126 5.27346 9.69057 5.38013 9.62918 5.28334C9.45987 5.02162 9.27972 4.77672 9.08081 4.53878C8.99275 4.43907 8.90566 4.33046 8.80772 4.23867C8.783 4.21795 8.67313 4.07082 8.64548 4.0768C8.64548 4.0768 8.8087 4.22977 8.68604 4.11727C8.6534 4.08667 8.61186 4.05511 8.58019 4.01561C8.35862 3.82022 8.1183 3.63178 7.86713 3.46017C7.74155 3.37437 7.61499 3.29746 7.48844 3.22055C7.38758 3.15547 7.64167 3.30038 7.53095 3.24322C7.50525 3.2314 7.48052 3.21068 7.45482 3.19886C7.37869 3.1545 7.29269 3.11806 7.2067 3.08162C6.92398 2.95159 6.63043 2.83838 6.33492 2.74297C6.25685 2.71641 6.17779 2.69875 6.09971 2.67218C6.04734 2.65744 5.93174 2.64478 6.16098 2.6879C6.13431 2.68498 6.09971 2.67218 6.07304 2.66926C5.90604 2.63296 5.73904 2.59666 5.57107 2.56926C5.26082 2.52628 4.9496 2.4922 4.63546 2.48482C4.56335 2.48592 4.49124 2.48703 4.4201 2.47924C4.24032 2.47757 4.47443 2.47619 4.47443 2.47619C4.47443 2.47619 4.34799 2.48035 4.35689 2.48133C4.19391 2.4905 4.03982 2.50065 3.87587 2.51872C3.56574 2.55681 3.26256 2.61368 2.95743 2.68834C2.89226 2.70823 2.8182 2.72714 2.75303 2.74702C2.98216 2.70906 2.75303 2.74702 2.68787 2.7669C2.54766 2.8146 2.40649 2.87119 2.26531 2.92778C1.97309 3.04889 1.69671 3.18975 1.42726 3.34939C1.2437 3.46439 0.922612 3.43823 0.732836 3.36341C0.583501 3.24798 0.369853 3.06247 0.293483 2.85596C0.0951883 2.36589 0.313842 1.9305 0.746143 1.68062Z" fill="white"/>
                  <path d="M36.6937 20.8781C37.4648 22.5477 38.2437 24.2271 39.0147 25.8968C38.499 25.8403 37.9921 25.7848 37.4764 25.7283C38.3141 24.406 39.1508 23.0926 39.9974 21.7712C40.1167 21.5861 40.3654 21.4513 40.5758 21.4203C40.796 21.3813 41.0776 21.4392 41.2507 21.5842C41.4238 21.7293 41.5732 21.9258 41.6013 22.163C41.6283 22.4092 41.5684 22.6278 41.4373 22.8386C40.5996 24.1609 39.7629 25.4743 38.9163 26.7957C38.7527 27.0569 38.3963 27.189 38.1028 27.1569C37.7827 27.1219 37.5167 26.9216 37.3869 26.6282C36.6158 24.9586 35.8369 23.2791 35.0659 21.6095C34.8697 21.1827 35.0772 20.602 35.5195 20.4252C35.9628 20.2396 36.4827 20.4226 36.6937 20.8781Z" fill="white"/>
                </svg>
              </div>

              <div className="grid grid-cols-1 d:grid-cols-3 grid-rows-3 d:grid-rows-1">

                <div className="grid grid-cols-2 grid-rows-2 d:grid-cols-1 d:grid-rows-3">
                  <p className="text-white text-16px leading-24px d:flex-1">
                    Individuals
                  </p>

                  <a className="text-12px leading-18px d:text-14px d:leading-21px text-primary d:order-3 row-span-2 d:row-span-1">
                    Support a cause →
                  </a>

                  <p className="text-white text-12px leading-18px col-span-2 d:col-span-1">
                    Donate, share and support your favorite nonprofits.
                  </p>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 d:grid-rows-3 d:grid-cols-1">
                  <p className="text-white text-16px leading-24px d:flex-1">
                    Nonprofits
                  </p>
                  <a className="text-12px leading-18px d:text-14px d:leading-21px text-primary d:order-3 row-span-2 d:row-span-1">
                    Claim your page →
                  </a>
                  <p className="text-white text-12px leading-18px col-span-2">
                    Tell your story to raise funds.
                  </p>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 d:grid-rows-3 d:grid-cols-1">
                  <p className="text-white text-16px leading-24px d:flex-1">
                    Corporations
                  </p>
                  <a className="text-12px leading-18px d:text-14px d:leading-21px text-primary d:order-3 row-span-2 d:row-span-1">
                    Sponsor an event →
                  </a>
                  <p className="text-white text-12px leading-18px col-span-2">
                    Find nonprofits that need your support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-supporting-more-than-140k pt-15px pb-14px px-16px t:px-125px d:pt-28px d:pb-27px d:px-245px">
          <div
            id="supporting"
            className="w-280px t:w-768px d:w-1380px mx-auto grid grid-rows-3 gap-2 text-center"
          >
            <p className="text-18px leading-21-6px t:text-20px t:leading-24px d:text-28px d:leading-26px text-center">
              Supporting more than{" "}
              <span className="font-bold text-primary">140k+</span> vetted
              nonprofit organizations.
            </p>
            <p className="text-12px leading-26px  d:text-18px d:leading-26px font-bold ">
              All donations are tax deductible.
            </p>
            <p className="text-24px leading-26px d:text-34px">🙌</p>
          </div>
        </div>

        <div style={{
          backgroundImage: "linear-gradient(to bottom, #FFFFFF 50%, #FEF4F0 50%)"
        }} className="pt-44px pb-50px t:pt-44px t:pb-38px d:pt-84px d:pb-100px">

          <div className="w-280px t:w-768px d:w-1140px mx-auto grid grid-rows-2 gap-2 text-center">
            <div className="font-bold text-24px leading-28-8px d:text-43px">
              What's Move the chain
            </div>
            <p className="mt-2 mx-auto text-18px d:w-800px">
              Move the Chain is a social giving platform, changing the way you
              give back to causes you care about. We make it fun, transparent
              and empowering to donate to and promote causes that matter to you.
            </p>

            <div className="hidden d:block relative d:w-520px d:h-520px mx-auto" style={{marginTop: 93}}> {/*todo remove hidden for*/}
              <img alt="" src="/portrait-white-man-isolated_53876-40306 1.png" className="absolute w-90px h-70px rounded-full" style={{top: -35, left: 245 }} />
              <img alt="" src="/IMG_20200729_115836 1.png" className="absolute w-90px h-121px rounded-full" style={{top: 0, left: 260 }} />
              <img alt="" src="/maxresdefault 1.png" className="absolute w-120px h-104px rounded-full" />
              <div className="w-520px h-520px rounded-full border-2 flex justify-center items-center" style={{borderColor: "#FEF4F0", boxSizing: "border-box"}}>
                <div className="w-380px h-380px rounded-full border-2 flex justify-center items-center" style={{borderColor: "#FEF4F0", boxSizing: "border-box"}}>
                  <img alt="" src="/joel-muniz-KodMXENNaas-unsplash 1.png" className="w-284px h-422px rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-3 gap-2 mx-auto text-center text-18px d:w-800px">
            <p className="d:text-18px d:leading-26px font-bold">
              From being inspired by a campaign, to challenging your circle of
              friends and family to take positive action, there are so many ways
              to make a positive impact
            </p>
            <p className=" m-auto text-16px">
              <span className="text-primary-500 font-bold">“</span>
              67% of americans believe social media sites are important for
              creating sustained movements for social change...
              <span className="text-primary-500 font-bold">”</span>
            </p>
            <Button type="button" variant="primary" className="mx-auto mt-30px">
              Get to know us
            </Button>
          </div>
        </div>

        <div className="bg-we-connect-charities-bg-left pt-44px pb-50px pl-20px pr-14px t:px-30px t:pt-44px t:pb-50px d:px-120px d:py-82px">
          {/*maybe padding not working*/}
          <div
            id="trending-campaigns"
            className="w-280px t:w-768px d:w-1140px mx-auto flex flex-col text-center"
          >
            <h1 className="font-bold text-24px leading-28-8px d:text-43px d:leading-65px text-white">
              Trending Campaigns
            </h1>

            <p className="text-14px leading-18-2px d:text-18px d:leading-24px text-white pt-20px pb-23px t:pb-10px d:w-740px mx-auto">
              Campaigns are an opportunity for nonprofits to organize short
              burst fundraising to fund a specific need. The campaign is created
              by the nonprofit to explain the impact of your donation.{" "}
              <span className="font-bold ">#Transparencyiskey </span>
            </p>

            <div className="flex flex-col d:flex-row mx-auto w-286px h-489px gap-10px">
              <div className=" bg-gray-300 ">
                <img style={{ width: 261, height: 320 }} />
              </div>

              <div className="bg-looking-for-a-cause flex-1 rounded-26px pt-27px pb-11px px-15px">
                <div>
                  <h1 className="text-16px leading-20-8px t:text-24px d:text-20px d:leading-30px font-bold">
                    Looking for a cause to support?
                  </h1>
                  <p className="text-13px leading-17px d:text-16px d:leading-20px py-26px">
                    You can support campaigns by different nonprofits by
                    donating, sharing, or participating in challenges.
                  </p>
                </div>
                <Button type="button" variant="primary" className="text-13px leading-19-5px d:text-14px d:leading-20px rounded-10pxi" >
                  View all campaigns 👉
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-white pt-83px pb-62px">
          <div
            id="featured-nonprofits"
            className="w-280px t:w-768px d:w-1140px mx-auto flex flex-col text-center"
          >
            <h1 className="font-bold text-26px t:text-43px">
              Featured Nonprofits
            </h1>
            <p className="text-18px font-light t:w-max-740px">
              All nonprofits on{" "}
              <span className="font-bold ">
                Move the Chain verified 501c3 nonprofit organizations.
              </span>{" "}
              All donations to any of the nonprofits are tax deductible.
            </p>
            <div className="flex flex-col t:flex-row mx-auto gap-10">
              <div className=" bg-gray-300 flex flex-col">
                <img style={{ width: 261, height: 320 }} />
              </div>
              <div className=" bg-gray-300 flex flex-col">
                <img style={{ width: 261, height: 320 }} />
              </div>
              <div className=" bg-gray-300 flex flex-col">
                <img style={{ width: 261, height: 320 }} />
              </div>
              <div className=" bg-gray-300 flex flex-col">
                <img style={{ width: 261, height: 320 }} />
              </div>
            </div>
            <div className=" flex justify-center mx-auto mt-15px">
              <Button type="button" variant="primary">
                Discover more nonprofits
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-your-opportunity d:py-100px">
          <div
            id="your-opportunity-to-make-impact"
            className="w-280px t:w-708px d:w-1140px mx-auto  relative flex flex-col t:flex-row "
          >
            <div className="flex-none t:flex-1  t:order-1 order-2 grid grid-cols-2 grid-rows-4 gap-2">
              <div className="row-span-2 bg-red-300 rounded-2xl ">
                <img style={{ width: 240, height: 290 }} />
              </div>
              <div className="row-span-3 bg-blue-300 rounded-2xl ">
                <img style={{ width: 300, height: 460 }} />
              </div>
              <div className="bg-gray-300 rounded-2xl ">
                <img style={{ width: 240, height: 160 }} />
              </div>
              <div className="col-span-2 bg-green-300 rounded-2xl ">
                <img style={{ width: 550, height: 190 }} />
              </div>
            </div>

            <div className="t:flex-1 px-7 flex-none t:order-2 order-1 flex flex-col ">
              <p className="text-43px font-bold pt-20 pb-10">
                Your opportunity to make an impact
              </p>
              <p className="text-18px leading-24px">
                Whether you are a nonprofit looking for a{" "}
                <span className="font-bold ">quality channel</span> to spread
                their cause and raise funds, a donor looking to contribute, or a
                corporation looking to partner with nonprofits, we stand by you.{" "}
                <span className="font-bold">
                  We want to Move the Chain together. Whether you are a
                  nonprofit
                </span>
              </p>
            </div>

            <div className="static t:absolute flex flex-1 bottom-75px right-0 d:max-w-760px">
              <div className="flex flex-col t:flex-row gap-10px d:gap-20px t:gap-10px mx-auto">
                <div className="flex-1 p-15px pt-17px d:p-20px d:pt-25px flex flex-col rounded-24px text-white d:w-240px t:w-160px text-center t:text-left bg-gradient-to-b from-your-opportunity-card-top to-your-opportunity-card-bottom">
                  <h1 className="text-15px leading-22-5px d:text-20px d:leading-30px font-bold">
                    Donors
                  </h1>
                  <p className="flex-1 mt-5px text-12px leading-14-4px t:text-14px t:leading-18px font-light">
                    By donating through the Move the Chain platform, you will
                    always know how your donations make a difference for
                    different causes.
                  </p>
                  <Button
                    type="button"
                    variant="primary"
                    className="mt-15px rounded-10pxi t:px-13px d:px-20px mx-auto t:px-auto t:mx-0"
                  >
                    Support a cause
                  </Button>
                </div>

                <div className="flex-1 p-15px pt-17px d:p-20px d:pt-25px flex flex-col rounded-24px text-white d:w-240px t:w-160px text-center t:text-left bg-gradient-to-b from-your-opportunity-card-top to-your-opportunity-card-bottom">
                  <h1 className="text-15px leading-22-5px d:text-20px d:leading-30px font-bold">
                    Nonprofits
                  </h1>
                  <p className="flex-1 mt-5px text-12px leading-14-4px t:text-14px t:leading-18px font-light">
                    Your page on the platform is a channel to promote causes,
                    raise funds, and connect with individuals and corporations
                    for support.
                  </p>
                  <Button
                    type="button"
                    variant="primary"
                    className="mt-15px rounded-10pxi t:px-13px d:px-20px mx-auto t:px-auto t:mx-0"
                  >
                    Claim your page
                  </Button>
                </div>

                <div className="flex-1 p-15px pt-17px d:p-20px d:pt-25px flex flex-col rounded-24px text-white d:w-240px t:w-160px text-center t:text-left bg-gradient-to-b from-your-opportunity-card-top to-your-opportunity-card-bottom">
                  <h1 className="text-15px leading-22-5px d:text-20px d:leading-30px font-bold">
                    Corporations
                  </h1>
                  <p className="flex-1 mt-5px text-12px leading-14-4px t:text-14px t:leading-18px font-light">
                    Find nonprofit organizations that need your support. Partner
                    with them and their supporters to aim your efforts where you
                    are needed the most.
                  </p>
                  <Button
                    type="button"
                    variant="primary"
                    className="mt-15px rounded-10pxi t:px-13px d:px-20px mx-auto t:px-auto t:mx-0"
                  >
                    Find out more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="w-full bg-footer">
        <div className="w-280px t:w-708px d:w-1140px mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
