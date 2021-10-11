import { FC } from "react";

const Input: FC<{
  disabled?: boolean,
  className?: string,
  value?: string,
  placeholder?: string,
  onChange?: () => void,
  variant?: "primary" | "secondary",
}> = ({
  disabled,
  className = "",
  value,
  placeholder,
  onChange,
  variant = "primary",
}) => (
  /*
    focus:ring-primary-50
    focus:ring-secondary-50
  */
  <input
    className={`appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-24px focus:outline-none focus:ring focus:ring-${variant}-50 ${disabled ? "bg-gray-200 cursor-not-allowed" : ""} ${className}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
);

export default Input;
