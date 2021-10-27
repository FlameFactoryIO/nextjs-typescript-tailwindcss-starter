import React from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

// noinspection JSUnusedGlobalSymbols
export default function Ccpa() {
  return (
    <div className="w-full min-w-320px">
      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

      <div className="pt-48px pb-150px d:pt-77px px-20px">
        <h1 className="text-48px font-bold">California Privacy Notice</h1>
        <p>&nbsp;</p>
        <p>
          (If you are a User having your usual residence in California, US)&nbsp;
        </p>
        <p>
          <em>Last updated: December 2020.</em>
        </p>
        <p>
          Welcome to Move the Chain (the &ldquo;Platform&rdquo;). The Platform is
          provided and controlled by Move the Chain, Inc. and its affiliated
          entities (collectively, "Move the Chain", "us" or "we"). We are
          committed to protecting your privacy.
        </p>
        <p>
          This California Privacy Notice (&ldquo;Notice&rdquo;) is for California
          residents and supplements our&nbsp;
          <a className="text-blue-500 font-bold" href="https://www.movethechain.com/privacy-policy">Privacy Policy</a>
          . It explains how we collect, use, and share your Personal Information
          and how to exercise your rights under the California Consumer Privacy
          Act (&ldquo;CCPA&rdquo;).
        </p>
        <p>
          The term &ldquo;Personal Information&rdquo; in this Notice, refers to
          information that identifies, relates to, describes, is reasonably
          capable of being associated with, or could reasonably be linked,
          directly or indirectly, with you. Personal Information does not include
          information that is aggregated or information that cannot be reasonably
          linked to you.&nbsp;
        </p>
        <p>
          To provide the features offered by the Platform, we must process
          information about you, including Personal Information, whether or not
          you are registered or logged in. Subject to the limitations we describe
          in our&nbsp;
          <a className="text-blue-500 font-bold" href="https://www.movethechain.com/privacy-policy">Privacy Policy</a>
          , we may share your Personal Information for business purposes with
          strict restrictions on how our partners can use and disclose the data we
          provide, at your direction, or in ways otherwise in accordance with the
          CCPA. We don&rsquo;t sell any of your Personal Information, and we never
          will.
        </p>
        <p>
          To learn about the kinds of information we collect, share, and how we
          use it, please review our&nbsp;
          <a className="text-blue-500 font-bold" href="https://www.movethechain.com/privacy-policy">Privacy Policy</a>
          .
        </p>
        <p>&nbsp;</p>
        <h2 className="text-43px font-bold">1. How can you exercise your rights provided under the CCPA?</h2>
        <p>Under the CCPA, you have the following rights:&nbsp;</p>
        <ul className="list-inside list-disc">
          <li>
            <strong>Right to Know</strong>:&nbsp;You have the right to request
            that we disclose to you the Personal Information we collect, use, or
            disclose, and information about our data practices;
          </li>
          <li>
            <strong>Right to Request Deletion</strong>:&nbsp;You have the right to
            request that we delete your Personal Information that we have
            collected from you;
          </li>
          <li>
            <strong>Right to Non-Discrimination</strong>:&nbsp;We will not
            discriminate against you for exercising any of these rights.
          </li>
        </ul>
        <p>
          To exercise your &ldquo;right to know&rdquo; or your &ldquo;right to
          request deletion,&rdquo;&nbsp;
          <a className="text-blue-500 font-bold" href="mailto:legal@movethechain.com">contact us</a>.
        </p>
        <p>
          Please note that to protect your information and the integrity of our
          Products, we may need to verify your identity before processing your
          request. In some cases we may need to collect additional information to
          verify your identity, such as a government issued ID.
        </p>
        <p>
          Under the CCPA, you may exercise these rights yourself or you may
          designate an authorized agent to make these requests on your behalf. In
          most cases, we will facilitate your request through automated tools
          available through your password-protected account.
        </p>
        <h2 className="text-43px font-bold">&nbsp;</h2>
        <h2 className="text-43px font-bold">2. Contact for more information</h2>
        <p>
          If you have additional questions about this Notice or how to exercise
          your rights under the CCPA, please&nbsp;contact us:{' '}
          <a className="text-blue-500 font-bold" href="mailto:support@movethechain.com">support@movethechain.com</a>.
        </p>
      </div>

      <div id="footer" className="w-full bg-footer">
        <div className="w-280px t:w-708px d:w-1140px mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
