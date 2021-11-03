import Head from "next/head";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import TopNav from "../../components/TopNav";
import Input from "../../components/Input";
import { useState } from "react";
import { useSearchNonprofit } from "../../mtc-api/nonprofit/useSearchNonprofit";

// noinspection JSUnusedGlobalSymbols
export default function NonprofitsSearch() {

  const [term, setTerm] = useState("");
  const { data: nonprofits, isFetching } = useSearchNonprofit({
    search: term,
    country_code: 'US',
    page: 1,
    pageSize: 20,
    options: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  });

  return (
    <div className="w-full min-w-320px">
      <Head>
        <title>Discover more nonprofits</title>
      </Head>

      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

      <div
        className="px-20px pt-82px
          t:pt-104px t:px-30px t:pb-50px
          d:pt-148px d:pr-50px d:pb-100px
        "
      >
        <div>
          Discover more nonprofits
        </div>
        <div>
          All nonprofits on Move the Chain verified 501c3 nonprofit organizations. All donations to any of the nonprofits are tax deductible.
        </div>
        <div className="flex flex-col t:flex-row gap-5px items-center">
          <Input className="min-w-280px" placeholder="Search for a nonprofit or keyword" onChange={(value) => setTerm(value)} />
          <Button className="w-120px">Search</Button>
        </div>
      </div>

      <div className="flex flex-col d:flex-row">
        <div id="filters" className="grid grid-cols-1 t:grid-cols-3 d:grid-cols-1 d:w-270px">
          <div>Filter 1</div>
          <div>Filter 2</div>
          <div>Filter 3</div>
          <div>Filter 4</div>
          <Button className="t:col-span-3 d:col-span-1 mx-auto rounded-24pxi text-12px leading-18px flex items-center gap-5px">
            Load 9 More
            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.50002 4.3301L9.00628 0.823853L10.0079 1.82544L5.50002 6.33327L0.992188 1.82544L1.99377 0.823853L5.50002 4.3301Z" fill="white"/>
            </svg>
          </Button>
        </div>
        <div id="results" className="flex-1 grid t:grid-cols-2 d:grid-cols-3">
RESULTS
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
