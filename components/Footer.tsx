import {FC, useState} from "react";
import Button from "./Button";
import Input from "./Input";

const Footer: FC = () => {
  const [emailAddress, setEmailAddress] = useState<string>("");

  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  }

  const handleSubscribeSubmit = () => {
    // todo(hmassad): subscribe to newsletter in backend
    window.alert(`subscribed ${emailAddress}`);
  }

  return (
    <div className="grid d:grid-cols-4 grid-cols-2">
      <div className="d:col-span-4 col-span-2 pt-30px">
        <img className="mx-auto" src="/mtc.svg" alt="logo" />
        <div className="mx-auto text-center text-26px font-bold d:invisible">Move the Chain</div>
      </div>
      <div className="col-span-2 mt-36px d:mt-48px text-center d:text-left">
        <form onSubmit={handleSubscribeSubmit}>
          <h1 className="text-18px font-bold">Subscribe to our newsletter 💌</h1>
          <div className="d:mt-5px mt-12px">Never miss a new campaign, discover nonprofit organizations, and learn how you can make a difference.</div>
          <div className="d:mt-28px flex flex-col d:flex-row d:flex-wrap">
            <div className="d:min-w-300px d:max-w-300px d:mt-0 mt-25px">
              <Input placeholder="Email address..." onChange={handleEmailAddressChange} />
            </div>
            <div className="mx-auto d:ml-1 d:mt-0 mt-15px">
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </form>
      </div>
      <div className="d:mx-auto mt-48px d:mt-48px">
        <div className="text-14px font-bold">Useful links</div>
        <ul className="text-12px leading-128">
          <li><a href="/create-account">Create account</a></li>
          <li><a href="/discover-campaigns">Discover campaigns</a></li>
          <li><a href="/create-challenge">Create a challenge</a></li>
          <li><a href="/join-challenge">Join a challenge</a></li>
          <li><a href="/find-match">Find your match</a></li>
          <li><a href="/faq">How to or FAQ</a></li>
        </ul>
      </div>
      <div className="d:mx-auto mt-48px d:mt-48px">
        <div className="text-14px font-bold">Contact</div>
        <ul className="text-12px leading-128">
          <li><a href="/corporation-contact">Corporation Contact</a></li>
          <li><a href="/customer-support">Customer Support</a></li>
          <li><a href="/feature-suggestions">Feature Suggestions</a></li>
          <li><a href="/legal-feedback">Legal Feedback</a></li>
        </ul>
        <div>
          F in I
        </div>
      </div>
      <div className="d:col-span-4 col-span-2 flex d:flex-row flex-col justify-between text-center d:text-auto border-t d:mt-40px mt-24px pt-18px">
        <div className="text-14 font-bold">All rights reserved © Move the Chain</div>
        <div className="text-14 flex justify-between mt-12px d:mt-0">
          <a className="d:pr-5" href="/privacy-policy">Privacy Policy</a>
          <div>|</div>
          <a className="d:px-5" href="/terms-of-use">Terms of Use</a>
          <div>|</div>
          <a className="d:pl-5" href="/ccpta">CCPTA</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
