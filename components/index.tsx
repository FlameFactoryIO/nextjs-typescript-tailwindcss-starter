import Head from "next/head";
import Footer from "../components/Footer";
import Button from "../components/Button";
// noinspection JSUnusedGlobalSymbols
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>Move the Chain [login]</header>

      <main>
        <div className="container py-7 flex flex-col md:flex-row mx-auto">
          <div className="md:flex-1 flex-none md:order-1 order-2 grid grid-cols-2 grid-rows-3 gap-2">
            <div className="row-span-2 ml-auto bg-gray-300">
              <img style={{ width: 240, height: 320 }} />
            </div>
            <div className="row-span-3 mr-auto bg-gray-100">
              <img style={{ width: 300, height: 480 }} />
            </div>
            <div className="ml-auto bg-gray-200">
              <img style={{ width: 240, height: 150 }} />
            </div>
          </div>

          <div className="md:flex-1 px-7 flex-none md:order-2 order-1 flex flex-col justify-between">
            <p className="text-48">
              We connect charities, corporations and donors.
            </p>
            <p className="text-18 leading-none">
              Making a difference has never been more fun and rewarding.
            </p>
            <p className="font-hand text-32 leading-none text-orange">
              How you can help move the chain [arrow]
            </p>

            <div className="grid grid-cols-3 gird-rows-3">
              <p className="order-1 text-16 ">Individuals</p>
              <p className="order-4 text-12">
                Donate, share and support your favorite nonprofits.
              </p>
              <a className="order-7 text-14 text-orange">
                Support a cause [arrow]
              </a>

              <p className="order-2 text-16">Nonprofits</p>
              <p className="order-5 text-12">Tell your story to raise funds.</p>
              <a className="order-8 text-14 text-orange">
                Claim your page [arrow]
              </a>

              <p className="order-3 text-16">Corporations</p>
              <p className="order-6 text-12">
                Find nonprofits that need your support.
              </p>
              <a className="order-9 text-14 text-orange">
                Sponsor an event [arrow]
              </a>
            </div>
          </div>
        </div>

        <div
          id="supporting"
          className="container mx-auto py-7 bg-gray-100 grid grid-rows-3 gap-2 text-center"
        >
          <p className="text-28 leading-26px align-middle">
            Supporting more than{" "}
            <span className="font-bold text-orange">140k+</span> vetted
            nonprofit organizations.
          </p>
          <p className="text-18 font-bold leading-none">
            All donations are tax deductible.
          </p>
          <p className="text-34 leading-none">🙌</p>
        </div>

        <div className="container grid grid-rows-2 gap-2  mx-auto text-center">
          <div className="mt-16 mb-6 font-bold text-43">
            What's Move the chain
          </div>
          <p className="mt-2 mx-auto text-18 max-w-800">
            Move the Chain is a social giving platform, changing the way you
            give back to causes you care about. We make it fun, transparent and
            empowering to donate to and promote causes that matter to you.
          </p>
          <div style={{ width: 520, height: 520, margin: "0 auto" }}>
            [IMAGE]
          </div>
        </div>
        <div className="container grid grid-rows-3 gap-2 mx-auto text-center my-20 text-18">
          <p className="font-bold">
            From being inspired by a campaign, to challenging your circle of
            friends and family to take positive action, there are so many ways
            to make a positive impact
          </p>
          <p className=" m-auto text-16">
            "67% of americans believe social media sites are important for
            creating sustained movements for social change"
          </p>
          <div className=" flex justify-center mx-auto mt-15px">
            <Button type="button" variant="primary">
              Get to know us
            </Button>
          </div>
        </div>
        <div
          id="trending-campaigns"
          className="container flex flex-col mx-auto text-center my-20 bg-blue"
        >
          <p className="m-50 font-bold text-3xl">Trending Campaigns</p>
          <p className="m-50 font-bold text-3xl">
            Campaigns are an opportunity for nonprofits to organize short burst
            fundraising to fund a specific need. The campaign is created by the
            nonprofit to explain the impact of your donation. #Transparencyiskey
          </p>
          <div className="grid grid-col-4 justify-center gap-x-20">
            <div className="ml-auto bg-gray-500 flex flex-col">
              <img style={{ width: 261, height: 320 }} />
            </div>
          </div>
        </div>

        <div
          id="featured-nonprofits"
          className="container grid grid-rows-3 gap-2  mx-auto text-center my-20 bg-blue"
        >
          <p className="m-50 font-bold text-3xl">Featured Nonprofits</p>
        </div>
        <div
          id="your-opportunity-to-make-impact"
          className="container grid grid-rows-3 gap-2  mx-auto text-center my-20 bg-blue"
        >
          <p className="m-50 font-bold text-3xl">
            Your opportunity to make an impact
          </p>
          <p>
            Whether you are a nonprofit looking for a quality channel to spread
            their cause and raise funds, a donor looking to contribute, or a
            corporation looking to partner with nonprofits, we stand by you. We
            want to Move the Chain together.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
