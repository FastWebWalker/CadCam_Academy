import React from "react";
import { Parallax } from "react-parallax";

const ParallaxImage = ({
  src,
  alt,
  speed = 1.1,
  height = "700px",
  children,
  className = "",
}) => {
  return (
    <Parallax
      blur={0}
      bgImage={src}
      bgImageAlt={alt}
      strength={speed * 200}
      renderLayer={(percentage) => (
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: `translate(-50%, ${percentage * 50}px)`,
            width: "100%",
          }}>
          {children}
        </div>
      )}>
      <div
        style={{ height }}
        className={`flex items-center justify-center ${className}`}>
        {children}
      </div>
    </Parallax>
  );
};

export default ParallaxImage;
