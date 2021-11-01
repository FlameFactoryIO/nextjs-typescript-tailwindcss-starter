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

            <div id="change"
                className="pt-40px px-12px
                           t:pt-39px t:pl-24px t:pr-30px
                           d:pt-70px d:pl-32px d:pr-120px
                           flex flex-col t:grid grid-cols-2 t:gap-18px d:gap-30px items-center">

                <div className="font-bold text-center text-24px leading-28-8px pb-23px
                                t:pb-67px
                                d:pb-17px">
                    Be the change
                </div>


            </div>

            <div className="t:bg-gradient-to-b t:from-cream t:to-white">
                <div id="find"
                    className="
                            pt-49px px-20px pb-50px
                            flex flex-col items-center">

                    <div className="flex-1 max-w-280px">
                        <div className=" text-center font-bold text-18px leading-22px">
                            Find a specific nonprofit or cause
                        </div>
                        <div className=" text-center font-light text-13px leading-16-9px pt-19px pb-15px">
                            Our easy search tool allows you to find nonprofits of any size in your area and/or causes that interest you.
                        </div>
                        <div className="text-center pb-20px">
                            <Button className="w-190px font-bold rounded-10px text-14px leading-24px py-9px px-23px">Search for nonprofit</Button>
                        </div>
                        <Image
                            className="pt-20px pb-10px"
                            src="/images/individuals/find-cause.png"
                            width={280}
                            height={210}
                        />
                        <div className="text-center">
                            <Image
                                className="pb-6px"
                                src="/images/individuals/Vector-1.png"
                                width={100}
                                height={50}
                            />
                        </div>

                    </div>
                    <div className="flex-2 max-w-280px">
                        <div className=" text-center font-bold text-18px leading-22px">
                            Help raise funds
                        </div>
                        <div className=" text-center font-light text-13px leading-16-9px pt-19px pb-15px">
                            Campaigns allow nonprofits to tell you exactly why they need to raise funds and how your donations will make a difference.
                        </div>
                        <div className="text-center pb-20px">
                            <Button className="w-190px font-bold rounded-10px text-14px leading-24px py-9px px-23px">Find a campaign</Button>
                        </div>
                        <Image
                            className="pt-20px pb-10px"
                            src="/images/individuals/help-raise.png"
                            width={280}
                            height={210}
                        />
                        <div className="text-center">
                            <Image
                                className="pb-6px"
                                src="/images/individuals/Vector-2.png"
                                width={100}
                                height={50}
                            />
                        </div>

                    </div>
                    <div className="flex-3 max-w-280px">
                        <div className=" text-center font-bold text-18px leading-22px">
                            Join a fundraiser
                        </div>
                        <div className=" text-center font-light text-13px leading-16-9px pt-19px pb-15px">
                            Companies sponsor fundraisers for specific causes. Join a fundraiser today and make your donation go further.
                        </div>
                        <div className="text-center pb-20px">
                            <Button className="w-190px font-bold rounded-10px text-14px leading-24px py-9px px-23px">Join a fundraiser</Button>
                        </div>
                        <Image
                            className="pt-20px"
                            src="/images/individuals/help-raise.png"
                            width={280}
                            height={210}
                        />
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
