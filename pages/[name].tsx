import Head from "next/head";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import { getNonProfitData, getNonProfitDataByPaypalId } from "../mtc-api/nonprofit/useNonProfitPage";
import { getPaypalAuthToken } from "../mtc-api/nonprofit/usePaypalToken";
import { searchNonprofit } from "../mtc-api/nonprofit/useSearchNonprofit";
import cache from "../utils/cache";
import moment from "moment";
import redirect from "../utils/redirect";

// noinspection JSUnusedGlobalSymbols
export default function NonprofitProfile({ claiming, nonprofit, name, token, ownsNonprofit }) {

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

const normalizePayPalNPSearchResults = results => ({
  claimed: false,
  ...results,
  ...results.contact,
  ...results.address,
  contactEmail: results.contact.email,
  street1: results.address.line1,
  street2: results.address.line2 || null,
  province: results.address.state,
  country: 'USA',
  countryCode: 'US',
  siteUrl: results.contact.website,
  paypalId: results.id,
  interests: results.categories,
});

export const getServerSideProps = async ({ req, res, params, query }) => {
  try {
    const { name, paypalId } = query;
    const claiming = !!query.claim;
    let nonprofit = cache.get(name);

    if (!nonprofit) {
      nonprofit = await (paypalId
        ? getNonProfitDataByPaypalId(paypalId)
        : getNonProfitData(name));

      if (nonprofit) {
        if (nonprofit.campaigns.length) {
          let current = nonprofit.campaigns.filter(
            (c) => !moment().isAfter(c.endDate) && (!c.hidden || c.isLive),
          );
          if (current.length) nonprofit.currentCampaign = current[0];
          nonprofit.pastCampaigns = nonprofit.campaigns.filter(
            (c) => moment().isAfter(c.endDate) && !c.hidden,
          );
        }

        cache.set(name, nonprofit);
      } else {
        const token = await getPaypalAuthToken();

        const { results } = await searchNonprofit({
          token,
          search: name,
          pageSize: 1,
        });

        if (results.length) {
          nonprofit = normalizePayPalNPSearchResults(results[0]);
        }

        if (nonprofit) {
          cache.set(name, nonprofit);
        } else {
          console.info('redirecting tried to access nonprofit', name);
          redirect(res, '/');
          return {
            props: { nonprofit: null, name },
          };
        }
        return {
          props: {
            claiming,
            nonprofit,
            name,
          },
        };
      }
    }

    return {
      props: {
        claiming,
        nonprofit,
        name,
        token: req?.cookies?.token || null,
        ownsNonprofit: !!(
          req?.cookies?.token && req?.cookies?.paypalId == nonprofit.paypalId
        ),
      },
    };
  } catch (e) {
    redirect(res, '/');
    const { name } = query;
    return {
      props: { nonprofit: null, name },
    };
  }
}
