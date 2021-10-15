import { FC, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const FeaturedNonporfits: FC = () => {
  return (
    <div
      id="featured-nonprofits"
      className="container flex flex-col mx-auto text-center"
    >
      <h1 className="font-bold text-26 t:text-43">Featured Nonprofits</h1>
      <p className="text-18 font-light t:w-max-740px">
        All nonprofits on{" "}
        <span className="font-bold ">
          Move the Chain verified 501c3 nonprofit organizations.
        </span>{" "}
        All donations to any of the nonprofits are tax deductible.
      </p>
      <div className="container flex flex-col t:flex-row mx-auto gap-10">
        <div className=" bg-gray-300 flex flex-col">
          <img style={{ width: 261, height: 320 }} />
        </div>
        <div className=" bg-gray-300 flex flex-col">
          <img style={{ width: 261, height: 320 }} />
        </div>
        <div className=" bg-gray-300 flex flex-col">
          <img style={{ width: 261, height: 320 }} />
        </div>
        <div className=" bg-gray-300 flex flex-col">
          <img style={{ width: 261, height: 320 }} />
        </div>
      </div>
      <div className=" flex justify-center mx-auto mt-15px">
        <Button type="button" variant="primary">
          Discover more nonprofits
        </Button>
      </div>
    </div>
  );
};

export default FeaturedNonporfits;
