import Head from "next/head";
import TopNav from "../../../components/TopNav";
import Footer from "../../../components/Footer";
import Nonprofit from "../../../dtos/Nonprofit";

// noinspection JSUnusedGlobalSymbols
export default function NonprofitProfileEditor({nonprofit}) {
  return (
    <div className="w-full min-w-320px">
      <Head>
        <title>Nonprofit {nonprofit.name}</title>
      </Head>

      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

      <div
        className="px-20px pt-82px
          t:pt-104px t:px-30px t:pb-50px
          d:pt-148px d:pr-50px d:pl-120px d:pb-100px
        "
        style={{backgroundImage: "url('/images/nonprofits/background.png')", backgroundRepeat: "no-repeat", backgroundPosition: "top", backgroundSize: "cover"}}
      >
        Nonprofit {nonprofit.name}
        VSITA DE EDICION
      </div>
      <div id="footer" className="w-full bg-footer">
        <div className="px-20px pt-30px pb-15px mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

// todo(hmassad) get lista de nonprofits
export async function getStaticPaths() {
  const nonprofits = [{
    id: 1234,
    slug: "nonprofit-1234",
    name: "nonprofit 1234",
  },{
    id: 2345,
    slug: "nonprofit-2345",
    name: "nonprofit 2345",
  }];

  const paths = nonprofits.map((nonprofit) => ({
    params: { slug: nonprofit.slug },
  }))

  return { paths, fallback: false }
}

// todo(hmassad) get nonprofit
export async function getStaticProps({ params }) {

  const nonprofit: Nonprofit = {
    id: 1234,
    claimed: true,
    name: "Nonprofit Name",
    description: "Duis eu tellus dignissim, pellentesque a lacus eu, hendrerit turpis. Cras iaculis  un hendrerit com und commodo",
    path: "nonprofit-1234",
    logoUrl: "https://movethechain.com/cdn-cgi/image/format=auto,metadata=none,sharpen=1,fit=scale-down,q=75,dpr=1/https://pics.paypal.com/00/s/MzRiYjJlNDEtNjBlNC00ZmU2LWJjY2MtY2Q5MDgzYmQ2MTA4/file.JPG",
    bannerUrl: "https://movethechain.com/cdn-cgi/image/format=auto,metadata=none,sharpen=1,fit=scale-down,q=75,gravity=auto,dpr=1/https://mtc-media-staging.s3.us-east-2.amazonaws.com/Group%20114-min.jpg",
    logoBg: "#FFFFFF",
    createdAt: "2021-11-01T12:00:00-0300",
    updatedAt: "2021-11-01T12:00:00-0300",
    interests: [],
    payments: [],
    testimonials: [],
    contacts: [],
    locations: [],
    hasCampaigns: 0,
    campaigns: [],
    challenges: [],
    pastCampaigns: [],
    draftCampaigns: [],
  };

  return {
    props: {
      nonprofit,
    },
  };
}
