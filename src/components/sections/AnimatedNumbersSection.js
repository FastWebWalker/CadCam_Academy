import React, { useEffect, useRef, useState } from "react";
import SlotCounter from "react-slot-counter";

const AnimatedNumbersSection = ({ numbers }) => {
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
    <div ref={containerRef} className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">In the Numbers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {numbers.map((number, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {isVisible && (
                <>
                  <SlotCounter
                    value={number.value}
                    startValue={0}
                    duration={2}
                    animateOnVisible
                    containerClassName="flex justify-center"
                    charClassName="w-8 inline-flex justify-center"
                  />
                  <span>+</span>
                </>
              )}
            </div>
            <div className="text-gray-600 text-center font-medium">
              {number.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedNumbersSection;
