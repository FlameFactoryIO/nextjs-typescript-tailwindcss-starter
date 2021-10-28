import {FC} from "react";
import Button from "./Button";
import Image from "next/image";
import Nonprofit from "../shared/Nonprofit";
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
          <Image src={nonprofit.bannerUrl} width="100%" height="100%" objectFit="cover" layout="responsive" className="rounded-20px" />

          <div className="absolute left-10px bottom-10px right-0 flex items-center gap-10px">
            <Image src={nonprofit.logoUrl} width={50} height={50} objectFit="cover" objectPosition="center" className="rounded-full" />
            <div className="flex-1 text-white font-black text-18px leading-21px">{nonprofit.name}</div>
          </div>
        </div>
      </a>

      <Ellipsis className="mt-18px font-light text-12px leading-15px block-with-text" maxHeight={50} title={nonprofit.description}>
        {nonprofit.description}
      </Ellipsis>

      <a href={`${nonprofit.path}`}>
        <Button variant="black" className="mt-10px w-full rounded-10pxi">
          Find out more
        </Button>
      </a>
    </div>
  );
}

export default FeaturedNonprofit;
