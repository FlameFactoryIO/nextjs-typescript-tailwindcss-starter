import React from "react";
import Button from "./Button";
import Link from "next/link";
import Nonprofit from "../dtos/Nonprofit";
import Ellipsis from "@quid/react-ellipsis"
import { FaMapMarkerAlt } from "react-icons/fa";

const FeaturedNonprofit = ({
  nonprofit,
  className = "",
  buttonClassName = "",
}:{
  nonprofit: Nonprofit,
  className?: string,
  buttonClassName?: string,
}) => {
  return (
    <div className={`flex flex-col mx-auto w-full ${className}`}>
      <Link href={`/${nonprofit.name}`} passHref>
        <a>
          <div className="relative select-none cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={nonprofit.bannerUrl} width="100%" height="100%" className="rounded-20px object-cover h-260px" alt="" />

            <div className="absolute left-10px bottom-10px right-0 flex items-center gap-10px">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={nonprofit.logoUrl} width={50} height={50} className="rounded-full object-cover object-center" alt="" />
              <div className="flex-1 text-white font-black text-18px leading-21px">{nonprofit.name}</div>
            </div>
          </div>
        </a>
      </Link>

      <Ellipsis className="mt-18px font-light text-12px leading-15px block-with-text" maxHeight={50} title={nonprofit.description}>
        {nonprofit.description}
      </Ellipsis>

      {nonprofit.city && nonprofit.province && (
        <div className="mt-18px flex items-center">
          <span className="text-primary">
            <FaMapMarkerAlt />
          </span>{" "}
          {nonprofit.city}, {nonprofit.province}
        </div>
      )}

      <Link href={`/${nonprofit.name}`}>
        <a className="mt-10px flex flex-col items-center">
          <Button variant="black" className={`w-full ${buttonClassName}`}>
            Find out more
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default FeaturedNonprofit;
