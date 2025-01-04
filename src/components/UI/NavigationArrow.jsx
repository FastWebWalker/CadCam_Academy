import { useState } from "react";

const NavigationArrow = ({ isLeft = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: isLeft ? "none" : "rotate(180deg)",
          transition: "all 0.3s ease",
        }}>
        <path
          d="M41.1667 26L10.8334 26"
          stroke={isHovered ? "#FF0000" : "#BA0315"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 41.1668L10.8333 26.0002L26 10.8335"
          stroke={isHovered ? "#FF0000" : "#BA0315"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default NavigationArrow;
