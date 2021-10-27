import Head from "next/head";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";

// noinspection JSUnusedGlobalSymbols
export default function Nonprofit({nonprofit}) {
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

export async function getStaticPaths() {
  const nonprofits = [{
    id: "1",
    name: "nonprofit 1",
  },{
    id: "2",
    name: "nonprofit 2",
  }];

  const paths = nonprofits.map((nonprofit) => ({
    params: { id: nonprofit.id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps() {
  const nonprofit = {
    id: "1",
    name: "nonprofit 1",
  };

  return {
    props: {
      nonprofit,
    },
  }
}
