import React, { FC, useEffect, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Link from "next/link";
import { MoveTheChain } from "./svg/MoveTheChain";
import { subscribeToNewsletter } from "../mtc-api/subscribeToNewsletter";
import { Facebook } from "./svg/Facebook";
import { LinkedIn } from "./svg/LinkedIn";
import { Instagram } from "./svg/Instagram";
import { CheckmarkCircleOutline } from "./svg/CheckmarkCircleOutline";

const Footer: FC = () => {
  const [subscribeState, setSubscribeState] = useState<{loading?: boolean, success?: boolean, error?: Error}>();
  const timeoutRef = useRef(null);
  const [emailAddress, setEmailAddress] = useState<string>("");

  const handleEmailAddressChange = (e: string) => {
    setEmailAddress(e);
    setSubscribeState({});
  };

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();

    console.debug("@@@", 1)
    setSubscribeState({ loading: true });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    try {
      await subscribeToNewsletter(emailAddress)
      console.debug("@@@", 2)
      setSubscribeState({
        success: true,
      });
      timeoutRef.current = setTimeout(() => {
        setSubscribeState(undefined);
        setEmailAddress("");
        timeoutRef.current = null;
        console.debug("@@@", 4)
      }, 3000);
    } catch (e) {
      console.debug("@@@", 3)
      setSubscribeState({
        error: e,
      });
    }
  };

  return (
    <div
      className="
      max-w-500px t:max-w-708px d:max-w-1140px
      mx-auto
      flex flex-col items-center
      pt-30px px-20px pb-16px
      t:pt-50px t:pb-14px t:px-0"
    >
      <MoveTheChain className="mx-auto"/>
      <div className="mx-auto text-26px t:leading-16px font-bold  mt-13px t:mt-21px d:mt-16px">
        Move the Chain
      </div>
      <div className="flex flex-col t:grid t:grid-cols-2 t:gap-39px d:gap-229px t:w-full">
        <div className="mt-36px d:mt-48px text-center t:text-left">
          <form onSubmit={handleSubscribeSubmit}>
            <h1 className="text-15px leading-22-5px t:text-18px t:leading-27px font-bold">
              Subscribe to our newsletter 💌
            </h1>
            <div className="mt-13px t:mt-5px leading-16-9px t:text-14px t:leading-18px  t:max-w-420px">
              Never miss a new campaign, discover nonprofit organizations, and
              learn how you can make a difference.
            </div>
            <div className="t:mt-18px mt-25px d:mt-28px flex flex-col d:flex-row gap-10px">
              <Input
                className="
                  bg-white border-1px border-solid border-input
                  "
                placeholder="Email address..."
                value={emailAddress}
                onChange={handleEmailAddressChange}
                disabled={subscribeState?.loading || subscribeState?.success}
              />
              {subscribeState?.error && (
                <div className="d:hidden font-light text-center text-red-500">{subscribeState?.error}</div>
              )}
              {subscribeState?.success ? (
                <div className="t:self-start d:self-center mx-auto flex gap-5px items-center text-green-700">
                  <CheckmarkCircleOutline className="h-24px w-24px" />
                  <div className="whitespace-nowrap">Thank you!</div>
                </div>
              ):(
                <Button
                  className="t:self-start d:w-auto"
                  type="submit"
                  disabled={subscribeState?.loading || subscribeState?.success}
                >
                  Subscribe
                </Button>
              )}
            </div>
            {subscribeState?.error && (
              <div className="hidden d:block font-light text-red-500">{subscribeState?.error}</div>
            )}
          </form>
        </div>
        <div className="grid grid-cols-2 w-full t:ml-0 gap-20px">
          <div className="mt-48px t:mt-48px">
            <div
              className="text-15px leading-22-5px t:text-18px t:leading-27px d:text-18px font-bold d:font-extrabold flex items-center whitespace-nowrap">
              Useful links
            </div>
            <ul className="text-13px t:text-14px  leading-25px pb-5px font-light t:font-light d:font-normal ">
              <li>
                <Link href="/about-us">About</Link>
              </li>
              <li>
                <Link href="/individuals">Individuals</Link>
              </li>
              <li>
                <Link href="/nonprofits">Nonprofits</Link>
              </li>
              <li>
                <Link href="/corporations">Corporations</Link>
              </li>
              <li className="hidden">
                <Link href="/">Find your match</Link>
              </li>
              <li className="hidden">
                <Link href="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="mx-0 d:mx-auto mt-48px d:mt-48px ">
            <div className="text-15px leading-22-5px t:text-18px t:leading-27px d:text-18px font-bold d:font-extrabold">
              Contact
            </div>
            <ul className="text-13px t:text-14px leading-25px pb-5px font-light t:font-light d:font-normal">
              <li className="hidden">
                <Link href="/corporation-contact">Corporations Contact</Link>
              </li>
              <li>
                <Link href="mailto:support@movethechain.com?subject=Customer support">Customer Support</Link>
              </li>
              <li>
                <Link href="mailto:support@movethechain.com?subject=Feature suggestion">Feature Suggestions</Link>
              </li>
              <li>
                <Link href="mailto:legal@movethechain.com">Legal Feedback</Link>
              </li>
            </ul>
            <div className="flex flex-rows gap-10px t:pt-44px">
              <Link href="https://www.facebook.com/movethechainapp/" passHref>
                <a className="w-32px h-32px">
                  <Facebook/>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/move-the-chain/" passHref>
                <a className="w-32px h-32px">
                  <LinkedIn />
                </a>
              </Link>
              <Link href="https://www.instagram.com/movethechain/" passHref>
                <a className="w-32px h-32px">
                  <Instagram />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="t:w-full">
        <div className=" flex flex-col t:flex-row   justify-between text-center  border-t d:mt-40px mt-24px pt-18px">
          <div className="text-12px leading-19-5px t:text-14px t:leading-21px font-bold">
            All rights reserved © Move the Chain
          </div>
          <div className="text-13px leading-16 t:text-14px t:leading-16px flex gap-5px justify-center mt-12px t:mt-0">
            <Link href="/privacy-policy" passHref>
              <a>Privacy Policy</a>
            </Link>
            <div>|</div>
            <Link href="/terms-of-use" passHref>
              <a>Terms of Use</a>
            </Link>
            <div>|</div>
            <Link href="/ccpa" passHref>
              <a>CCPA</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
