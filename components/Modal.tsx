import { FC, ReactNode } from "react";

const Modal: FC<{
  className?: string,
  header?: ReactNode,
  footer?: ReactNode,
}> = ({
  className = "",
  header,
  children,
  footer,
}) => {
  return (
      <div
        className={`z-50 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-screen w-screen
        flex items-center justify-center ${className}`}
      >
        <div className="bg-white border rounded-10px min-w-300px min-h-300px flex flex-col p-10px">
          {header && (
            <div className="border-b border-gray-300 p-10px">
              {header}
            </div>
          )}
          <div className="flex-1 p-10px">
            {children}
          </div>
          {footer && (
            <div className="border-t border-gray-300 p-10px flex justify-center">
              {footer}
            </div>
          )}
        </div>
      </div>
  );
}

export default Modal;
