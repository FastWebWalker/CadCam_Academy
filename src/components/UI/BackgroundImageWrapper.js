import React from "react";

const BackgroundImageWrapper = ({ imageUrl, children, style, className }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        ...style, // Allow custom styles to override defaults
      }}>
      {children}
    </div>
  );
};

export default BackgroundImageWrapper;
