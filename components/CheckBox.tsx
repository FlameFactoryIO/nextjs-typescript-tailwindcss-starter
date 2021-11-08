import { FC } from "react";

const CheckBox: FC<{
  disabled?: boolean,
  className?: string,
  value?: boolean,
  onChange?: (value: boolean) => void,
  variant?: "primary" | "black" | "green",
}> = ({
  disabled,
  className = "",
  value,
  onChange = () => {},
  variant = "primary",
  children,
}) =>
  <label className={`select-none inline-flex items-center ${className}`}>
    <input
      type="checkbox"
      className={`
        appearance-none rounded-md w-16px h-16px mr-5px w-full text-${variant}-500 leading-24px
        focus:outline-none focus:ring focus:ring-${variant}-50
        border border-gray-300 checked:border-transparent focus:outline-none
        ${disabled ?
          `checked:bg-${variant}-200 hover:text-${variant}-200 bg-gray-200 cursor-not-allowed` :
          `checked:bg-${variant}-500 `}
      `}
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
      disabled={disabled}
    />
    {children}
  </label>;
;


export default CheckBox;
