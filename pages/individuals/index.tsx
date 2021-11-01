import Head from "next/head";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";

// noinspection JSUnusedGlobalSymbols
export default function Individuals() {
    return (
        <div className="w-full min-w-320px">
            <Head>
                <title>Move the Chain</title>
            </Head>

            <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

            <div className="w-full bg-gradient-to-r from-blue-dark to-we-connect-charities-bg-right">
                <div
                    id="hero"
                    className="
            pt-84px pb-50px px-20px
            t:pt-80px t:pb-30px t:px-30px
            d:pt-136px d:pb-42px d:px-119px d:gap-134px
            flex flex-col t:grid grid-cols-2 t:gap-20px items-center"
                >
                    <div className="max-w-280px text-center t:text-left text-white d:w-452px flex flex-col gap-17px d:gap-37px t:items-center t:max-w-341px d:max-w-452px">
                        <div className="font-bold text-26px leading-31-2px d:text-48px d:leading-57-6px">
                            <span className=" text-primary font-black ">Move the Chain</span>{" "}
                            is a platform for the modern donor.
                        </div>
                        <div className=" text-16px leading-20-8px d:text-18px d:leading-24px font-light">
                            We offer a social giving platform, changing the way you <span className="font-bold">give back</span> to causes you care about… and all donations <span className="font-bold">are tax deductible!</span>
                            <div className="pt-10px font-bold">Receive an automated tax receipt after each donation.</div>
                        </div>
                    </div>
                    <div className="">

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
