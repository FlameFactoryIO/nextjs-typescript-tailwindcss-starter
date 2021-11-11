import React, { FC, ReactNode } from "react";
import { CloseIcon } from "./nonprofit/Icons";

const Modal: FC<{
  className?: string,
  header?: ReactNode,
  onClose?: () => void,
  footer?: ReactNode,
}> = ({
  className = "",
  header,
  onClose = () => {},
  children,
  footer,
}) => {
  return (
      <div
        className={`z-50 fixed inset-0 bg-gray-600 bg-opacity-50 h-screen w-screen
        flex items-center justify-center`}
      >
        <div className="p-50px">
          <div className={`bg-white border rounded-10px min-w-300px min-h-300px flex flex-col p-10px relative max-h-500px t:max-h-800px overflow-y-auto ${className}`}>
            {header && (
              <>
                <div className="absolute top-20px right-20px cursor-pointer" onClick={onClose}>
                  <CloseIcon />
                </div>
                <div className="px-33px mt-48px text-34px leading-51-6px font-black">
                  {header}
                </div>
              </>
            )}
            <div className="flex-1 p-10px overflow-y-auto">
              {children}
            </div>
            {footer && (
              <div className="border-t border-gray-300 p-10px flex justify-center">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
  );
}


export default Modal;
