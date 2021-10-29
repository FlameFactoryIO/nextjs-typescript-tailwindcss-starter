import { FC } from "react";

const Button: FC<{
  type?: "submit" | "reset" | "button",
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  variant?: "primary" | "black" | "white",
}> = ({
  children,
  type,
  className = "",
  disabled = false,
  onClick,
  variant = "primary",
}) =>
  <button
    type={type}
    className={`bg-${variant}-500 ${variant !== "white" ? "text-white" : ""} active:bg-${variant}-600 font-bold py-2 px-4 leading-24px rounded shadow hover:shadow-lg outline-none focus:ring hover:ring ring-${variant}-100 ease-linear transition-all duration-150 select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>;

export default Button;
