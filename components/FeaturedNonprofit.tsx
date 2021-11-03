import {FC} from "react";
import Button from "./Button";
import Link from "next/link";
import Nonprofit from "../dtos/Nonprofit";
import Ellipsis from "@quid/react-ellipsis"

const FeaturedNonprofit: FC<{
  nonprofit: Nonprofit,
  className?: string,
}> = ({
  nonprofit,
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <a href={`${nonprofit.path}`}>
        <div className="relative select-none cursor-pointer">
          <img src={nonprofit.bannerUrl} width="100%" height="100%" className="rounded-20px object-cover h-260px" />

          <div className="absolute left-10px bottom-10px right-0 flex items-center gap-10px">
            <img src={nonprofit.logoUrl} width={50} height={50} className="rounded-full object-cover object-center" />
            <div className="flex-1 text-white font-black text-18px leading-21px">{nonprofit.name}</div>
          </div>
        </div>
      </a>

      <Ellipsis className="mt-18px font-light text-12px leading-15px block-with-text" maxHeight={50} title={nonprofit.description}>
        {nonprofit.description}
      </Ellipsis>

      <Link href={`${nonprofit.path}`}>
        <a>
          <Button variant="black" className="mt-10px rounded-10pxi mx-auto w-220px d:w-full">
            Find out more
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default FeaturedNonprofit;
