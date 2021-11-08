import { FC } from "react";

const Input: FC<{
  disabled?: boolean,
  className?: string,
  value?: string,
  placeholder?: string,
  onChange?: (value: string) => void,
  variant?: "primary" | "black" | "white",
  multiline?: boolean,
  rows?: number,
  maxLength?: number,
  icon?: boolean,
  iconPath?: string,
  type?: string,
  pattern?: string,
}> = ({
  disabled,
  className = "",
  value,
  placeholder,
  onChange = () => {},
  variant = "primary",
  multiline = false,
  rows = 4,
  maxLength,
  icon = false,
  iconPath = "login-email",
  type = "text",
  pattern = "",
}) =>
  multiline ? (
    <textarea
      className={`appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-24px focus:outline-none focus:ring focus:ring-${variant}-50 ${disabled ? "bg-gray-200 cursor-not-allowed" : ""} ${className}`}
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      disabled={disabled}
      maxLength={maxLength}
    />
  ) : (
    <input
      className={`appearance-none w-full text-gray-700 leading-24px focus:outline-none
        ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
        ${icon ?
          `focus:ring focus:ring-${variant}-50 bg-${iconPath} border-0 border-b-1px border-input-border bg-left bg-no-repeat px-23px` :
          `border rounded py-2 px-3`} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      maxLength={maxLength}
      type={type}
      pattern={pattern}
    />
  );

export default Input;
