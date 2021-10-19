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

      <div className="w-full pt-48px d:pt-77px bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">
        <div className="pt-46px px-20px pb-30px t:pt-84px t:pb-40px t:px-30px d:pt-42px d:pb-0 d:px-120px mx-auto">
          <div
            id="general"
            className="flex flex-col t:grid t:grid-cols-2 t:gap-30px t:pt-50px d:pt-42px items-center"
          >
            <div className={`grid grid-cols-2 t:grid-cols-3 gap-5px d:gap-15px ml-auto order-2 t:order-first`}>

              <div className="flex flex-col gap-5px">
                <div className="bg-gray-100 w-133px t:w-106px d:w-182px t:h-104px d:h-180px rounded-24px" />
                <div className="bg-gray-200 w-133px t:w-106px d:w-182px t:h-144px d:h-248px rounded-24px" />
                <div className="bg-gray-300 d:w-182px h-140px hidden d:block rounded-t-24px" />
              </div>

              <div className="flex flex-col gap-5px">
                <div className="bg-gray-400 w-133px t:w-106px d:w-182px t:h-144px d:h-248px rounded-24px" />
                <div className="bg-gray-500 w-133px t:w-106px d:w-182px t:h-104px d:h-180px rounded-24px" />
                <div className="bg-gray-600 w-133px t:w-106px d:w-182px h-140px hidden d:block rounded-t-24px" />
              </div>

              <div className="hidden t:flex flex-col gap-5px">
                <div className="bg-gray-700 w-133px t:w-106px d:w-182px t:h-104px d:h-180px rounded-24px" />
                <div className="bg-gray-800 w-133px t:w-106px d:w-182px t:h-144px d:h-248px rounded-24px" />
                <div className="bg-gray-900 w-133px t:w-106px d:w-182px h-140px hidden d:block rounded-t-24px" />
              </div>
            </div>

            <div className="text-white flex flex-col gap-17px d:gap-20px t:items-center d:max-w-520px">
              <div className="font-bold text-26px leading-31-2px d:text-48px d:leading-57-6px">
                <span className="text-primary">Move the Chain</span> connects nonprofits, corporations, and individuals.  🙌
              </div>
              <div className="text-16px leading-20px t:text-14px t:leading-18-2px d:text-18px d:leading-24px">
                A social giving platform using the power of action, peer-to-peer fundraising and social networking to make the world a better place
              </div>
            </div>
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
