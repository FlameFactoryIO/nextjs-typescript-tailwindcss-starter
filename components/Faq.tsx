import React, { FC, useState } from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

const Faq: FC = () => {

    return (
            // SECTION CONTAINER
            <div className="flex flex-col 
                            px-20px pt-50px pb-40px
                            t:px-30px t:pt-50px T:pb-50px 
                            d:px-120px d:pt-80px d:pb-73px">

                    {/* TITLE CONTAINER */}
                    <div className="text-black text-center font-bold 
                                    text-24px leading-28-8px pb-24px
                                    t:pb-34px 
                                    d:text-43px d:leading-51-6px d:pb-51px">
                        Frequently Asked Questions
                    </div>
                    
                    {/* INPUTS CONTAINER */}
                    <div className="text-16px leading-24px pb-23px
                                    d:text-18px d:leading-27px d:pb-47px">

                        {/* SELECT INPUT CONTAINER */}
                        <div className="pb-20px">
                            <div className={`flex flex-col bg-white cursor-pointer p-20px 
                                          border-1px border-red-select-border rounded-24px`}>
                                <div className="flex">
                                    <div className={`flex-1`}>Corporate Question #1</div>
                                    <div className="cursor-pointer flex items-center">
                                        <FaChevronDown className="w-13px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* SELECT INPUT CONTAINER */}
                        <div className="text-16px leading-24px 
                                        d:text-18px d:leading-27px">
                            <div className={`flex flex-col bg-white cursor-pointer p-20px 
                                             border-1px border-red-select-border  rounded-24px`}>
                                <div className="flex">
                                    <div className={`flex-1`}>Corporate Question #2</div>
                                    <div className="cursor-pointer flex items-center">
                                        <FaChevronDown className="w-13px"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* LINK CONTAINER */}
                    <div className="text-primary underline bg-white cursor-pointer text-center 
                                    pb-49px text-16px leading-20-8px
                                    d:pb-73px d:text-18px d:leading-21-6px">
                        <a>Have another question? Visit our Full FAQ page</a>
                    </div>
            </div>
    )
};
export default Faq;