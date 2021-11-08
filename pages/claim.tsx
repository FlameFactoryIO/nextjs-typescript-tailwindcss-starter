import Head from "next/head";
import Image from "next/image";
import TopNav from '../components/TopNav';
import Button from '../components/Button';
import Input from '../components/Input';
import { useState } from "react";

// noinspection JSUnusedGlobalSymbols
export default function Claim() {

    const [eyeVisible, setEyeVisible] = useState(false);
    const [typeInput, setTypeInput] = useState("password");

    const isVisible = (): void => {
        if (eyeVisible) {
            setTypeInput("text");
        } else {
            setTypeInput("password");
        }
        setEyeVisible(!eyeVisible);
    };


    return (
        <div className="w-full min-w-320px">
            <Head>
                <title>Move the Chain</title>
            </Head>

            <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

            <div id="claim"
                className="t:pt-101px
                          flex flex-col t:flex-row items-center justify-center">

                <div className="flex flex-col t:flex-row items-center t:gap-30px t:pr-30px
                                                t:shadow-0-5-15 t:rounded-50px ">
                    <div className="t:w-t:w-473px t:max-h-578px">
                        <Image
                            src="/images/login/login.png"
                            width={473}
                            height={578}
                        />
                    </div>
                    <div className="t:w-413px">
                        <div className="flex flex-col t:w-413px">
                            <div className="t:text-13px t:leading-18px items-start t:text-gray">
                                Free of charge
                            </div>
                            <div className="t:text-38px t:leading-57px t:font-sans t:pb-17px font-bold">
                                Claim your page
                            </div>
                            <div className="t:text-14px t:leading-17px t:font-sans t:pb-64px">
                                Already have a claimed page? Log in.
                            </div>
                            <div className="t:pb-39px">
                                <img className="mx-auto absolute t:mt-1"
                                    src="/images/login/icon-name.svg"
                                />
                                <Input
                                    className="max-w-413px"
                                    placeholder="Your first and last name"
                                    type="text"
                                />

                            </div>
                            <div className="t:pb-39px">
                                <img className="mx-auto absolute t:mt-1"
                                    src="/images/login/icon-role.svg"
                                />
                                <Input
                                    className="max-w-413px"
                                    placeholder="Your role in the organization"
                                    type="text"
                                />

                            </div>
                            <div className="t:pb-45px">
                                <img className="mx-auto absolute t:mt-1"
                                    src="/images/login/icon-password.svg"
                                />
                                <img className="absolute t:ml-387px t:mt-1"
                                    src="/images/login/icon-eye-closed.svg"
                                    onClick={isVisible}
                                />
                                <Input
                                    className="max-w-413px"
                                    placeholder="Password"
                                    type={typeInput}
                                />


                            </div>
                            <div className="flex flex-row items-center t:gap-20px">
                                <div className="">
                                    <Button className="t:max-w-155px text-14px leading-17px
                                                       t:max-h-50px">
                                        Submit 💫
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
