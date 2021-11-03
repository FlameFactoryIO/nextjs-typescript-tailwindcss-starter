import Head from "next/head";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import Image from "next/image";
import Button from '../../components/Button';

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
                                t:pt-82px t:pb-30px t:px-30px
                                d:pt-136px d:pb-42px d:pl-119px d:pr-104px d:gap-89px
                                flex flex-col t:grid grid-cols-2 t:gap-20px items-center"
                >
                    <div className="max-w-280px font-sans text-center text-white d:w-452px flex flex-col gap-17px
                                    t:max-w-341px t:text-left t:items-center
                                    d:max-w-452px d:pt-113px d:pb-135px d:gap-37px">
                        <div className="font-bold text-26px leading-31-2px d:text-48px d:leading-57-6px
                                        ">
                            <span className=" text-primary font-black ">Move the Chain</span>{" "}
                            is a platform for the modern donor.
                        </div>
                        <div className=" text-16px leading-20-8px d:text-18px d:leading-24px font-light
                                         ">
                            We offer a social giving platform, changing the way you <span className="font-bold">give back</span> to causes you care about… and all donations <span className="font-bold">are tax deductible!</span>
                            <div className="pt-10px font-bold">Receive an automated tax receipt after each donation.</div>
                        </div>
                    </div>
                    <div className="pt-50px t:pt-2px d:pt-6px
                                    ">
                        <div className="hidden d:block">
                            <Image
                                src="/images/individuals/people-circle-d.png"
                                width={616}
                                height={451}
                            />
                        </div>
                        <div className="hidden t:block d:hidden">
                            <Image
                                src="/images/individuals/people-circle-t.png"
                                width={344}
                                height={302.12}
                            />
                        </div>
                        <div className="t:hidden">
                            <Image src="/images/individuals/people-circle.png" width={280} height={245.91} />
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div id="change"
                    className="pt-40px px-12px
                           t:pt-39px t:pl-24px t:pr-30px
                           d:pt-70px d:pl-32px d:pr-120px
                           flex flex-col t:grid grid-cols-2 t:gap-18px d:gap-30px items-center">

                    <div>
                        <div className="font-bold text-center text-24px leading-28-8px pb-23px
                                t:pb-67px
                                d:pb-17px d:text-43px d:leading-51-6px">
                            Be the change
                        </div>
                        <div className="block t:hidden" style={{ marginBottom: -30 }}>
                            <Image
                                src="/images/individuals/link-chain.png"
                                width={295.92}
                                height={249.74}
                            />
                        </div>
                        <div className="hidden t:block d:hidden" style={{ marginBottom: -80 }}>
                            <Image
                                src="/images/individuals/link-chain-t.png"
                                width={376}
                                height={310.26}
                            />
                        </div>
                        <div className="hidden d:block" style={{ marginBottom: -50 }}>
                            <Image
                                src="/images/individuals/link-chain-d.png"
                                width={747.9}
                                height={573.72}
                            />
                        </div>
                    </div>
                    <div>

                    </div>

                </div>
                <div className="block t:hidden bg-cream h-126px text-center pt-72px">
                    {/*<Image
                        src="/images/individuals/people.png"
                        width={271.82}
                        height={36}
                    />TODO: Falta imagen agrupada */} 
                </div>
            </div>


            <div className="t:bg-gradient-to-b t:from-cream t:to-white"> {/*TODO: Falta componente de 2da columna */}
                <div id="find"
                    className="d:grid d:grid-cols-2 d:gap-30px text-center
                            pt-49px px-20px pb-50px
                            t:pt-132px t:pb-42px t:px-30px
                            ">

                    <div className="flex flex-col t:flex-row d:flex-col t:gap-24px items-center justify-center">
                        <div className="flex-1 max-w-280px items-center
                                        t:max-w-220px
                                        d:grid d:grid-cols-2 d:gap-20px d:max-w-660px d:text-left">
                            <div>
                                <div className="font-bold text-18px leading-22px
                                                d:text-28px d:leading-33px">
                                    Find a specific nonprofit or cause
                                </div>
                                <div className="font-light text-13px leading-16-9px pt-19px pb-15px
                                                t:pt-22px t:pb-7px
                                                d:max-w-320px d:text-16px d:leading-20-8px d:pt-18px d:pb-18px">
                                    Our <span className="font-bold">easy search tool</span> allows you to find nonprofits of any size in your area and/or <span className="font-bold">causes that interest</span> you.
                                </div>
                                <div className="pb-20px">
                                    <Button className="w-190px font-bold rounded-10px text-14px leading-24px py-9px px-23px">Search for nonprofit</Button>
                                </div>
                            </div>
                            <div>
                                <Image
                                    className="pt-20px pb-10px"
                                    src="/images/individuals/find-cause.png"
                                    width={280}
                                    height={210}
                                />
                                <div className="text-center t:hidden">
                                    <Image
                                        className="pb-6px "
                                        src="/images/individuals/Vector-1.png"
                                        width={100}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hidden t:hidden d:block">
                            <Image
                                className="pb-6px "
                                src="/images/individuals/Vector-1-d.png"
                                width={280}
                                height={60}
                            />
                        </div>

                        <div className="flex-1 max-w-280px 
                                        t:max-w-220px
                                        d:grid d:grid-cols-2 d:gap-20px d:max-w-660px d:text-left">
                            <div>
                                <div className="font-bold text-18px leading-22px
                                                d:text-28px d:leading-34px">
                                    Help raise funds
                                </div>
                                <div className="font-light text-13px leading-16-9px pt-19px pb-15px
                                                t:pt-21px t:pb-13px
                                                d:max-w-320px d:text-16px d:leading-20-8px d:pt-18px d:pb-18px">
                                    Campaigns allow nonprofits to tell you exactly why they need to raise funds and how <span className="font-bold">your donations will make a difference.</span>
                                </div>
                                <div className="pb-20px">
                                    <Button className="w-190px font-bold rounded-10px text-14px leading-24px py-9px px-23px">Find a campaign</Button>
                                </div>
                            </div>
                            <div>
                                <Image
                                    className="pt-20px pb-10px"
                                    src="/images/individuals/help-raise.png"
                                    width={280}
                                    height={210}
                                />
                                <div className="t:hidden">
                                    <Image
                                        className="pb-6px"
                                        src="/images/individuals/Vector-2.png"
                                        width={100}
                                        height={50}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className=" hidden t:hidden d:block">
                            <Image
                                className="pb-6px "
                                src="/images/individuals/Vector-2-d.png"
                                width={280}
                                height={60}
                            />
                        </div>

                        <div className="flex-1 max-w-280px 
                                        t:max-w-220px
                                        d:grid d:grid-cols-2 d:gap-20px d:max-w-660px d:text-left">
                            <div>
                                <div className="font-bold text-18px leading-22px
                                                d:text-28px d:leading-34px">
                                    Join a fundraiser
                                </div>
                                <div className="font-light text-13px leading-16-9px pt-19px pb-15px
                                            t:pt-21px t:pb-28px
                                            d:max-w-320px d:text-16px d:leading-20-8px d:pt-18px d:pb-18px">
                                    Companies sponsor fundraisers for specific causes. Join a fundraiser today and make your donation go further.
                                </div>
                                <div className="pb-20px">
                                    <Button className="w-190px font-bold rounded-10px text-14px leading-24px py-9px px-23px">Join a fundraiser</Button>
                                </div>
                            </div>
                            <div>
                                <Image
                                    className="pt-20px pb-10px"
                                    src="/images/individuals/join-fundraiser.png"
                                    width={280}
                                    height={210}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-blue">
                <div id="questions"
                    className="pt-44px px-21px pb-61px text-center text-white
                                t:pb-36px t:px-30px
                                flex flex-col t:grid t:grid-cols-2 t:gap-77px">
                    <div className="text-center pb-20px px-20px
                                    t:text-left t:max-w-491px">
                        <div className="font-bold text-20px leading-24px pb-20px">
                            Questions?
                        </div>
                        <div className="font-light text-16px leading-20-8px ">
                            Do you have questions about Move the Chain? Reach out and we’ll be happy to answer your questions!
                        </div>
                    </div>

                    <div className="text-center t:pt-44px">
                        <Button className="w-140px font-bold rounded-10px text-14px leading-24px py-9px px-23px">Contact Us</Button>
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
