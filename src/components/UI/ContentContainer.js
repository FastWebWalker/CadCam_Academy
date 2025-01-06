import React from "react";

const ContentContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto md:max-w-[95vw] max-w-[90vw] ${className}`}
      style={{
        width: "calc(100% - 5%)", // 5% padding as default for flexibility
      }}>
      {children}
    </div>
  );
};

export default ContentContainer;
