import Head from "next/head";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

// noinspection JSUnusedGlobalSymbols
export default function AboutUs() {
  return (
    <div className="w-full min-w-320px">
      <Head>
        <title>Move the Chain</title>
      </Head>

      <TopNav onSearch={(searchValue => window.alert(searchValue))} />

      <div className="w-full bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">
        <div
          id="hero"
          className="
            pt-86px pb-20px px-20px
            t:pt-98px t:pb-40px t:px-30px
            d:pt-120px d:pb-0 d:gap-0
            flex flex-col t:grid t:grid-cols-2 t:gap-30px items-center"
        >
          <div className="grid grid-cols-2 t:grid-cols-3 gap-5px d:gap-15px d:w-576px mx-auto t:mr-0 order-2 t:order-first">

            <div className="flex flex-col gap-5px d:gap-15px">
              <div className="bg-gray-100 w-133px t:w-106px d:w-182px h-133px t:h-104px d:h-180px rounded-24px" />
              <div className="bg-gray-200 w-133px t:w-106px d:w-182px h-183px t:h-144px d:h-248px rounded-24px" />
              <div className="bg-gray-300 d:w-182px h-140px hidden d:block rounded-t-24px" />
            </div>

            <div className="flex flex-col gap-5px d:gap-15px">
              <div className="bg-gray-400 w-133px t:w-106px d:w-182px h-183px t:h-144px d:h-248px rounded-24px" />
              <div className="bg-gray-500 w-133px t:w-106px d:w-182px h-133px t:h-104px d:h-180px rounded-24px" />
              <div className="bg-gray-600 w-133px t:w-106px d:w-182px h-140px hidden d:block rounded-t-24px" />
            </div>

            <div className="hidden t:flex flex-col gap-5px d:gap-15px">
              <div className="bg-gray-700 w-133px t:w-106px d:w-182px t:h-104px d:h-180px rounded-24px" />
              <div className="bg-gray-800 w-133px t:w-106px d:w-182px t:h-144px d:h-248px rounded-24px" />
              <div className="bg-gray-900 w-133px t:w-106px d:w-182px h-140px hidden d:block rounded-t-24px" />
            </div>
          </div>

          <div className="max-w-280px text-white d:w-576px flex flex-col gap-17px d:gap-20px t:items-center t:max-w-343px d:max-w-520px d:pl-45px">
            <div className="font-bold text-26px leading-31-2px d:text-48px d:leading-57-6px">
              <span className="text-primary">Move the Chain</span> connects nonprofits, corporations, and individuals. 🙌
            </div>
            <div className="text-16px leading-20px t:text-14px t:leading-18-2px d:text-18px d:leading-24px">
              A social giving platform using the power of action, peer-to-peer fundraising and social networking to make the world a better place
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid gird-cols-1 t:grid-cols-2">
        <div
          id="our-mission"
          className="
            pt-44px pb-0 pl-0 pr-20px
            t:pt-98px t:pb-0
            d:pt-67px d:pb-0 d:gap-0
          "
        >
          <div className="w-280px mx-auto t:mr-0 t:w-335px d:w-576px text-center bg-gray-100">
            <div className="font-bold text-24px leading-28-8px d:text-43px d:leading-51-6px bg-red-100">
              Our Mission
            </div>
            <div className="font-light text-13px leading-16-9px d:text-16px d:leading-24px bg-green-100">
              The mission of <span className="text-primary font-bold">Move the Chain</span> is to challenge society to evolve positively and make the world a better place. Move the Chain makes it fun, transparent and empowering to donate and promote good causes.
            </div>
            <div className="h-333px relative">
              <div className="bg-purple-200" style={{position: "absolute", height:100, width:100, left: -75, top: 25}}>
                Girls who Code
              </div>
            </div>
          </div>
        </div>
        <div
          id="our-vision"
          className="
            bg-footer
            pt-86px pb-20px px-20px
            t:pt-98px t:pb-40px t:px-30px
            d:pt-120px d:pb-0 d:gap-0
          "
        >
          <div className="w-280px mx-auto t:mr-0 t:w-576px">
            our vision
          </div>
        </div>
      </div>

      {/*<div className="w-full">*/}
      {/*</div>*/}

      {/*<div className="w-full pt-48px d:pt-77px bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">*/}
      {/*</div>*/}

      {/*<div className="w-full">*/}
      {/*</div>*/}

      {/*<div className="w-full pt-48px d:pt-77px bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">*/}
      {/*</div>*/}

      {/*<div className="w-full">*/}
      {/*</div>*/}

      {/*<div className="w-full pt-48px d:pt-77px bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">*/}
      {/*</div>*/}

      <div id="footer" className="w-full bg-footer">
        <div className="w-280px t:w-708px d:w-1140px mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
