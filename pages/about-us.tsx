import Head from "next/head";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import Image from "next/image";

// noinspection JSUnusedGlobalSymbols
export default function AboutUs() {
  return (
    <div className="w-full min-w-320px">
      <Head>
        <title>Move the Chain</title>
      </Head>

      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

      <div className="w-full bg-gradient-to-r from-we-connect-charities-bg-left to-we-connect-charities-bg-right">
        <div
          id="hero"
          className="
            pt-86px pb-20px px-20px
            t:pt-98px t:pb-40px t:px-30px
            d:pt-120px d:pb-0 d:gap-0
            flex flex-col t:grid t:grid-cols-2 t:gap-30px items-center"
        >
          <div className="min-w-280px mx-auto t:mr-0 order-2 t:order-first">
            <div className="hidden d:block" style={{ marginBottom: -7 }}>
              <Image
                src="/images/about-us/hero-d.png"
                width={575}
                height={598}
              />
            </div>
            <div className="hidden t:block d:hidden">
              <Image
                src="/images/about-us/hero-t.png"
                width={575}
                height={444} 
              />
            </div>
            <div className="t:hidden">
              <Image src="/images/about-us/hero.png" width={378} height={444} />
            </div>
          </div>

          <div className="max-w-380px text-center t:text-left text-white d:w-576px flex flex-col gap-17px d:gap-20px t:items-center t:max-w-343px d:max-w-520px d:pl-45px pb-35px">
            <div className="font-bold text-26px leading-31-2px d:text-48px d:leading-57-6px">
              <span className=" text-primary">Move the Chain</span>{" "}
              connects nonprofits, corporations, and individuals. 🙌
            </div>
            <div className=" text-16px leading-20-8px t:text-14px t:leading-18-2px d:text-18px d:leading-24px font-light">
              A social giving platform using the power of action, peer-to-peer
              fundraising and social networking to make the world a better place
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 t:grid-cols-2">
        <div
          id="our-mission"
          className=" t:mr-0
            pt-44px pb-0 pl-0
            t:pt-98px t:pb-0
            d:pt-67px d:pb-0 d:gap-0
          "
        >
          <div className="d:max-w-570px ml-auto">
            <div className="mx-auto text-center">
              <div className="font-bold text-24px leading-28-8px d:text-43px d:leading-51-6px mx-auto">
                Our Mission
              </div>
              <div className="font-light text-13px leading-16-9px d:text-16px d:leading-24px mt-20px t:max-w-335px d:max-w-none mx-auto">
                The mission of{" "}
                <span className="text-primary font-bold">Move the Chain</span>{" "}
                is to challenge society to evolve positively and make the world
                a better place. Move the Chain makes it fun, transparent and
                empowering to donate and promote good causes.
              </div>
              <Image
                alt=""
                src="/images/about-us/our-mission.png"
                layout="responsive"
                objectFit="contain"
                width={643}
                height={583}
              />
            </div>
          </div>
        </div>
        <div
          id="our-vision"
          className="
            bg-footer
            pt-50px
            pb-20px px-20px
            t:pt-98px t:pb-40px t:px-30px
            d:pt-120px d:pb-0 d:gap-0
          "
        >
          <div className="d:max-w-570px mr-auto">
            <div className="mx-auto t:ml-0 text-center">
              <Image
                alt=""
                src="/images/about-us/our-vision.png"
                layout="responsive"
                objectFit="contain"
                width={558}
                height={442}
              />
              <div className="font-light text-25px leading-24px t:mt-35px">
                👐
              </div>

              <div className="font-bold text-24px leading-28-8px d:text-43px d:leading-51-6px mx-auto t:mt-6">
                Our Vision
              </div>
              <div className="t:font-light t:text-13px t:leading-16-9px t:mt-12px t:max-w-335px mx-auto">
                A world where everyone can make a positive change leveraging the
                power of action and connection.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="w-full grid gird-cols-1 t:grid-cols-2"*/}
      {/*     style={{backgroundImage: "url('/images/about-us/why-move-the-chain-background.png')"}}>*/}
      {/*  <div*/}
      {/*    id="why-move-the-chain"*/}
      {/*    className="*/}
      {/*      pt-44px pb-0 pl-0 pr-20px*/}
      {/*      t:pt-98px t:pb-0*/}
      {/*      d:pt-67px d:pb-0 d:gap-0*/}
      {/*    "*/}
      {/*  >*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div id="footer" className="w-full bg-footer">
        <div className="w-280px t:w-708px d:w-1140px mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
