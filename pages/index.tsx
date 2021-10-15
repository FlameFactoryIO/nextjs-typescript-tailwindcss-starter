import Head from "next/head";
import Footer from "../sections/Footer";
import Button from "../components/Button";

// noinspection JSUnusedGlobalSymbols
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-200 t:bg-red-200 d:bg-blue-200">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>Move the Chain [login]</header>

      <main>
        <div className="flex flex-col t:flex-row  pt-36px pl-13px pr-14px pb-40px t:pt-54px t:py-20px t:pb-50px d:pt-21px d:px-120px d:pb-59px bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">
          <div id="we-connect-charities" className="w-320 t:w-768px d:w-1380px mx-auto  px-20px md:pl-120  t:flex-1 flex-none t:order-1 order-2 grid grid-cols-2 grid-rows-3 gap-2">
            <div className="row-span-2 ml-auto bg-gray-300 ">
              <img className="" style={{ width: 240, height: 320 }} />
           </div>
            <div className="row-span-3 mr-auto bg-gray-100">
              <img style={{ width: 300, height: 480 }} />
            </div>
            <div className="ml-auto bg-gray-200">
              <img style={{ width: 240, height: 150 }} />
            </div>
          </div>

          <div className="t:flex-1 px-7 py-10 t:py-0 flex-none t:order-2 order-1 flex flex-col">
            <p className="text-white text-26 d:text-48 leading-31-2px d:leading-57-6px text-center t:text-left">
              We connect charities, corporations and donors.
            </p>
            <p className="text-white text-14 d:text-18 leading-18-2px d:leading-26px py-12px t:py-9px d:py-19 text-center t:text-left">
              Making a difference has never been more fun and rewarding.
            </p>
            <p className="font-hand text-26 d:text-32 leading-38px text-primary py-13px t:py-16px d:py-17">
              How you can help move the chain [ARROW]
            </p>

            <div className="flex flex-col d:flex-row space-y-20px d:space-x-41px d:space-y-0 py-29px t:py-9px d:py-52px">
              
              <div className="grid grid-cols-2 grid-rows-2 d:grid-rows-3 d:grid-cols-1">
                <p className="text-white text-16 leading-24px flex-1">Individuals</p>
                <a className="text-12 leading-18px d:text-14 d:leading-21px text-primary ">
                  Support a cause [ARROW]
                </a>
                <p className="text-white text-12 leading-18px col-span-2 d:col-span-1">
                  Donate, share and support your favorite nonprofits.
                </p>
              </div>

              <div className="grid grid-cols-2 grid-row-2 d:grid-rows-3 d:grid-cols-1">
                <p className="text-white text-16 leading-24px ">Nonprofits</p>
                <a className="text-12 leading-18px d:text-14 d:leading-21px text-primary row-span-2">
                  Claim your page [ARROW]
                </a>
                <p className="text-white text-12 leading-18px col-span-2">
                  Tell your story to raise funds.
                </p>
              </div>

              <div className="grid grid-cols-2 grid-row-2 d:grid-rows-3 d:grid-cols-1">
                <p className="text-white text-16 leading-24px">Corporations</p>
                <a className="text-12 leading-18px d:text-14 d:leading-21px text-primary row-span-2">
                  Sponsor an event [ARROW]
                </a>
                <p className="text-white text-12 leading-18px col-span-2">
                  Find nonprofits that need your support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100  ">
          <div
            id="supporting"
            className="mx-auto  grid grid-rows-3 gap-2 text-center"
          >
            <p className="text-28 leading-26px align-middle">
              Supporting more than{" "}
              <span className="font-bold text-primary">140k+</span> vetted
              nonprofit organizations.
            </p>
            <p className="text-18 font-bold leading-none">
              All donations are tax deductible.
            </p>
            <p className="text-34 leading-none">🙌</p>
          </div>
        </div>

        <div className="medio-blanco-medio-crema">
          <div className="grid grid-rows-2 gap-2 mx-auto text-center">
            <div className="mt-16 mb-6 font-bold text-43">
              What's Move the chain
            </div>
            <p className="mt-2 mx-auto text-18 max-w-800">
              Move the Chain is a social giving platform, changing the way you
              give back to causes you care about. We make it fun, transparent
              and empowering to donate to and promote causes that matter to you.
            </p>
            <div style={{ width: 520, height: 520, margin: "0 auto" }}>
              [IMAGE]
            </div>
          </div>

          <div className="grid grid-rows-3 gap-2 mx-auto text-center my-20 text-18">
            <p className="font-bold">
              From being inspired by a campaign, to challenging your circle of
              friends and family to take positive action, there are so many ways
              to make a positive impact
            </p>
            <p className=" m-auto text-16">
              "67% of americans believe social media sites are important for
              creating sustained movements for social change"
            </p>
            <div className=" flex justify-center mx-auto mt-15px">
              <Button type="button" variant="primary">
                Get to know us
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-blue-800">
          <div
            id="trending-campaigns"
            className="flex flex-col text-center mx-auto"
          >
            <h1 className="font-bold text-26 t:text-43 text-white">
              Trending Campaigns
            </h1>
            <p className="text-14 t:text-18 text-white">
              Campaigns are an opportunity for nonprofits to organize short
              burst fundraising to fund a specific need. The campaign is created
              by the nonprofit to explain the impact of your donation.{" "}
              <span className="font-bold ">#Transparencyiskey </span>
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
          </div>
        </div>

        <div className="bg-white pt-83px pb-62px">
          <div
            id="featured-nonprofits"
            className="flex flex-col mx-auto text-center"
          >
            <h1 className="font-bold text-26 t:text-43">Featured Nonprofits</h1>
            <p className="text-18 font-light t:w-max-740px">
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
              <p className="text-43 font-bold pt-20 pb-10">
                Your opportunity to make an impact
              </p>
              <p className="text-18 leading-24px">
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
                  <h1 className="text-15 leading-22-5px d:text-20 d:leading-30px font-bold">
                    Donors
                  </h1>
                  <p className="flex-1 mt-5px text-12 leading-14-4px t:text-14 t:leading-18px font-light">
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

                <div className="flex-1 t:p-15px t:pt-17px d:p-20px d:pt-25px flex flex-col rounded-24px text-white d:w-240px t:w-160px text-center t:text-left bg-gradient-to-b from-your-opportunity-card-top to-your-opportunity-card-bottom">
                  <h1 className="text-15 leading-22-5px d:text-20 d:leading-30px font-bold">
                    Nonprofits
                  </h1>
                  <p className="flex-1 mt-5px text-12 leading-14-4px t:text-14 t:leading-18px font-light">
                    Your page on the platform is a channel to promote causes,
                    raise funds, and connect with individuals and corporations
                    for support.
                  </p>
                  <Button
                    type="button"
                    variant="primary"
                    className="mt-15px rounded-10pxi px-20px mx-auto t:px-auto t:mx-0"
                  >
                    Claim your page
                  </Button>
                </div>

                <div className="flex-1 t:p-15px t:pt-17px d:p-20px d:pt-25px flex flex-col rounded-24px text-white d:w-240px t:w-160px text-center t:text-left bg-gradient-to-b from-your-opportunity-card-top to-your-opportunity-card-bottom">
                  <h1 className="text-15 leading-22-5px d:text-20 d:leading-30px font-bold">
                    Corporations
                  </h1>
                  <p className="flex-1 mt-5px text-12 leading-14-4px t:text-14 t:leading-18px font-light">
                    Find nonprofit organizations that need your support. Partner
                    with them and their supporters to aim your efforts where you
                    are needed the most.
                  </p>
                  <Button
                    type="button"
                    variant="primary"
                    className="mt-15px rounded-10pxi px-20px mx-auto t:px-auto t:mx-0"
                  >
                    Find out more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="footer" className="container">
        <Footer />
      </div>
    </div>
  );
}
