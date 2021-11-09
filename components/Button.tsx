import { FC } from "react";

const Button: FC<{
  type?: "submit" | "reset" | "button",
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  variant?: "primary" | "black" | "white",
  size?: "normal" | "small",
}> = ({
  children,
  type,
  className = "",
  disabled = false,
  onClick = () => {},
  variant = "primary",
  size = "normal",
}) =>
  <button
    type={type}
    className={`
      select-none rounded-10px
      text-14px leading-21px
      bg-${variant}-500
      ${variant !== "white" ? "text-white" : ""}
      active:bg-${variant}-600 font-bold
      min-h-46px ${size === "small" ? "px-30px" : "px-40px"}
      shadow hover:shadow-lg outline-none
      focus:ring hover:ring ring-${variant}-100
      ease-linear transition-all duration-150
      ${disabled ?
        `opacity-50 cursor-not-allowed` :
        ``}
      ${className}
    `}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>;

export default Button;
