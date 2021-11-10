import { FC, ReactNode } from "react";

const Input: FC<{
  type?: string,
  disabled?: boolean,
  className?: string,
  value?: string,
  placeholder?: string,
  onChange?: (value: string) => void,
  multiline?: boolean,
  rows?: number,
  maxLength?: number,
  prefix?: ReactNode,
  suffix?: ReactNode,
  autoComplete?: string,
  inputClassName?: string,
}> = ({
  disabled,
  className = "",
  value,
  placeholder,
  onChange = () => {},
  multiline = false,
  rows = 4,
  maxLength,
  type = "text",
  prefix,
  suffix,
  autoComplete,
  inputClassName = "",
}) => {
  if (multiline) {
    return (
      <textarea
        className={`appearance-none border rounded-10px py-10px px-10px w-full text-gray-700 leading-24px focus:outline-none ${disabled ? "bg-gray-200 cursor-not-allowed" : ""} ${className}`}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        disabled={disabled}
        maxLength={maxLength}
      />
    );
  }

  return (
    <div
      className={`w-full flex flex-wrap items-stretch relative min-h-46px bg-white items-center rounded-10px border ${disabled ? "bg-gray-200" : ""} ${className}`}
    >
      {prefix && (
        <div className="flex items-center justify-center pr-3px">
          {prefix}
        </div>
      )}
      <input
        type={type}
        autoComplete={autoComplete}
        className={`
          flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 px-20px relative self-center outline-none
          ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
          ${inputClassName}
        `}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        maxLength={maxLength}
      />
      {suffix && (
        <div className="flex items-center justify-center pl-3px">
          {suffix}
        </div>
      )}
    </div>
  );
};

export default Input;
