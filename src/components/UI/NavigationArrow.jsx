import { useState } from "react";

const NavigationArrow = ({
  isLeft = true,
  className,
  forceHover,
  startColor,
  endColor,
  startBorderColor,
  endBorderColor,
  size,
  padding,
}) => {
  const [localHover, setLocalHover] = useState(false);
  const isHovered = forceHover || localHover;

  return (
    <div
      className={`cursor-pointer ${className} ${padding} border rounded-full transition-all duration-300 ease-out group hover:scale-105 ${
        isHovered ? `${endBorderColor}` : `${startBorderColor}`
      }`}
      onMouseEnter={() => setLocalHover(true)}
      onMouseLeave={() => setLocalHover(false)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ease-out ${
          isLeft
            ? `${isHovered ? "-translate-x-1" : "translate-x-0"}`
            : `${isHovered ? "translate-x-1" : "translate-x-0"} rotate-180`
        }`}>
        <path
          d="M41.1667 26L10.8334 26"
          stroke={isHovered ? endColor : startColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />
        <path
          d="M26 41.1668L10.8333 26.0002L26 10.8335"
          stroke={isHovered ? endColor : startColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
};

export default NavigationArrow;
