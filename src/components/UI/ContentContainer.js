import React from "react";

const ContentContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto max-w-[90%] sm:max-w-[calc(1440px-80px)] ${className}`}
      style={{
        width: "calc(100% - 5%)", // 5% padding as default for flexibility
      }}>
      {children}
    </div>
  );
};

export default ContentContainer;
