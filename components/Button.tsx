import { FC } from "react";

const Button: FC<{
  type?: "submit" | "reset" | "button",
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  variant?: "primary" | "secondary",
}> = ({
  children,
  type,
  className = "",
  disabled = false,
  onClick,
  variant = "primary",
}) => {
  // we need to add this to force the creation of the classes, and are dynamically generated
  // `bg-primary-500 active:bg-primary-600 ring-primary-100`;
  // `bg-secondary-500 active:bg-secondary-600 ring-secondary-100`;

  return (
    <button
      type={type}
      className={`bg-${variant}-500 text-white active:bg-${variant}-600 font-bold py-2 px-4 leading-24px rounded shadow hover:shadow-lg outline-none focus:ring hover:ring ring-${variant}-100 ease-linear transition-all duration-150 ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
