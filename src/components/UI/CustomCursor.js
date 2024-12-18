import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Colors from the dental health theme
  const colors = {
    red: "#A40004",
    grey: "#808080",
    white: "#FFFFFF",
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    // Adding hover effect for interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, input, select, textarea, [role='button']"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="pointer-events-none fixed z-[9999]" // Ensuring it's above all elements
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: clicked ? "30px" : hovered ? "25px" : "20px",
          height: clicked ? "30px" : hovered ? "25px" : "20px",
          backgroundColor: clicked
            ? colors.red
            : hovered
            ? colors.grey
            : colors.white,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.3s ease-out, height 0.3s ease-out, background-color 0.3s ease-out",
          opacity: 0.9,
          boxShadow: `0 0 10px ${colors.grey}40`,
          border: `2px solid ${colors.grey}`,
        }}
      />

      {/* Secondary ring */}
      <div
        className="pointer-events-none fixed z-[9998]" // Secondary ring just below main cursor
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: clicked ? "50px" : hovered ? "45px" : "30px",
          height: clicked ? "50px" : hovered ? "45px" : "30px",
          border: `2px solid ${colors.red}`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out",
          opacity: clicked ? 0.8 : hovered ? 0.6 : 0.4,
        }}
      />

      {/* Hide default cursor */}
      <style>
        {`
          * {
            cursor: none !important;
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
