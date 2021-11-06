import Head from "next/head";
import Footer from "../../../components/Footer";
import TopNav from "../../../components/TopNav";
import Nonprofit from "../../../dtos/Nonprofit";

// noinspection JSUnusedGlobalSymbols
export default function NonprofitProfile({nonprofit}) {

  // const nonprofit;
  const isOwner = true;
  const isAuthenticated = true;
  // todo(hmassad) UserContext


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
    id: 2354,
    claimed: true,
    name: "Nonprofit Name",
    description: "Duis eu tellus dignissim, pellentesque a lacus eu, hendrerit turpis. Cras iaculis  un hendrerit com und commodo",
    path: "nonprofit-name",
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

  // try {
  //   const { slug, claim, paypalId } = params;
  //   const claiming = !!claim;
  //   let nonprofit = cache.get(slug);
  //
  //   if (!nonprofit) {
  //     nonprofit = await (paypalId
  //       ? getNonProfitDataByPaypalId(paypalId)
  //       : getNonProfitData(slug));
  //
  //     if (nonprofit) {
  //       if (nonprofit.campaigns.length) {
  //         let current = nonprofit.campaigns.filter(
  //           (c) => !date.isPast(c.endDate) && (!c.hidden || c.isLive),
  //         );
  //         if (current.length) nonprofit.currentCampaign = current[0];
  //         nonprofit.pastCampaigns = nonprofit.campaigns.filter(
  //           (c) => date.isPast(c.endDate) && !c.hidden,
  //         );
  //       }
  //
  //       cache.set(slug, nonprofit);
  //     } else {
  //       const token = await getPaypalAuthToken();
  //
  //       const { results } = await searchNonprofit({
  //         token,
  //         search: slug,
  //         pageSize: 1,
  //       });
  //
  //       if (results.length) {
  //         nonprofit = normalizePayPalNPSearchResults(results[0]);
  //       }
  //
  //       if (nonprofit) {
  //         cache.set(slug, nonprofit);
  //       } else {
  //         console.info('redirecting tried to access nonprofit', slug);
  //         redirect(res, '/');
  //         return {
  //           props: { nonprofit: null, slug },
  //         };
  //       }
  //       return {
  //         props: {
  //           claiming,
  //           nonprofit,
  //           slug,
  //         },
  //       };
  //     }
  //   }
  //
  //   return {
  //     props: {
  //       claiming,
  //       nonprofit,
  //       slug,
  //       token: req?.cookies?.token || null,
  //       ownsNonprofit: !!(
  //         req?.cookies?.token && req?.cookies?.paypalId == nonprofit.paypalId
  //       ),
  //     },
  //   };
  // } catch (e) {
  //   redirect(res, '/');
  //
  //   const { slug } = params;
  //   return {
  //     props: { nonprofit: null, slug },
  //   };
  // }
}
