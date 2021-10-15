import { FC, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const WhatsMoveTheChain: FC = () => {
  return (
    <div className="medio-blanco-medio-crema">
      <div className="container grid grid-rows-2 gap-2 mx-auto text-center">
        <div className="mt-16 mb-6 font-bold text-43">
          What's Move the chain
        </div>
        <p className="mt-2 mx-auto text-18 max-w-800">
          Move the Chain is a social giving platform, changing the way you give
          back to causes you care about. We make it fun, transparent and
          empowering to donate to and promote causes that matter to you.
        </p>
        <div style={{ width: 520, height: 520, margin: "0 auto" }}>[IMAGE]</div>
      </div>

      <div className="container grid grid-rows-3 gap-2 mx-auto text-center my-20 text-18">
        <p className="font-bold">
          From being inspired by a campaign, to challenging your circle of
          friends and family to take positive action, there are so many ways to
          make a positive impact
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
    </div>
  );
};

export default WhatsMoveTheChain;
