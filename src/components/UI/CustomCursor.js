// import React, { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [clicked, setClicked] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   // Colors from the dental health theme
//   const colors = {
//     red: "#BA0315",
//     grey: "#111111",
//     white: "#FFFFFF",
//   };

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => setClicked(true);
//     const handleMouseUp = () => setClicked(false);

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   useEffect(() => {
//     const handleMouseEnter = () => setHovered(true);
//     const handleMouseLeave = () => setHovered(false);

//     // Adding hover effect for interactive elements
//     const interactiveElements = document.querySelectorAll(
//       "button, a, input, select, textarea, [role='button']"
//     );

//     interactiveElements.forEach((element) => {
//       element.addEventListener("mouseenter", handleMouseEnter);
//       element.addEventListener("mouseleave", handleMouseLeave);
//     });

//     return () => {
//       interactiveElements.forEach((element) => {
//         element.removeEventListener("mouseenter", handleMouseEnter);
//         element.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Main cursor */}
//       <div
//         className="pointer-events-none fixed z-[9999]" // Ensuring it's above all elements
//         style={{
//           top: `${position.y}px`,
//           left: `${position.x}px`,
//           width: clicked ? "30px" : hovered ? "25px" : "20px",
//           height: clicked ? "30px" : hovered ? "25px" : "20px",
//           backgroundColor: clicked
//             ? colors.red
//             : hovered
//             ? colors.grey
//             : colors.white,
//           borderRadius: "50%",
//           transform: "translate(-50%, -50%)",
//           transition:
//             "width 0.3s ease-out, height 0.3s ease-out, background-color 0.3s ease-out",
//           opacity: 0.9,
//           boxShadow: `0 0 10px ${colors.grey}40`,
//           border: `2px solid ${colors.grey}`,
//         }}
//       />

//       {/* Secondary ring */}
//       <div
//         className="pointer-events-none fixed z-[9998]" // Secondary ring just below main cursor
//         style={{
//           top: `${position.y}px`,
//           left: `${position.x}px`,
//           width: clicked ? "50px" : hovered ? "45px" : "30px",
//           height: clicked ? "50px" : hovered ? "45px" : "30px",
//           border: `2px solid ${colors.red}`,
//           borderRadius: "50%",
//           transform: "translate(-50%, -50%)",
//           transition:
//             "width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out",
//           opacity: clicked ? 0.8 : hovered ? 0.6 : 0.4,
//         }}
//       />

//       {/* Hide default cursor */}
//       <style>
//         {`
//           * {
//             cursor: none !important;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default CustomCursor;

import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const colors = {
    red: "#BA0315",
    grey: "#111111",
    white: "#FFFFFF",
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
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

  const cursorStyle = {
    position: "fixed",
    zIndex: 9999,
    pointerEvents: "none",
    top: `${position.y}px`,
    left: `${position.x}px`,
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      {/* Main cursor */}
      <div
        style={{
          ...cursorStyle,
          width: clicked ? "35px" : hovered ? "25px" : "20px",
          height: clicked ? "35px" : hovered ? "25px" : "20px",
          backgroundColor: clicked
            ? colors.red
            : hovered
            ? colors.grey
            : colors.white,
          borderRadius: "50%",
          transition: "all 0.2s ease-out",
          opacity: 0.95,
          boxShadow: clicked
            ? `0 0 20px ${colors.red}80`
            : `0 0 10px ${colors.grey}40`,
          border: `2px solid ${clicked ? colors.white : colors.grey}`,
        }}
      />

      {/* Secondary ring with pulse effect */}
      <div
        style={{
          ...cursorStyle,
          zIndex: 9998,
          width: clicked ? "60px" : hovered ? "50px" : "35px",
          height: clicked ? "60px" : hovered ? "50px" : "35px",
          border: `2px solid ${colors.red}`,
          borderRadius: "50%",
          transition: "all 0.4s ease-out",
          opacity: clicked ? 0.7 : hovered ? 0.5 : 0.3,
          animation: clicked ? "pulse 0.6s ease-out infinite" : "none",
        }}
      />

      {/* Hide default cursor */}
      <style>
        {`
          * {
            cursor: none !important;
          }

          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              transform: translate(-50%, -50%) scale(1.2);
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
