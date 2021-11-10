import Head from "next/head";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import Image from "next/image";
import Button from "../../components/Button";
import Input from "../../components/Input";

// noinspection JSUnusedGlobalSymbols
export default function CorporationsHome() {
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

      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

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
            <Button
              variant="primary"
              className="shadow-2-5-15 h-42px d:h-46px d:text-18px d:leading-24px"
              size="small"
            >
              Join us
            </Button>
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
            More brands are trying to connect with the younger generation...
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
                alt=""
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
                alt=""
                src="/images/corporations/55.png"
                width={149}
                height={149}
                objectFit="contain"
              />

              <div className="w-280px t:max-w-210px d:max-w-236px t:flex-1">
                {/*max-w-280px t:max-w-210px d:max-w-236px text-center */}
                of GenZers value and would prefer to buy from brands that are{" "}
                <span className="font-bold">eco-friendly</span> and that are
                <span className="font-bold">socially responsible</span>
              </div>
            </div>
            <div>
              <Image
                alt=""
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
                alt=""
                src="/images/corporations/shape.png"
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
                  Host fundraisers where customers and emloyees participate in
                  fun challenges in exchange for donations to the corporation’s
                  chosen nonprofit
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
                             d:max-w-367px d:h-369px"
              >
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
          />

          <div
            className="pt-17px font-light text-18px leading-23-4px max-w-280px text-center
                        t:max-w-708px
                        d:max-w-914px d:pt-29px d:text-24px d:leading-35-5px"
          >
            <span className="text-primary-400">“</span>I love the vision behind
            Move the Chain. This is a movement driven by thoughtful people who
            are all about maximizing positive impact in the world we live in.
            I&apos;m excited to be a small part of it.
            <span className="text-primary-400">”</span>
          </div>
          <div className="pt-6px d:pt-10px text-16px leading-24px d:text-18px">
            <span className="text-primary-400 font-bold ">Roger Desai </span>{" "}
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
            <div
              className="flex-1 bg-white min-w-280px h-636px rounded-24px shadow-0-3-16
              pt-30px px-15px pb-29px
              d:pt-20px d:px-30px d:pb-39px
              t:w-708px t:px-30px t:h-504px
              d:w-575px d:h-570px"
            >
              <div
                className="grid grid-rows-5 t:grid-cols-2 t:grid-rows-3 gap-y-20px gap-x-10px items-center
              pb-20px"
              >
                <Input
                  className="min-w-250px bg-white border-1px border-solid border-input t:max-w-313px d:max-w-250px"
                  placeholder="Contact Name"
                />
                <Input
                  className="min-w-250px bg-white border-1px border-solid border-input t:max-w-313px d:max-w-250px"
                  placeholder="Mobile Number"
                />
                <Input
                  className="min-w-250px bg-white border-1px border-solid border-input t:max-w-313px d:max-w-250px"
                  placeholder="Company Name"
                />
                <Input
                  className="min-w-250px bg-white border-1px border-solid border-input t:max-w-313px d:max-w-250px"
                  placeholder="Role/Position"
                />
                <Input
                  className="t:col-span-2 min-w-250px bg-white border-1px border-solid border-input
                             t:max-w-642px d:max-w-522px"
                  placeholder="Email Address"
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
                />
              </div>

              <div className="text-center">
                <Button size="small" type="submit">
                  Join Us 🚀
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-footer">
        <Footer />
      </div>
    </div>
  );
}
