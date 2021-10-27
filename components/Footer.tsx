import React, { FC, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";

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
    <div className="grid t:grid-cols-4 grid-cols-2">
      <div className="t:col-span-4 col-span-2 pt-30px">
        <img className="mx-auto" src="/images/mtc.svg" alt="logo" />
        <div className="mx-auto text-center text-26px t:leading-16px font-bold d:hidden mt-13px t:mt-21px d:mt-16px">
          Move the Chain
        </div>
      </div>
      <div className="col-span-2 mt-36px d:mt-48px text-center t:text-left">
        <form onSubmit={handleSubscribeSubmit}>
          <h1 className="text-15px leading-22-5px t:text-18px t:leading-27px    font-bold">
            Subscribe to our newsletter 💌
          </h1>
          <div className="mt-13px leading-17px t:text-14px t:leading-18px px t:mt-5px ">
            Never miss  a new campaign, discover nonprofit organizations, and
            learn how you can make a difference.
          </div>
          <div className="d:mt-28px flex flex-col d:flex-row d:flex-wrap">
            <div className="t:min-w-300px t:max-w-300px t:mt-0 mt-25px t:mb-20px">
              <Input
                placeholder="Email address..."
                onChange={handleEmailAddressChange}
              />
            </div>
            <div className="mx-auto t:ml-1px t:mt-0 mt-15px d:ml-5px">
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </form>
      </div>
      <div className="t:mx-auto mt-48px t:mt-48px">
        <div className="text-15px leading-22-5px t:text-18px t:leading-27px d:text-18px font-bold d:font-extrabold">
          Useful links
        </div>
        <ul className="text-13px t:text-14px  leading-25px pb-5px font-normal t:font-light d:font-normal ">
          <li>
            <a href="/create-account">Create account</a>
          </li>
          <li>
            <a href="/discover-campaigns">Discover campaigns</a>
          </li>
          <li>
            <a href="/create-challenge">Create a challenge</a>
          </li>
          <li>
            <a href="/join-challenge">Join a challenge</a>
          </li>
          <li>
            <a href="/find-match">Find your match</a>
          </li>
          <li>
            <a href="/faq">How to or FAQ</a>
          </li>
        </ul>
      </div>
      <div className="ml-20px d:mx-auto mt-48px d:mt-48px ">
        <div className="text-15px leading-22-5px t:text-18px t:leading-27px d:text-18px font-bold d:font-extrabold ">
          Contact
        </div>
        <ul className="text-13px t:text-14px leading-25px pb-5px font-normal t:font-light d:font-normal">
          <li>
            <a href="/corporation-contact">Corporation Contact</a>
          </li>
          <li>
            <a href="/customer-support">Customer Support</a>
          </li>
          <li>
            <a href="/feature-suggestions">Feature Suggestions</a>
          </li>
          <li>
            <a href="/legal-feedback">Legal Feedback</a>
          </li>
        </ul>
        <div className="flex flex-rows gap-10px t:pt-44px">
          <FaFacebook className="w-32px h-32px" />
          <FaLinkedin className="w-32px h-32px " />
          <FaInstagram className="w-32px h-32px" />
        </div>
      </div>
      <div className="t:col-span-4 col-span-2 flex t:flex-row flex-col justify-between text-center d:text-auto border-t d:mt-40px mt-24px pt-18px">
        <div className="text-13px leading-19-5px t:text-14px t:leading-21px  font-bold">
          All rights reserved © Move the Chain
        </div>
        <div className="text-14px leading-16 t:text-14px t:leading-16px flex justify-center mt-12px t:mt-0">
          <a className="pr-5px d:pr-5px" href="/privacy-policy">
            Privacy Policy
          </a>
          <div>|</div>
          <a className=" px-5px d:px-5px" href=" /terms-of-use">
            Terms of Use
          </a>
          <div>|</div>
          <a className="pl-5px d:pl-5px" href="/ccpa">
            CCPA
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
