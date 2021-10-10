import { FC } from "react";

const Button: FC<{
  type?: "submit" | "reset" | "button",
  size?: string,
  disabled?: boolean,
  onClick?: () => void,
  variant?: "primary" | "secondary",
}> = ({
  children,
  type,
  size = "",
  disabled = false,
  onClick,
  variant = "primary",
}) => {
  // we need to add this to force the creation of the classes, and are dynamically generated
  // `bg-primary-500 hover:bg-primary-700 rounded-fullbg-primary-500 hover:bg-primary-700`;
  // `bg-secondary-500 hover:bg-secondary-700 rounded-fullbg-secondary-500 hover:bg-secondary-700`;

  let classes = `bg-${variant}-500 text-white font-bold py-2 px-4 rounded leading-24px ${size} `;
  if (!disabled) {
    classes += `hover:bg-${variant}-700 rounded-fullbg-${variant}-500 hover:bg-${variant}-700`;
  } else {
    classes += ` opacity-50 cursor-not-allowed`;
  }
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
