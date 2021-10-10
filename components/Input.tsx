import { FC } from "react";

const Input: FC<{
  disabled?: boolean,
  value?: string,
  placeholder?: string,
  onChange?: () => void,
}> = ({
  disabled,
  value,
  placeholder,
  onChange,
}) => (
  <input
    style={{marginTop: -1}}
    className={`appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-24px focus:outline-none focus:shadow-outline ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
);

export default Input;
