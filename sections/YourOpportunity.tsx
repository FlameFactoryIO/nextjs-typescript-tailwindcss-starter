import { FC, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const YourOpportunity: FC = () => {
  return (
    <div
      id="your-opportunity-to-make-impact"
      className="container relative flex flex-col t:flex-row mx-auto"
    >
      <div className="flex-none t:flex-1  t:order-1 order-2 grid grid-cols-2 grid-rows-4 gap-2">
        <div className="row-span-2 bg-red-300 rounded-2xl ">
          <img style={{ width: 240, height: 290 }} />
        </div>
        <div className="row-span-3 bg-blue-300 rounded-2xl ">
          <img style={{ width: 300, height: 460 }} />
        </div>
        <div className="bg-gray-300 rounded-2xl ">
          <img style={{ width: 240, height: 160 }} />
        </div>
        <div className="col-span-2 bg-green-300 rounded-2xl ">
          <img style={{ width: 550, height: 190 }} />
        </div>
      </div>

      <div className="t:flex-1 px-7 flex-none t:order-2 order-1 flex flex-col ">
        <p className="text-43 font-bold pt-20 pb-10">
          Your opportunity to make an impact
        </p>
        <p className="text-18 leading-24px">
          Whether you are a nonprofit looking for a{" "}
          <span className="font-bold ">quality channel</span> to spread their
          cause and raise funds, a donor looking to contribute, or a corporation
          looking to partner with nonprofits, we stand by you.{" "}
          <span className="font-bold">
            We want to Move the Chain together. Whether you are a nonprofit
          </span>
        </p>
      </div>

      <div className="static t:absolute flex flex-1 bottom-75px right-0 t:max-w-760px">
        <div className="flex flex-col t:flex-row gap-10px d:gap-20px t:gap-10px mx-auto">
          <div className="flex-1 t:p-15px t:pt-17px d:p-20px d:pt-25px flex flex-col rounded-24px text-white d:w-240px t:w-160px text-center t:text-left bg-gradient-to-b from-your-opportunity-card-top to-your-opportunity-card-bottom">
            <h1 className="text-15 leading-22-5px d:text-20 d:leading-30px font-bold">
              Donors
            </h1>
            <p className="flex-1 mt-5px text-12 leading-14-4px t:text-14 t:leading-18px font-light">
              By donating through the Move the Chain platform, you will always
              know how your donations make a difference for different causes.
            </p>
            <Button
              type="button"
              variant="primary"
              className="mt-15px rounded-10pxi t:px-13px d:px-20px mx-auto t:px-auto t:mx-0"
            >
              Support a cause
            </Button>
          </div>

          <div className="flex-1 t:p-15px t:pt-17px d:p-20px d:pt-25px flex flex-col rounded-24px text-white d:w-240px t:w-160px text-center t:text-left bg-gradient-to-b from-your-opportunity-card-top to-your-opportunity-card-bottom">
            <h1 className="text-15 leading-22-5px d:text-20 d:leading-30px font-bold">
              Nonprofits
            </h1>
            <p className="flex-1 mt-5px text-12 leading-14-4px t:text-14 t:leading-18px font-light">
              Your page on the platform is a channel to promote causes, raise
              funds, and connect with individuals and corporations for support.
            </p>
            <Button
              type="button"
              variant="primary"
              className="mt-15px rounded-10pxi px-20px mx-auto t:px-auto t:mx-0"
            >
              Claim your page
            </Button>
          </div>

          <div className="flex-1 t:p-15px t:pt-17px d:p-20px d:pt-25px flex flex-col rounded-24px text-white d:w-240px t:w-160px text-center t:text-left bg-gradient-to-b from-your-opportunity-card-top to-your-opportunity-card-bottom">
            <h1 className="text-15 leading-22-5px d:text-20 d:leading-30px font-bold">
              Corporations
            </h1>
            <p className="flex-1 mt-5px text-12 leading-14-4px t:text-14 t:leading-18px font-light">
              Find nonprofit organizations that need your support. Partner with
              them and their supporters to aim your efforts where you are needed
              the most.
            </p>
            <Button
              type="button"
              variant="primary"
              className="mt-15px rounded-10pxi px-20px mx-auto t:px-auto t:mx-0"
            >
              Find out more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourOpportunity;
