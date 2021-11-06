import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TopNav from '../components/TopNav';
import Button from '../components/Button';

// noinspection JSUnusedGlobalSymbols
export default function CreateAccount() {
    return (
        <div className="w-full min-w-320px">
            <Head>
                <title>Move the Chain</title>
            </Head>

            <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

            <div id="login"
                className="t:pt-101px                   
                          flex flex-col t:flex-row items-center justify-center">

                <div className="flex flex-col t:flex-row items-center t:gap-30px
                                t:max-w-946px
                                                t:shadow-0-5-15 t:rounded-50px ">
                    <div className="t:max-w-473px t:max-h-626px">
                        <Image
                            src="/images/login/login.png"
                            width={473}
                            height={626}
                        />
                    </div>
                    <div className="t:w-413px">
                        <div className="flex flex-col">
                            <div className="t:text-13px t:leading-18px items-start t:text-gray">
                                Free of charge
                            </div>
                            <div className="t:text-38px t:leading-57px t:font-sans t:pb-64px">
                                Create account 🗝
                            </div>
                            <div className="">
                            </div>
                            <div className="">

                            </div>
                            <div className="flex flex-row items-start">
                                <div className="">
                                    <Button className="t:max-w-93px font-bold">
                                        Login
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
