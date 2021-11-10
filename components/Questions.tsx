import React, { FC, useState } from "react";
import Link from 'next/link';
import Button from '../components/Button';

const Questions: FC = () => {

  return (
    <div className="flex flex-col t:flex-row text-center text-white
                    pt-44px px-21px pb-61px
                    t:pb-36px t:px-30px t:pt-50px
                    d:px-0
                    mx-auto t:gap-52px
                    justify-between">
      <div className="flex-1 text-center pb-20px d:pb-0 t:text-left t:max-w-491px d:max-w-725px">
        <div className="font-bold text-20px leading-24px d:text-34px d:leading-40-8px pb-20px">
          Questions?
        </div>
        <div className="font-light text-16px leading-24px d:text-18px d:leading-27-px ">
          Do you have questions about Move the Chain? Reach out and we’ll be happy to answer your questions!
        </div>
      </div>
      <div className="t:mt-44px d:mt-41px t:mr-0">
        <Link href="mailto:support@movethechain.com" passHref>
          <a>
            <Button size="small">
              Contact Us
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
};
export default Questions;
