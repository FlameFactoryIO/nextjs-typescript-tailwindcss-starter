import React, { FC, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";
import Link from "next/link";

const Footer: FC = () => {
  const [emailAddress, setEmailAddress] = useState<string>("");

  const handleEmailAddressChange = (e: string) => {
    setEmailAddress(e);
  };

  const handleSubscribeSubmit = () => {
    // todo(hmassad): subscribe to newsletter in backend
    window.alert(`subscribed ${emailAddress}`);
  };

  return (
    <div
      className="w-full m-0 p-0 min-w-280px t:max-w-768px d:max-w-1140px
      flex flex-col items-center
      pt-30px px-20px pb-16px
      t:pt-50px t:pb-14px t:px-0"
    >
      <div>
        <img alt="" className="mx-auto" src="/images/mtc.svg"/>
        <div className="mx-auto text-center text-26px t:leading-16px font-bold  mt-13px t:mt-21px d:mt-16px">
          Move the Chain
        </div>
      </div>
      <div className="flex flex-col t:grid t:grid-cols-2 t:gap-39px d:gap-229px t:w-full">
        <div className="mt-36px d:mt-48px text-center t:text-left">
          <form onSubmit={handleSubscribeSubmit}>
            <h1 className="text-15px leading-22-5px t:text-18px t:leading-27px font-bold">
              Subscribe to our newsletter 💌
            </h1>
            <div className="mt-13px leading-16-9px t:text-14px t:leading-18px  t:mt-5px t:max-w-420px
            t:pb-18px">
              Never miss a new campaign, discover nonprofit organizations, and
              learn how you can make a difference.
            </div>
            <div className="d:mt-28px flex flex-col d:flex-row d:flex-wrap">
              <Input
                className="
                  bg-white border-1px border-solid border-input
                  t:min-w-300px t:max-w-300px t:mt-0 mt-25px t:mb-20px d:mb-0"
                placeholder="Email address..."
                onChange={handleEmailAddressChange}
              />
              <Button
                className="mx-auto t:ml-1px t:mt-0 mt-15px d:ml-5px"
                type="submit"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-2  w-full t:ml-0">
          <div className="mx-0  mt-48px t:mt-48px">
            <div
              className="text-15px leading-22-5px t:text-18px t:leading-27px d:text-18px font-bold d:font-extrabold  flex items-center whitespace-nowrap">
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
              <li>
                <Link href="/nonprofits/search">Find your match</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="mx-0 d:mx-auto mt-48px d:mt-48px ">
            <div className="text-15px leading-22-5px t:text-18px t:leading-27px d:text-18px font-bold d:font-extrabold">
              Contact
            </div>
            <ul className="text-13px t:text-14px leading-25px pb-5px font-light t:font-light d:font-normal">
              <li>
                <Link href="/corporation-contact">Corporation Contact</Link>
              </li>
              <li>
                <Link href="/customer-support">Customer Support</Link>
              </li>
              <li>
                <Link href="/feature-suggestions">Feature Suggestions</Link>
              </li>
              <li>
                <Link href="/legal-feedback">Legal Feedback</Link>
              </li>
            </ul>
            <div className="flex flex-rows gap-10px t:pt-44px">
              <FaFacebook className="w-32px h-32px"/>
              <FaLinkedin className="w-32px h-32px "/>
              <FaInstagram className="w-32px h-32px"/>
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
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
            <div>|</div>
            <Link href="/terms-of-use">
              <a>Terms of Use</a>
            </Link>
            <div>|</div>
            <Link href="/ccpa">
              <a>CCPA</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
