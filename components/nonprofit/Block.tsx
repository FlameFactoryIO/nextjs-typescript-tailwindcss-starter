import React, { FC, ReactNode } from "react";
import { AddIcon } from "./AddIcon";

export const Block: FC<{className?: string}> = ({className, children}) => (
  <div className={`w-full p-20px
    bg-white border-1px border-primary border-dashed rounded-24px shadow-0-6-24_06
    ${className}`}
  >
    {children}
  </div>
);

export const EmptyBlock = ({
  icon,
  text,
  actionText,
  onClick = () => {},
} : {
  icon?: ReactNode
  text?: ReactNode
  actionText?: string,
  onClick?: () => void,
}) => (
  <Block className="flex flex-col items-center justify-center gap-16px min-h-280px t:w-360px t:min-h-360px relative">
    {icon}
    {text && (
      <div className="font-light text-center text-13px leading-19-5px t:text-14px t:leading-21px">
        {text}
      </div>
    )}
    {actionText && (
      <div className="absolute top-10px right-10px flex items-center gap-7px cursor-pointer" onClick={onClick}>
        <div className="font-bold text-14px leading-20px text-primary">
          {actionText}
        </div>
        <AddIcon />
      </div>
    )}
  </Block>
);
