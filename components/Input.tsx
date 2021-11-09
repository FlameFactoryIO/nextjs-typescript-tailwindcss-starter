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
        <div className="flex justify-center pr-3px">
          <span
            className="flex items-center leading-normal bg-white rounded rounded-r-none whitespace-no-wrap text-gray-600"
          >
            {prefix}
          </span>
        </div>
      )}
      <input
        type={type}
        className={`
          flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 px-20px relative self-center outline-none
          ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
        `}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        maxLength={maxLength}
      />
      {suffix && (
        <div className="flex pl-3px">
          <span
            className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 whitespace-no-wrap text-gray-600"
          >
            {suffix}
          </span>
        </div>
      )}
    </div>
  );
};

export default Input;
