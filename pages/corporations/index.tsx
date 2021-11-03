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
      </Head>

      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

      <div className="w-full bg-gradient-to-r from-blue-dark to-we-connect-charities-bg-right">
        <div
          id="hero"
          className="
            pt-86px pb-50px px-20px
            t:px-30px
            d:pt-77px d:px-120px
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
                            pb-22px t:pb-20px d:pb-28px d:pt-60px
                            shadow-0-2-5"
            >
              Connect your brand with consumers on a deeper level.
            </div>
            <div
              className="max-w-279px t:max-w-342px d:max-w-499px
                            text-14px d:text-18px leading-18-2px d:leading-24px font-light
                            pb-20px "
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
              className="rounded-10pxi shadow-2-5-15 w-124px"
            >
              Join us
            </Button>
          </div>

          <div className="w-280px  t:w-335px d:w-582px">
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
            while they want to work for and support social concious brands
          </div>

          <div id="brands"
            className="min-w-280px t:max-w-708px d:max-w-907px 
            flex-1 flex flex-col t:flex-row t:justify-between 
                        items-center text-center 
                              text-13px leading-16-9px
                              d:text-16px d:leading-24px
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
                socially responsible
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
            className="min-w-280px t:max-w-708px d:max-w-907px border-4 border-black-900
          transform translate-y-35px t:translate-y-111px d:translate-y-95px"
          >
            <div aria-hidden className="flex-1">
              <Image
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
        <div className="w-full bg-gradient-to-r from-blue-dark to-we-connect-charities-bg-right">
          <div
            id="corporation"
            className="pt-82px pb-50px px-20px
                       t:pt-148px  t:px-30px
                       d:pt-213px d:pb-96px d:px-170px"
          >
            <div className="flex flex-col d:flex-row">
              <div
                className="flex-1 text-white font-bold text-center 
                              text-24px leading-28-8px
                              d:text-43px d:leading-51-6px d:text-left
                              pb-20px"
              >
                Corporations can now do good and engage their employees and
                consumers along the way.
              </div>
              <div
                className="flex-1 font-light text-white text-center
                              text-13px leading-16-9px
                              d:text-16px d:leading-24px d:text-left
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
              className="flex flex-col t:flex-row gap-21px text-center pt-23px items-center
                            d:gap-20px"
            >
              <div
                className="flex-1 bg-white w-280px h-240px rounded-26px pt-20px pb-14px
                             t:w-222px t:h-281px
                             d:w-367px d:h-369px"
              >
                <Image
                  src="/images/corporations/corporate-fundraisers.png"
                  width={55}
                  height={69}
                />
                <div
                  className="font-bold text-16px leading-24px pb-11px
                                t:leading-20-8px
                                d:text-20px d:leading-30px"
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
                className="flex-1 bg-white w-280px h-240px rounded-26px pt-20px pb-14px
                             t:w-222px t:h-281px
                             d:w-367px d:h-369px"
              >
                <Image
                  src="/images/corporations/corporate-profile.png"
                  width={69}
                  height={60}
                />
                <div
                  className="font-bold text-16px leading-24px pb-11px
                                t:leading-20-8px
                                d:text-20px d:leading-30px"
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
                className="flex-1 bg-white w-280px h-240px rounded-26px pt-20px pb-14px
                             t:w-222px t:h-281px
                             d:w-367px d:h-369px"
              >
                <Image
                  src="/images/corporations/web-api.png"
                  width={64}
                  height={64}
                />
                <div
                  className="font-bold text-16px leading-24px pb-11px
                                t:leading-20-8px
                                d:text-20px d:leading-30px"
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
              src="/images/corporations/move-chain.png"
              width={77}
              height={45}
            />
          </div>

          <div
            className="font-bold text-24px leading-28-8px pb-20px 
                          t:pb-21px t:px-10px
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

      <div
        className="bg-cream px-20px pt-44px pb-44px
                        t:pb-43px t:px-30px
                        d:pt-73px d:pb-52px d:px-380px"
      >
        <div id="companies-we-call-partners" className="text-center">
          <div
            className="pb-44px d:pb-66px
                          font-bold text-24px leading-28-8px
                          d:text-43px d:leading-51-6px"
          >
            Companies we call partners
          </div>
          <Image
            src="/images/corporations/partners.png"
            width={145}
            height={145}
          />

          <div
            className="pt-17px font-light text-18px leading-23-4px
                          d:pt-29px d:px-233px d:text-24px d:leading-35-5px"
          >
            <span className="text-primary-400">“</span>I love the vision behind
            Move the Chain. This is a movement driven by thoughtful people who
            are all about maximizing positive impact in the world we live in.
            I'm excited to be a small part of it.
            <span className="text-primary-400">”</span>
          </div>
          <div className="pt-6px d:pt-10px">
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

      <div className="w-full bg-gradient-to-r from-blue-dark to-we-connect-charities-bg-right">
        <div
          id="provide-contact"
          className="flex flex-col t:grid t:grid-cols-2 t:gap-14px items-center text-center
                    pt-44px px-20px pb-51px
                    t:pt-47px t:px-29px
                    d:px-170px d:gap-112px"
        >
          <div className="text-white text-center t:text-left d:text-left">
            <div
              className="text-24px font-bold leading-28-8px pb-26px
                            t:pt-29px 
                            d:text-43px d:leading-51-6px"
            >
              Ready to join us and help promote your corporate responsibility?
            </div>
            <div
              className="font-light text-13px leading-16-9px pb-15px
                            t:pb-62px
                            d:pb-11px d:text-16px d:leading-24px"
            >
              Provide your contact information and we will get in touch with you
              on how to start partnering with us.
            </div>
            <div className="t:hidden d:block">
              <Image
                src="/images/corporations/contact-information.png"
                width={469}
                height={269}
              />
            </div>
          </div>

          <div className=" t:gap-33px hidden t:block d:hidden">
            <Image
              src="/images/corporations/contact-information.png"
              width={469}
              height={269}
            />
          </div>

          <div className="pt-40px t:text-center t:items-center t:px-31px">
            <div
              className="bg-white w-280px h-635px rounded-40px pt-30px px-15px pb-29px
                            t:w-708px t:h-514px
                            d:w-575px d:h-592px"
            >
              <div className="t:grid t:grid-cols-2 t:gap-21px items-center">
                <div className="pb-20px">
                  <Input
                    className="w-250px rounded-10px
                                    t:w-313"
                    placeholder="Contact Name"
                  />
                </div>
                <div className="pb-20px">
                  <Input
                    className="w-250px rounded-10px"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="pb-20px">
                  <Input
                    className="w-250px rounded-10px"
                    placeholder="Company Name"
                  />
                </div>
                <div className="pb-20px">
                  <Input
                    className="w-250px rounded-10px"
                    placeholder="Role/Position"
                  />
                </div>
              </div>
              <div className="pb-20px">
                <Input
                  className="w-250px rounded-10px"
                  placeholder="Email Address"
                />
              </div>
              <div className="pb-20px">
                <Input
                  className="w-250px h-150px rounded-10px"
                  placeholder="Comments"
                />
              </div>
              <div className="text-center">
                <Button className="w-201px h-46px rounded-10px" type="submit">
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="w-full bg-footer">
        <div className="w-280px t:w-708px d:w-1140px mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
