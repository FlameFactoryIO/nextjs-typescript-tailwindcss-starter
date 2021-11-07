import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TopNav from '../components/TopNav';
import Button from '../components/Button';
import Input from '../components/Input';
import { useState } from "react";

// noinspection JSUnusedGlobalSymbols
export default function Login() {

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

            <TopNav className="hidden t:block" onSearch={(searchValue) => window.alert(searchValue)} />

            <div id="login"
                className="t:pt-101px pt-20px
                          flex flex-col t:flex-row items-center justify-center">

                <div className="flex flex-col t:flex-row items-center t:gap-30px t:pr-30px
                                                t:shadow-0-5-15 t:rounded-50px ">
                    <div className="t:w-473px t:max-h-578px">
                        <Image
                            src="/images/login/login.png"
                            width={473}
                            height={578}
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col t:max-w-413px">
                            <div className="t:text-13px t:leading-18px items-start t:text-gray">
                                Free of charge
                            </div>
                            <div className="t:text-38px t:leading-57px t:font-sans t:pb-64px">
                                Log in to account 🗝
                            </div>
                            <div className="t:pb-39px">
                                <img className="mx-auto absolute"
                                    src="/images/login/icon-email.svg"
                                />
                                <Input
                                    variant="white"
                                    className="max-w-423px"
                                    placeholder="Email address"
                                    icon={true}
                                    type="email"
                                    pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                />

                            </div>
                            <div className="t:pb-45px">
                                <img className="mx-auto absolute"
                                    src="/images/login/icon-password.svg"
                                />
                                <img className="absolute t:ml-367px t:mt-1"
                                    src="/images/login/icon-eye-closed.svg"
                                    onClick={isVisible}
                                />
                                <Input
                                    variant="white"
                                    className="max-w-423px"
                                    placeholder="Password"
                                    icon={true}
                                    type={typeInput}
                                />
                            </div>
                            <div className="flex flex-row items-start t:gap-20px">
                                <div className="">
                                    <Button className="t:max-w-93px text-14px leading-17px
                                                       t:max-h-46px">
                                        Login 🗝
                                    </Button>
                                </div>
                                <div className="t:text-gray-500 t:text-14px t:leading-21px items-center">
                                    Send me the magic link 🔗
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
