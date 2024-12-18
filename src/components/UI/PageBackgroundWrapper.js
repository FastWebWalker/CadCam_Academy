import React from "react";

const PageBackgroundWrapper = ({
  backgroundImage,
  children,
  overlay = true,
  overlayColor = "rgba(0, 0, 0, 0.4)",
  className = "",
}) => {
  return (
    <div
      className={`relative min-h-screen w-full ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}>
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
      )}

      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
};

export default PageBackgroundWrapper;
