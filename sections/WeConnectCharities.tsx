import { FC, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const WeConnectCharities: FC = () => {
  return (
    <div className="flex flex-col t:flex-row mx-auto">
      <div className="t:flex-1 flex-none t:order-1 order-2 grid grid-cols-2 grid-rows-3 gap-2">
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

      <div className="t:flex-1 px-7 py-10 t:py-0 flex-none t:order-2 order-1 flex flex-col justify-between">
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
          <a className="order-7 text-14 text-orange">Support a cause [arrow]</a>

          <p className="order-2 text-16">Nonprofits</p>
          <p className="order-5 text-12">Tell your story to raise funds.</p>
          <a className="order-8 text-14 text-orange">Claim your page [arrow]</a>

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
  );
};

export default WeConnectCharities;
