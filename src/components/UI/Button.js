import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Button = ({
  useLink = false,
  to,
  href,
  children,
  className,
  onClick,
  variant = "fkmnnfoir",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return {
          container: `border-[#ffffff] border-[1px] bg-[#111111] `,
          content: `${
            isHovered
              ? "border-[0.5px] bg-[#ffffff] text-[#BA0315] border-[#BA0315]"
              : "border-[1px]  bg-[#BA0315] text-white border-[#ffffff]"
          }`,
          arrow: `text-white bg-[#111111]`,
        };
      case "secondary":
        return {
          container: `border-white border-[1px]  ${
            isHovered ? "bg-white" : "bg-[#111111]"
          } text-[#111111]`,
          content: `${
            isHovered ? "bg-[#111111] text-white" : "bg-white text-[#111111]"
          }`,
          arrow: `${isHovered ? "text-black" : "text-white"}`,
        };
      case "outline":
        return {
          container: "border-[#111111] bg-white",
          content: `${
            isHovered ? "bg-[#BA0315] text-white" : "bg-[#111111] text-white"
          }`,
          arrow: "text-[#111111]",
        };
      case "outline-red":
        return {
          container: `${
            isHovered ? "bg-[#BA0315]" : "bg-white"
          } border-[#BA0315]  `,
          content: `${
            isHovered ? "bg-white text-[#111111]" : "bg-[#BA0315] text-white"
          }`,
          arrow: `${isHovered ? "text-white" : "text-[#111111]"}`,
        };
      default:
        return {
          container: "border-[#BA0315] bg-transparent ",
          content: `${isHovered ? "bg-[]" : ""} text-white`,
          arrow: "text-white",
        };
    }
  };

  const variantClasses = getVariantClasses();

  const containerClasses = `
    inline-flex items-stretch rounded-full border-[0.5px]
    transition-all duration-300 ease-in-out
    ${variantClasses.container}
    ${className || ""}
  `;

  const contentClasses = `
    flex-1 px-[21.15px] py-[10.5px]
    tracking-wider
    font-normal rounded-full
    flex items-center justify-center
    transition-all duration-300 ease-in-out
    ${variantClasses.content}
  `;

  const arrowClasses = `
    p-[8px] pl-[4px]
    rounded-r-full
    flex items-center justify-center
    transition-all duration-300 ease-in-out
    ${variantClasses.arrow}
  `;

  const renderContent = () => (
    <>
      <div className={contentClasses}>{children}</div>
      <div className={arrowClasses}>
        <ArrowUpRight className="w-[24px] h-[24px]" />
      </div>
    </>
  );

  if (useLink && to) {
    return (
      <Link
        to={to}
        className={containerClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={containerClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        rel="noopener noreferrer">
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={containerClasses}>
      {renderContent()}
    </button>
  );
};

export default Button;
