import Head from "next/head";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import Image from "next/image";
import Button from '../../components/Button';
import Questions from '../../components/Questions';

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
            pt-100px pb-34px px-20px
            t:px-30px t:pt-82px t:pb-37px
            d:pt-136px d:px-105px d:pb-43px
            flex flex-col t:grid t:grid-cols-2 gap-32px t:gap-19px d:gap-47px items-center"
                >
                    <div
                        className="max-w-280px t:max-w-341px d:max-w-494px items-center t:items-start
                          flex flex-col text-center t:text-left mx-auto t:mr-0
                          text-white t:order-first
                          "
                    >
                        <div
                            className="font-bold text-26px leading-31-2px d:text-48px d:leading-57-6px
                            pb-22px t:pb-20px d:pb-28px d:pt-43px
                            shadow-0-2-5"
                        >
                            <span className=" text-primary font-black ">Move the Chain</span>{" "}
                            is a platform for the modern donor.
                        </div>
                        <div
                            className="max-w-279px t:max-w-343px d:max-w-494px
                            text-16px d:text-18px leading-24px d:leading-24px font-light"
                        >
                            We offer a social giving platform, changing the way you <span className="font-bold">give back</span> to causes you care about… and all donations <span className="font-bold">are tax deductible!</span>
                            <div className="pt-10px font-bold">Receive an automated tax receipt after each donation.</div>
                        </div>
                    </div>

                    <div className="w-280px  t:w-345px d:w-615px">
                        <div aria-hidden className="t:flex-1">
                            <Image
                                alt=""
                                src="/images/individuals/people-circle.png"
                                width={615}
                                height={541}
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="be-the-change"
                className="bg-white pt-50px px-12px
                           t:pt-39px t:pl-24px t:pr-30px
                           d:pt-70px d:pl-32px d:pr-120px
                           flex flex-col  items-center">
                <div className="flex flex-col items-center t:flex-row t:gap-18px d:gap-30px">
                    <div className="flex-1 max-w-280px t:max-w-368px d:max-w-748px">
                        <div className="flex flex-col items-center">
                            <div className="max-w-176px font-bold text-center text-24px leading-28-8px pb-21px
                                t:pb-32px
                                d:text-43px d:leading-51-6px d:max-w-315px d:pb-46px">
                                Be the change
                            </div>
                            <Image
                                src="/images/individuals/link-chain-d.png"
                                width={748}
                                height={578}
                            />
                        </div>

                    </div>
                    <div className="bg-cream t:bg-white">
                        <div className="flex flex-col items-center w-320px d:w-450px h-153px">
                            <div className=" d:max-w-356px t:max-w-252 max-w-274px
                                                d:max-h-130px max-h-80px
                                                pt-72px t:pt-0">
                                <Image
                                    src="/images/individuals/people-are-raising.png"
                                    width={356}
                                    height={130}
                                />

                            </div>

                        </div>
                    </div>

                </div>
            </div>



            <div className="t:bg-gradient-to-b t:from-cream t:to-white">
                <div id="find"
                    className="text-center
                            pt-49px px-20px pb-50px
                            t:pt-132px t:pb-42px t:px-30px
                            d:pt-161px d:pb-80px d:px-120px
                            ">

                    <div className="flex flex-col t:flex-row d:flex-col t:gap-24px items-center justify-center">
                        <div className="flex items-start">

                            <div className="flex-1 max-w-280px d:items-start
                                        t:max-w-220px
                                        flex flex-col d:gap-20px d:max-w-660px d:text-left">
                                <div className=" flex-1 d:max-w-320px d:max-h-240px">
                                    <div className="font-bold text-18px leading-21-6px
                                                d:text-28px d:leading-33px  d:pt-3px">
                                        Find a specific nonprofit or cause
                                    </div>
                                    <div className="font-light text-13px leading-16-9px pt-19px pb-15px
                                                t:pt-22px t:pb-7px
                                                d:text-16px d:leading-20-8px d:pt-18px d:pb-18px">
                                        Our <span className="font-bold">easy search tool</span> allows you to find nonprofits of any size in your area and/or <span className="font-bold">causes that interest</span> you.
                                    </div>
                                    <div className="pb-20px">
                                        <Button className="w-190px font-bold rounded-10px text-14px leading-24px py-9px px-23px">Search for nonprofit</Button>
                                    </div>
                                </div>
                                <div className=" flex-1 max-w-280px max-h-210px
                                                t:max-w-220 t:max-h-166
                                                d:max-w-320px d:max-h-240">
                                    <Image
                                        src="/images/individuals/find-cause.png"
                                        width={320}
                                        height={240}
                                    />
                                </div>

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
                                className="pb-10px "
                                src="/images/individuals/Vector-1-d.png"
                                width={280}
                                height={60}
                            />
                        </div>

                        <div className="flex-1 max-w-280px 
                                        t:max-w-220px
                                        d:grid d:grid-cols-2 d:gap-20px d:max-w-660px d:text-left">
                            <div className="d:max-w-320px d:max-h-240px d:pt-24px">
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
                                <div className="max-w-280px max-h-210px
                                                t:max-w-220 t:max-h-166
                                                d:max-w-320px d:max-h-240">
                                    <Image
                                        src="/images/individuals/help-raise.png"
                                        width={320}
                                        height={240}
                                    />
                                </div>
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
                                className="pb-10px "
                                src="/images/individuals/Vector-2-d.png"
                                width={280}
                                height={60}
                            />
                        </div>

                        <div className="flex-1 max-w-280px 
                                        t:max-w-220px
                                        d:grid d:grid-cols-2 d:gap-20px d:max-w-660px d:text-left">
                            <div className="d:max-w-320px d:max-h-240px ">
                                <div className="font-bold text-18px leading-22px
                                                d:text-28px d:leading-33-6px d:pt-30px">
                                    Join a fundraiser
                                </div>
                                <div className="font-light text-13px leading-16-9px pt-19px pb-15px
                                            t:pt-21px t:pb-28px
                                            d:max-w-320px d:text-16px d:leading-20-8px d:pt-18px d:pb-18px">
                                    Companies sponsor fundraisers for specific causes. Join a fundraiser today and make your donation go further.
                                </div>
                                <div className="pb-20px">
                                    <Button className="w-190px font-bold rounded-10px text-14px leading-24px">Join a fundraiser</Button>
                                </div>
                            </div>
                            <div className="max-w-280px max-h-210px
                                                t:max-w-220 t:max-h-166
                                                d:max-w-320px d:max-h-240">
                                <Image
                                    src="/images/individuals/join-fundraiser.png"
                                    width={320}
                                    height={240}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="questions" className="w-full bg-blue-questions">
                <div className="w-280px t:w-768px d:w-1380px mx-auto items-center">
                    <Questions />
                </div>
            </div>

            <div id="footer" className="w-full bg-footer">
                <div className="w-280px t:w-708px d:w-1380px mx-auto">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
