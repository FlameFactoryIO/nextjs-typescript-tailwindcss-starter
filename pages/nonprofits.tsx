import Head from "next/head";
import Footer from "../components/Footer";
import Button from "../components/Button";

// noinspection JSUnusedGlobalSymbols
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen  py-2">
      <Head>
        <title>Nonprofits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">Move the Chain [login]</div>

      <div className="w-full">
        <div className="px-20px pt-44px pb-330px bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">
          <div id="our-purpose" className="flex flex-col  mx-auto relative">
            <p className="text-26px text-white text-center leading-31-2px">
              Our purpose at{" "}
              <span className="font-bold text-primary">Move the Chain</span> is
              to offer a platform to help promote your cause and raise funds.
            </p>
            <p className="text-16px pt-21px text-white text-center leading-20-8px">
              We offer a{" "}
              <span className="font-bold text-white">free platform</span> for
              your nonprofits allowing you to raise funds digitally, improve
              your online presence and expand your network to a broader
              audience.
            </p>
            <div className="absolute "></div>
          </div>
        </div>
      </div>

      <div className="px-20px pt-50px pb-62px">
        <div
          id="why-move-the-chain"
          className="grid grid-rows-5 space-y-4px mx-auto"
        >
          <div>
            <img className="mx-auto pb-20px" src="/mtc.svg" alt="logo" />
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
            <p className="mx-auto text-center text-13px leading-17px">
              Using video based campaigns, explain why you are raising funds and
              connect with current and new donors in a genuine and transparent
              way.
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
            <p className="mx-auto text-center text-13px leading-17px">
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
            <p className="mx-auto text-center text-13px leading-17px">
              Leverage our platform to raise funds and bring awareness to your
              cause. Connect with donors and corporations easiler than ever
              before.
            </p>
          </div>
          <div>
            <div className="flex flex-col">
              <p className="font-hand text-primary mx-auto text-center text-46px leading-38px">
              Claim your page
              </p>
              <img
                className="mx-auto pb-13px"
                src="/images/social-media.svg"
                alt="logo"
              />
            </div>
            <div className="mx-auto pb-8px text-center text-16px font-bold leading-24px">
              Boost your presence
            </div>
            <p className="mx-auto text-center text-13px leading-17px">
              Leverage our platform to raise funds and bring awareness to your
              cause. Connect with donors and corporations easiler than ever
              before.
            </p>
          </div>
        </div>
      </div>

      <div id="footer" className="w-full bg-footer">
        <div className="px-20px pt-30px mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
