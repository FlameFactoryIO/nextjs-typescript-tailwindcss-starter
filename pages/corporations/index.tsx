import { useState } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import Image from "next/image";
import Button from "../../components/Button";
import Input from "../../components/Input";

// noinspection JSUnusedGlobalSymbols
export default function CorporationsHome() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [contactName, setContactName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [rolePosition, setRolePosition] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [comments, setComments] = useState("");

  const handleContactFormSubmit = () => {
    setError(null);
    try {
      setContactName("");
      setMobileNumber("");
      setCompanyName("");
      setRolePosition("");
      setEmailAddress("");
      setComments("");
    } catch (e) {
      setError(e);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full min-w-320px">
      <Head>
        <title>Move the Chain</title>
        <style type="text/css">
          {`
            .hero-background {
              background: url('/images/background-worldmap.png') center no-repeat, linear-gradient(90deg, #0A173D 0%, #0C163B 38.02%, #080613 100%);
              background-size: cover;
            }
            .waves-background {
              background: url('/images/background-waves.png') center no-repeat, linear-gradient(90deg, #0A173D 0%, #0C163B 38.02%, #080613 100%);
              background-size: cover;
            }
          `}
        </style>
      </Head>

      <TopNav />

      <div className="w-full hero-background">
        <div
          id="hero"
          className="
            pt-86px pb-50px px-20px
            t:px-30px
            d:pt-116px d:px-120px
            flex flex-col t:grid t:grid-cols-2 gap-40px t:gap-31px d:gap-49px items-center"
        >
          <div
            className="max-w-280px t:max-w-342px d:max-w-509px items-center t:items-start
                          flex flex-col text-center t:text-left mx-auto t:mr-0
                          text-white t:order-first
                          "
          >
            <div
              className="font-bold text-26px leading-31-2px d:text-48px d:leading-57-6px
                            pb-22px t:pb-24px d:pb-28px d:pt-60px
                            shadow-0-2-5"
            >
              Connect your brand with consumers on a deeper level.
            </div>
            <div
              className="max-w-279px t:max-w-342px d:max-w-499px
                            text-14px t:text-16px d:text-18px leading-18-2px t:leading-24px d:leading-27px font-light
                            pb-20px t:pb-23px"
            >
              While your corporation supports the community and various
              nonprofit organizations, consumers, clients and even employees are
              often unaware of how much you make a difference. We create{" "}
              <span className="font-bold">
                transparency and increase consumer & employee engagement{" "}
              </span>
              through corporate
              <span className="font-bold"> charitable giving.</span>
            </div>
            <a href="#provide-contact">
            <Button
              variant="primary"
              className="shadow-2-5-15 h-42px d:h-46px d:text-18px d:leading-24px"
              size="small"
            >
              Join us
            </Button>
            </a>
          </div>

          <div className="min-w-280px  t:w-335px d:w-582px">
            <div aria-hidden className="t:flex-1">
              <Image
                alt=""
                src="/images/corporations/hero.png"
                width={582}
                height={504}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-cream">
        <div
          id="more-brands"
          className="pt-46px pb-0 px-20px
                    t:pt-44px  t:px-30px
                    d:pt-58px  d:px-120px
                    flex flex-col items-center
                    "
        >
          <div
            className="items-center
                              font-bold text-center text-16px leading-21-6px
                              t:text-18px t:leading-21-6px
                              d:text-28px d:leading-33-6px
                              pb-25px t:pb-23px d:pb-21px
                              min-w-280px t:max-w-708px d:max-w-1140px"
          >
            More brands are trying to connect with the younger generation...<br/>
            while they want to work for and support social conscious brands
          </div>

          <div
            id="brands"
            className="min-w-280px t:max-w-708px d:max-w-907px
                      flex-1 flex flex-col t:flex-row  t:gap-39px d:gap-100px
                      items-center text-center
                      text-13px leading-16-9px
                      d:text-16px d:leading-24px
                      -mb-11px t:-mb-74px d:-mb-22px
                      "
          >
            <div>
              <Image
                alt="Graph showing 86%"
                src="/images/corporations/86.png"
                width={149}
                height={149}
                objectFit="contain"
              />
              <div className="w-280px t:max-w-210px d:max-w-236px text-center t:flex-1">
                of Millennials would consider{" "}
                <span className="font-bold">taking a pay cut </span> to work at
                a company whose mission and values align with their own.
              </div>
            </div>

            <div>
              <Image
                alt="Graph showing 55%"
                src="/images/corporations/55.png"
                width={149}
                height={149}
                objectFit="contain"
              />

              <div className="w-280px t:max-w-210px d:max-w-236px t:flex-1">
                {/*max-w-280px t:max-w-210px d:max-w-236px text-center */}
                of GenZers value and would prefer to buy from brands that are{" "}
                <span className="font-bold">eco-friendly</span> and that are{" "}
                <span className="font-bold">socially responsible</span>
              </div>
            </div>
            <div>
              <Image
                alt="Graph showing 48%"
                src="/images/corporations/48.png"
                width={149}
                height={149}
                objectFit="contain"
              />

              <div className="w-280px t:max-w-210px d:max-w-236px t:flex-1">
                of GenZers say they would{" "}
                <span className="font-bold">
                  participate in online games for a campaign benefiting a cause
                  or charity.
                </span>
              </div>
            </div>
          </div>
          <div
            className="min-w-280px t:max-w-708px d:max-w-907px
          transform translate-y-35px t:translate-y-111px d:translate-y-95px"
          >
            <div aria-hidden className="flex-1">
              {/*shadow-4-10-24-8*/}
              <Image
                className="rounded-16pxi"
                alt="21 human faces staring into the camera with a large Move the Chain logo overlaying them"
                src="/images/corporations/21-faces-mtc.png"
                width={907}
                height={422}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full waves-background">
          <div
            id="corporation"
            className="pt-82px pb-50px px-20px
                       t:pt-148px  t:px-30px
                       d:pt-213px d:pb-96px d:px-170px
                       flex flex-col items-center"
          >
            <div
              className="flex flex-col d:flex-row items-center
                            d:gap-66px "
            >
              <div
                className="flex-1 text-white font-bold text-center
                              text-24px leading-28-8px max-w-280px
                              t:max-w-708px
                              d:max-w-703px d:text-43px d:leading-51-6px d:text-left
                              pb-20px"
              >
                Corporations can now do good and engage their employees and
                consumers along the way.
              </div>
              <div
                className="flex-1 font-light text-white text-center max-w-280px
                              text-13px leading-16-9px
                              t:max-w-708px
                              d:max-w-351px d:text-16px d:leading-24px d:text-left
                              "
              >
                Brands give to charities every year, why not get consumers and
                employees involved in the process? Move the Chain offers a
                platform for corporations to{" "}
                <span className="font-bold">
                  initiate fundraisers, promote their brand
                </span>
                , all that while <span className="font-bold">doing good</span>.
              </div>
            </div>
            <div
              className="flex flex-col t:flex-row gap-21px text-center pt-23px items-center justify-center
                        t:gap-20px"
            >
              <div
                className="flex-1 bg-white w-280px h-240px rounded-26px pt-20px pb-14px
                             t:max-w-222px t:h-281px
                             d:max-w-367px d:h-369px
                             flex flex-col items-center"
              >
                <div className="t:mb-14px">
                  <Image
                    alt=""
                    src="/images/corporations/corporate-fundraisers.png"
                    width={55}
                    height={69}
                  />
                </div>
                <div
                  className="font-bold text-16px leading-24px pb-11px
                                t:leading-20-8px
                                d:text-20px d:leading-30px
                                t:pb-11px d:pb-15px"
                >
                  Corporate Fundraisers
                </div>
                <div
                  className="font-light text-13px leading-16-9px px-20px
                                 t:px-15px
                                 d:text-16px d:leading-24px d:px-39px"
                >
                  Host fundraisers where customers and employees participate in targeted
                  surveys in exchange for donations to the corporation’s chosen nonprofit.
                </div>
              </div>
              <div
                className="flex-1 bg-white max-w-280px h-240px rounded-26px pt-28px pb-14px
                             t:max-w-222px t:h-281px
                             d:max-w-367px d:h-369px"
              >
                <div className="t:mb-14px">
                  <Image
                    alt=""
                    src="/images/corporations/corporate-profile.png"
                    width={69}
                    height={60}
                  />
                </div>
                <div
                  className="font-bold text-16px leading-24px pb-11px
                                t:leading-20-8px
                                d:text-20px d:leading-30px
                                t:pb-11px d:pb-15px"
                >
                  Corporate Profile
                </div>
                <div
                  className="font-light text-13px leading-16-9px px-20px
                                 t:px-15px
                                 d:text-16px d:leading-24px d:px-39px"
                >
                  The profile showcases your corporation’s social
                  responsibillity, donations, fundraisers, and nonprofits
                  supported.
                </div>
              </div>
              <div
                className="flex-1 bg-white max-w-280px h-240px rounded-26px pt-20px pb-14px
                             t:max-w-222px t:h-281px
                             d:max-w-367px d:h-369px
                             relative"
              >
                <UpcomingRibbon className="absolute -left-10px" />
                <div className="t:mb-14px">
                  <Image
                    alt=""
                    src="/images/corporations/web-api.png"
                    width={64}
                    height={64}
                  />
                </div>
                <div
                  className="font-bold text-16px leading-24px pb-11px
                                t:leading-20-8px
                                d:text-20px d:leading-30px
                                t:pb-11px d:pb-15px"
                >
                  Web API
                </div>
                <div
                  className="font-light text-13px leading-16-9px px-20px
                                 t:px-15px
                                 d:text-16px d:leading-24px d:px-39px"
                >
                  A summary of the Corporation’s fundraisers, donations and
                  nonprofit supported can be integrated in the Corporation’s
                  website, via API or SDK.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-footer text-center">
        <div
          id="why-move-the-chain"
          className="px-20px pt-50px pb-25px
                    t:pt-53px t:px-30px t:pb-27px
                    d:pt-44px d:px-209px d:pb-55px"
        >
          <div>
            <Image
              alt=""
              src="/images/corporations/move-chain.png"
              width={77}
              height={45}
            />
          </div>

          <div
            className="font-bold text-24px leading-28-8px pb-20px
                          t:pb-21px
                          d:text-43px d:leading-51-6px d:pb-29px
                          "
          >
            Why Move the Chain is right for your brand?
          </div>
          <div
            className="font-light text-13px leading-16-9px
                          d:text-16px d:leading-24px d:px-75px"
          >
            The goal of corporate fundraisers is not only to help charities
            raise the funds they need, but also to{" "}
            <span className="font-bold">promote corporate responsibility</span>.
            We know it’s not always easy to engage consumers. clients and
            employees to do good or to promote your corporate responsibility
            online. We are here to help.
          </div>
        </div>
      </div>

      <div className="bg-cream">
        <div
          className="text-center flex flex-col items-center  px-20px pt-44px pb-44px
                        t:pb-43px t:px-30px
                        d:pt-73px d:pb-88px d:px-234px"
          id="companies-we-call-partners"
        >
          <div
            className="pb-44px d:pb-66px max-w-280px font-bold text-24px leading-28-8px
                    t:max-w-620px
                    d:text-43px d:leading-51-6px d:max-w-640px"
          >
            Companies we call partners
          </div>
          <Image
            src="/images/corporations/partners.png"
            width={145}
            height={145}
            alt=""
          />

          <div
            className="pt-17px font-light text-18px leading-23-4px max-w-280px text-center
                        t:max-w-708px
                        d:max-w-914px d:pt-29px d:text-24px d:leading-35-5px"
          >
            <span className="text-primary-400">“</span>
              I love the vision behind Move the Chain. This is a movement driven by incredibly talented founders
              whose passion for social good will change the world. I couldn&apos;t be more thrilled to play a small role.
            <span className="text-primary-400">”</span>
          </div>
          <div className="pt-6px d:pt-10px text-16px leading-24px d:text-18px">
            <span className="text-primary-400 font-bold ">Rodger Desai </span>{" "}
            <span className="font-bold">- CEO at Prove</span>
          </div>
        </div>
      </div>
      {/*<div className=" px-20px pt-50px pb-51px">
        <div
          id="frequently-asked-questions"
          className=""
        >
          <div className="mx-auto pb-35px text-center text-43px font-bold leading-52px">
            Frequently Asked Questions
          </div>
          <div>
          </div>
          <div className="mt-1 text-center">
            <span className="text-primary-400 font-bold ">More questions? Visit our Full FAQ page</span>
          </div>
        </div>
      </div>*/}

      <div className="w-full waves-background">
        <div
          id="provide-contact"
          className="flex flex-col d:grid d:grid-cols-2
                    items-center
                    pt-44px px-20px pb-51px
                    t:pt-47px t:px-29px t:gap-14px
                    d:px-0 d:gap-40px
                    min-w-280px t:max-w-708px d:max-w-1140px mx-auto"
        >
          <div
            className="t:px-0 text-white text-center t:text-left d:text-left
                        flex flex-col t:grid t:grid-cols-2 d:grid-cols-1 d:grid-rows-2
                        pb-56px t:pb-1px d:pb-33px d:items-center"
          >
            <div>
              <div
                className="min-w-280px
                          text-24px font-bold leading-28-8px pb-29px
                           t:max-w-353px t:pt-0
                          d:pt-0 d:pb-35px
                          d:max-w-550px d:text-43px d:leading-51-6px "
              >
                Ready to join us and help promote your corporate responsibility?
              </div>
              <div
                className="min-w-280px font-light text-13px leading-19-5px d:text-18px d:leading-27px
                          pb-26px t:pb-28px d:pb-0
                          t:max-w-334px  d:max-w-569px    mx-auto
                          "
              >
                Provide your contact information and we will get in touch with
                you on how to start partnering with us.
              </div>
            </div>

            <div className="min-w-280px t:max-w-340px d:max-w-550px">
              <div aria-hidden className="t:flex-1 d:m-0 ">
                <Image
                  alt=""
                  src="/images/corporations/contact-information.png"
                  width={550}
                  height={301}
                  objectFit="fill"
                  className="rounded-24px"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-550px t:text-center t:items-center flex flex-col">
            <form
              className="flex-1 bg-white min-w-280px h-636px rounded-24px shadow-0-3-16
              pt-30px px-15px pb-29px
              d:pt-20px d:px-30px d:pb-39px
              t:w-708px t:px-30px t:h-504px
              d:w-575px d:h-570px"
              onSubmit={handleContactFormSubmit}
            >
              <div
                className="grid grid-rows-5 t:grid-cols-2 t:grid-rows-3 gap-y-20px gap-x-10px items-center pb-20px"
              >
                <Input
                  className="min-w-250px bg-white border-1px border-solid border-input t:max-w-313px d:max-w-250px"
                  placeholder="Contact Name"
                  value={contactName}
                  onChange={setContactName}
                  disabled={isSubmitting}
                />
                <Input
                  className="min-w-250px bg-white border-1px border-solid border-input t:max-w-313px d:max-w-250px"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={setMobileNumber}
                  disabled={isSubmitting}
                />
                <Input
                  className="min-w-250px bg-white border-1px border-solid border-input t:max-w-313px d:max-w-250px"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={setCompanyName}
                  disabled={isSubmitting}
                />
                <Input
                  className="min-w-250px bg-white border-1px border-solid border-input t:max-w-313px d:max-w-250px"
                  placeholder="Role/Position"
                  value={rolePosition}
                  onChange={setRolePosition}
                  disabled={isSubmitting}
                />
                <Input
                  className="t:col-span-2 min-w-250px bg-white border-1px border-solid border-input
                             t:max-w-642px d:max-w-522px"
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={setEmailAddress}
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-rows-1 t:grid-cols-1 items-center pb-30px t:pb-40px">
                <Input
                  className="
                    min-w-250px h-180px
                    bg-white border-1px border-solid border-input
                    t:max-w-642px
                    d:max-w-522px d:h-227px d:mx-0
                  "
                  placeholder="Comments"
                  multiline
                  value={comments}
                  onChange={setComments}
                  disabled={isSubmitting}
                />
              </div>

              <div className="text-center">
                <Button size="small" type="submit" disabled={isSubmitting}>
                  Join Us 🚀
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full bg-footer">
        <Footer />
      </div>
    </div>
  );
}

const UpcomingRibbon = ({className}: {className?: string}) => (
  <svg width="111" height="59" viewBox="0 0 111 59" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4.0746 1.12279C3.18952 1.58717 1.80444 2.33904 0.866935 3.97544C0.179435 5.17561 0.0322581 6.32954 0 7.00098C0.0322581 7.67243 0.179435 8.82837 0.866935 10.0265C1.80444 11.6629 3.18952 12.4148 4.0746 12.8792C6.46774 14.1356 8.80645 14.0633 10 13.9306V7.00098V0.0693779C8.80645 -0.0633037 6.46774 -0.135675 4.0746 1.12279Z" fill="#BD4412"/>
    <path d="M110.938 13.3932H9.58444C8.44049 13.5208 6.2009 13.5903 3.90527 12.3826C3.05697 11.9362 1.72945 11.2135 0.830909 9.6406C0.171979 8.48892 0.0309175 7.37783 0 6.73242V52.272C0.0309175 52.9174 0.171979 54.0285 0.830909 55.1802C1.72945 56.7531 3.05697 57.4758 3.90527 57.9222C5.93423 58.9908 7.91682 59.0603 9.14 58.9734V59.0004H110.938L91.4077 36.1949L110.938 13.3932Z" fill="url(#paint0_linear_69:506)"/>
    <path d="M13.3531 31.102V36.814C13.3531 37.4673 13.4978 37.9667 13.7871 38.312C14.0858 38.6573 14.5151 38.83 15.0751 38.83C15.6351 38.83 16.0598 38.6573 16.3491 38.312C16.6478 37.9667 16.7971 37.4673 16.7971 36.814V31.102H19.1911V36.814C19.1911 37.7473 19.0091 38.536 18.6451 39.18C18.2811 39.8147 17.7818 40.2953 17.1471 40.622C16.5218 40.9393 15.8125 41.098 15.0191 41.098C14.2258 41.098 13.5258 40.9393 12.9191 40.622C12.3125 40.3047 11.8365 39.824 11.4911 39.18C11.1458 38.536 10.9731 37.7473 10.9731 36.814V31.102H13.3531ZM25.6628 33.09C26.3068 33.09 26.8808 33.2533 27.3848 33.58C27.8982 33.8973 28.2995 34.3593 28.5888 34.966C28.8875 35.5633 29.0368 36.2727 29.0368 37.094C29.0368 37.906 28.8875 38.6153 28.5888 39.222C28.2995 39.8287 27.8982 40.2953 27.3848 40.622C26.8808 40.9393 26.3068 41.098 25.6628 41.098C25.0655 41.098 24.5522 40.9627 24.1228 40.692C23.6935 40.4213 23.3808 40.0527 23.1848 39.586V44.724H20.7908V33.188H23.1848V34.602C23.3808 34.1353 23.6935 33.7667 24.1228 33.496C24.5522 33.2253 25.0655 33.09 25.6628 33.09ZM24.8928 35.19C24.3888 35.19 23.9735 35.3627 23.6468 35.708C23.3295 36.044 23.1708 36.506 23.1708 37.094C23.1708 37.6727 23.3295 38.1347 23.6468 38.48C23.9735 38.8253 24.3888 38.998 24.8928 38.998C25.4062 38.998 25.8168 38.83 26.1248 38.494C26.4422 38.158 26.6008 37.6913 26.6008 37.094C26.6008 36.4967 26.4422 36.03 26.1248 35.694C25.8168 35.358 25.4062 35.19 24.8928 35.19ZM33.8071 33.09C34.8151 33.09 35.6598 33.37 36.3411 33.93C37.0225 34.4807 37.4518 35.2413 37.6291 36.212H35.0951C35.0205 35.876 34.8665 35.6147 34.6331 35.428C34.3998 35.2413 34.1058 35.148 33.7511 35.148C33.3311 35.148 32.9858 35.316 32.7151 35.652C32.4445 35.9787 32.3091 36.4593 32.3091 37.094C32.3091 37.7287 32.4445 38.214 32.7151 38.55C32.9858 38.8767 33.3311 39.04 33.7511 39.04C34.1058 39.04 34.3998 38.9467 34.6331 38.76C34.8665 38.5733 35.0205 38.312 35.0951 37.976H37.6291C37.4518 38.9467 37.0225 39.712 36.3411 40.272C35.6598 40.8227 34.8151 41.098 33.8071 41.098C33.0418 41.098 32.3605 40.9393 31.7631 40.622C31.1751 40.2953 30.7131 39.8287 30.3771 39.222C30.0411 38.6153 29.8731 37.906 29.8731 37.094C29.8731 36.2727 30.0365 35.5633 30.3631 34.966C30.6991 34.3593 31.1658 33.8973 31.7631 33.58C32.3605 33.2533 33.0418 33.09 33.8071 33.09ZM42.5327 33.09C43.3074 33.09 43.9981 33.2533 44.6047 33.58C45.2207 33.8973 45.7014 34.3593 46.0467 34.966C46.4014 35.5727 46.5787 36.282 46.5787 37.094C46.5787 37.906 46.4014 38.6153 46.0467 39.222C45.7014 39.8287 45.2207 40.2953 44.6047 40.622C43.9981 40.9393 43.3074 41.098 42.5327 41.098C41.7581 41.098 41.0627 40.9393 40.4467 40.622C39.8307 40.2953 39.3454 39.8287 38.9907 39.222C38.6454 38.6153 38.4727 37.906 38.4727 37.094C38.4727 36.282 38.6454 35.5727 38.9907 34.966C39.3454 34.3593 39.8307 33.8973 40.4467 33.58C41.0627 33.2533 41.7581 33.09 42.5327 33.09ZM42.5327 35.162C42.0754 35.162 41.6881 35.33 41.3707 35.666C41.0627 35.9927 40.9087 36.4687 40.9087 37.094C40.9087 37.7193 41.0627 38.1953 41.3707 38.522C41.6881 38.8487 42.0754 39.012 42.5327 39.012C42.9901 39.012 43.3727 38.8487 43.6807 38.522C43.9887 38.1953 44.1427 37.7193 44.1427 37.094C44.1427 36.4687 43.9887 35.9927 43.6807 35.666C43.3727 35.33 42.9901 35.162 42.5327 35.162ZM57.9421 33.104C58.9035 33.104 59.6595 33.4027 60.2101 34C60.7608 34.588 61.0361 35.4093 61.0361 36.464V41H58.6561V36.744C58.6561 36.2493 58.5208 35.8667 58.2501 35.596C57.9888 35.316 57.6295 35.176 57.1721 35.176C56.6961 35.176 56.3181 35.3253 56.0381 35.624C55.7675 35.9133 55.6321 36.324 55.6321 36.856V41H53.2381V36.744C53.2381 36.2493 53.1075 35.8667 52.8461 35.596C52.5848 35.316 52.2255 35.176 51.7681 35.176C51.2921 35.176 50.9141 35.3207 50.6341 35.61C50.3541 35.8993 50.2141 36.3147 50.2141 36.856V41H47.8201V33.188H50.2141V34.518C50.4195 34.0793 50.7321 33.734 51.1521 33.482C51.5815 33.23 52.0808 33.104 52.6501 33.104C53.2475 33.104 53.7748 33.244 54.2321 33.524C54.6895 33.7947 55.0348 34.1867 55.2681 34.7C55.5388 34.2147 55.9075 33.8273 56.3741 33.538C56.8501 33.2487 57.3728 33.104 57.9421 33.104ZM62.4028 30.99C62.4028 30.626 62.5334 30.3273 62.7948 30.094C63.0561 29.8513 63.4014 29.73 63.8308 29.73C64.2601 29.73 64.6054 29.8513 64.8668 30.094C65.1281 30.3273 65.2588 30.626 65.2588 30.99C65.2588 31.3447 65.1281 31.6433 64.8668 31.886C64.6054 32.1193 64.2601 32.236 63.8308 32.236C63.4014 32.236 63.0561 32.1193 62.7948 31.886C62.5334 31.6433 62.4028 31.3447 62.4028 30.99ZM65.0208 33.188V41H62.6268V33.188H65.0208ZM71.6297 33.104C72.5257 33.104 73.235 33.4027 73.7577 34C74.2897 34.5973 74.5557 35.4187 74.5557 36.464V41H72.1617V36.744C72.1617 36.2213 72.0217 35.8153 71.7417 35.526C71.471 35.2273 71.107 35.078 70.6497 35.078C70.1643 35.078 69.777 35.232 69.4877 35.54C69.2077 35.848 69.0677 36.2867 69.0677 36.856V41H66.6737V33.188H69.0677V34.616C69.2917 34.1493 69.623 33.7807 70.0617 33.51C70.5097 33.2393 71.0323 33.104 71.6297 33.104ZM79.1026 33.09C79.6999 33.09 80.2133 33.2253 80.6426 33.496C81.0719 33.7667 81.3893 34.1353 81.5946 34.602V33.188H83.9746V40.958C83.9746 41.686 83.8346 42.3393 83.5546 42.918C83.2746 43.506 82.8453 43.9727 82.2666 44.318C81.6879 44.6633 80.9693 44.836 80.1106 44.836C78.9346 44.836 77.9919 44.556 77.2826 43.996C76.5826 43.4453 76.1626 42.694 76.0226 41.742H78.3886C78.4633 42.0593 78.6313 42.3067 78.8926 42.484C79.1633 42.6613 79.5133 42.75 79.9426 42.75C80.4373 42.75 80.8339 42.6053 81.1326 42.316C81.4406 42.036 81.5946 41.5833 81.5946 40.958V39.586C81.3893 40.0527 81.0719 40.4213 80.6426 40.692C80.2133 40.9627 79.6999 41.098 79.1026 41.098C78.4586 41.098 77.8799 40.9393 77.3666 40.622C76.8626 40.2953 76.4613 39.8287 76.1626 39.222C75.8733 38.6153 75.7286 37.906 75.7286 37.094C75.7286 36.2727 75.8733 35.5633 76.1626 34.966C76.4613 34.3593 76.8626 33.8973 77.3666 33.58C77.8799 33.2533 78.4586 33.09 79.1026 33.09ZM79.8726 35.19C79.3593 35.19 78.9439 35.358 78.6266 35.694C78.3186 36.03 78.1646 36.4967 78.1646 37.094C78.1646 37.6913 78.3186 38.158 78.6266 38.494C78.9439 38.83 79.3593 38.998 79.8726 38.998C80.3766 38.998 80.7873 38.8253 81.1046 38.48C81.4313 38.1347 81.5946 37.6727 81.5946 37.094C81.5946 36.506 81.4313 36.044 81.1046 35.708C80.7873 35.3627 80.3766 35.19 79.8726 35.19Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_69:506" x1="77.8595" y1="13.7543" x2="-90.5965" y2="157.528" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E84300"/>
        <stop offset="1" stopColor="#E84300"/>
      </linearGradient>
    </defs>
  </svg>
);
