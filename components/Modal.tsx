import { FC, ReactNode } from "react";

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
        className={`z-50 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-screen w-screen
        flex items-center justify-center ${className}`}
      >
        <div className="bg-white border rounded-10px min-w-300px min-h-300px max-w-screen max-h-screen flex flex-col p-10px relative">
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
  );
}

const CloseIcon = ({className = ""}:{className?: string}) => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="15" cy="15" r="15" fill="#E84300" fillOpacity="0.15"/>
    <path d="M15.0006 13.5588L20.0447 8.51465L21.4856 9.95553L16.4415 14.9996L21.4856 20.0438L20.0447 21.4846L15.0006 16.4405L9.95651 21.4846L8.51562 20.0438L13.5597 14.9996L8.51562 9.95553L9.95651 8.51465L15.0006 13.5588Z" fill="#E84300"/>
  </svg>
);

export default Modal;
