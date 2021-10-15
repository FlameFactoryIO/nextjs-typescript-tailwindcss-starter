import Head from "next/head";
import Footer from "../components/Footer";
import Button from "../components/Button";

// noinspection JSUnusedGlobalSymbols
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">Move the Chain [login]</div>

      <div className="w-full">

        <div className="pt-36px pl-13px pr-14px pb-40px t:pt-54px t:py-20px t:pb-50px d:pt-21px d:px-120px d:pb-59px bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">
          <div
            id="we-connect-charities"
            className="w-280px t:w-768px d:w-1140px flex flex-col t:flex-row mx-auto"
          >
            <div
              className="t:pl-29 t:flex-1 flex-none t:order-1 order-2 grid grid-cols-2 grid-rows-3 gap-2"
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
              <p className="font-hand text-26px d:text-32px leading-38px text-primary py-13px t:py-16px d:py-17">
                How you can help move the chain [ARROW]
              </p>

              <div className="flex flex-col d:flex-row space-y-20px d:space-x-41px d:space-y-0 py-29px t:py-9px d:py-52px">

                <div className="grid grid-cols-2 grid-rows-2 d:grid-rows-3 d:grid-cols-1">
                  <p className="text-white text-16px leading-24px d:flex-1">
                    Individuals
                  </p>
                  <a className="text-12px leading-18px d:text-14px d:leading-21px text-primary d:order-3 row-span-2 d:row-span-1">
                    Support a cause [ARROW]
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
                    Claim your page [ARROW]
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
                    Sponsor an event [ARROW]
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
        }} className="d:pt-84px d:pb-100px">

          <div className="w-280px t:w-768px d:w-1140px mx-auto grid grid-rows-2 gap-2 text-center">
            <div className="mt-16 mb-6 font-bold text-43px">
              What's Move the chain
            </div>
            <p className="mt-2 mx-auto text-18px d:w-800px">
              Move the Chain is a social giving platform, changing the way you
              give back to causes you care about. We make it fun, transparent
              and empowering to donate to and promote causes that matter to you.
            </p>
            <div className="d:w-520px d:h-520px mx-auto">
              [IMAGE]
            </div>
          </div>

          <div className="grid grid-rows-3 gap-2 mx-auto text-center text-18px d:w-800px">
            <p className="d:text-18px d:leading-26px font-bold h-70px">
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
