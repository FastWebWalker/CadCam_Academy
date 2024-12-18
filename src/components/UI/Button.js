import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const ArrowIcon = ({ variant }) => {
  const getIconColor = () => {
    switch (variant) {
      case "red-white":
        return "arrow-icon-white-red";
      case "white-white":
        return "arrow-icon-black";
      case "black-red":
        return "arrow-icon-black-white";
      default:
        return "arrow-icon-black";
    }
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`arrow-icon ${getIconColor()}`}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4525 6.54748C17.7091 6.79082 17.7146 7.19067 17.4647 7.44059L7.46471 17.4406C7.21479 17.6905 6.80413 17.6958 6.54746 17.4525C6.29079 17.2092 6.28532 16.8093 6.53523 16.5594L16.5352 6.55939C16.7851 6.30947 17.1958 6.30414 17.4525 6.54748Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.35132 6.99999C6.35132 6.65118 6.64173 6.36841 6.99997 6.36841H17C17.3582 6.36841 17.6486 6.65118 17.6486 6.99999V17C17.6486 17.3488 17.3582 17.6316 17 17.6316C16.6417 17.6316 16.3513 17.3488 16.3513 17V7.63157H6.99997C6.64173 7.63157 6.35132 7.3488 6.35132 6.99999Z"
      />
    </svg>
  );
};

const Button = ({
  useLink,
  to,
  href,
  children,
  className,
  variant = "default", // 'default', 'red', 'black'
  outlined = false,
  withoutArrow = false,
}) => {
  const baseClasses =
    "inline-flex justify-center items-center gap-[6px] rounded-[30px] px-[20px] py-[9px] font-normal cursor-pointer transition-all duration-300";

  const getVariantClasses = () => {
    if (outlined) {
      return "bg-transparent border border-white text-white hover:bg-white hover:text-black";
    }

    switch (variant) {
      case "red-white":
        return "bg-redCustom border border-redCustom text-white hover:bg-transparent hover:text-red-700 hover:border hover:border-red-700";
      case "white-white":
        return "bg-white text-black border border-white hover:bg-transparent hover:text-white hover:border hover:border-white";
      case "black-red":
        return "bg-transparent text-black border border-black hover:bg-redCustom hover:text-white hover:border hover:border-redCustom";
      default:
        return "bg-white text-black border border-white hover:bg-transparent hover:text-white hover:border hover:border-white";
    }
  };

  const combinedClasses = `${baseClasses} ${getVariantClasses()} ${
    className || ""
  }`;

  if (useLink) {
    return (
      <Link to={to} className={combinedClasses}>
        <span>{children}</span>
        <ArrowIcon variant={variant} />
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={combinedClasses}
      target="_blank"
      rel="noopener noreferrer">
      <span>{children}</span>
      {withoutArrow ? "" : <ArrowIcon variant={variant} />}
    </a>
  );
};

export default Button;
