import Head from "next/head";
import Footer from "../components/Footer";

// noinspection JSUnusedGlobalSymbols
export default function AboutUs() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>About Us</title>
      </Head>

      <div className="w-full">Move the Chain [login]</div>

      <div id="footer" className="w-full bg-footer">
        <div className="w-280px t:w-708px d:w-1140px mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
