import React, { useEffect, useRef, useState } from "react";
import SlotCounter from "react-slot-counter";

const AnimatedNumber = ({ value, label, startValue = 0, duration = 2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-lg">
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {isVisible && (
          <SlotCounter
            value={value}
            startValue={startValue}
            duration={duration}
            animateOnVisible
            containerClassName="flex justify-center"
            charClassName="w-8 inline-flex justify-center"
          />
        )}
      </div>
      {label && (
        <div className="text-gray-600 text-center font-medium">{label}</div>
      )}
    </div>
  );
};

export default AnimatedNumber;
