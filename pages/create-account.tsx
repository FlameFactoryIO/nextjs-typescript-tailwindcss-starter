import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TopNav from '../components/TopNav';
import Button from '../components/Button';
import Input from '../components/Input';
import { useState } from "react";

// noinspection JSUnusedGlobalSymbols
export default function CreateAccount() {

  const [eyeVisible, setEyeVisible] = useState(false);
  const [eyeVisibleRepeat, setEyeVisibleRepeat] = useState(false);
  const [typeInput, setTypeInput] = useState("password");
  const [typeInputRepeat, setTypeInputRepeat] = useState("password");

  const isVisible = (): void => {
    if (eyeVisible) {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
    setEyeVisible(!eyeVisible);
  };

  const isVisibleRepeat = (): void => {
    if (eyeVisible) {
      setTypeInputRepeat("text");
    } else {
      setTypeInputRepeat("password");
    }
    setEyeVisibleRepeat(!eyeVisible);
  };

  return (
    <div className="w-full min-w-320px">
      <Head>
        <title>Move the Chain</title>
      </Head>

      <TopNav />

      <div id="create-account"
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
            <div className="flex flex-col t:max-w-413px">
              <div className="t:text-13px t:leading-18px items-start t:text-gray">
                Free of charge
              </div>
              <div className="t:text-38px t:leading-57px t:font-sans t:pb-64px">
                Create account 🗝
              </div>
              <div className="t:pb-39px">
                <img className="mx-auto absolute"
                     src="/images/login/icon-email.svg"
                />
                <Input
                  className="max-w-423px"
                  placeholder="info@thenobodyscats.com"
                  type="email"
                />

              </div>
              <div className="t:pb-21px">
                <img className="mx-auto absolute"
                     src="/images/login/icon-password.svg"
                />
                <img className="absolute t:ml-387px t:mt-1"
                     src="/images/login/icon-eye-closed.svg"
                     onClick={isVisible}
                />
                <Input
                  className="max-w-423px"
                  placeholder="Create password"
                  type={typeInput}
                />
              </div>
              <div className="flex flex-row t:gap-35px t:pb-31px font-light text-12px leading-25px">
                <div className="flex-row">
                  <ul>
                    <li>Min. 8 characters</li>
                    <li>Uppercase letter</li>
                  </ul>


                </div>
                <div className="flex-row">
                  <ul>
                    <li>Number</li>
                    <li>Lowercase letter</li>
                  </ul>
                </div>
              </div>

              <div className="t:pb-43px">
                <img className="mx-auto absolute"
                     src="/images/login/icon-password.svg"
                />
                <img className="absolute t:ml-387px t:mt-1"
                     src="/images/login/icon-eye-closed.svg"
                     onClick={isVisibleRepeat}
                />
                <Input
                  className="max-w-423px"
                  placeholder="Repeat password"
                  type={typeInputRepeat}
                />
              </div>
              <div className="flex flex-row items-start t:gap-20px">
                <div className="">
                  <Button className="t:max-w-155px text-14px leading-21px
                                                       t:max-h-50px">
                    Login 💫
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
