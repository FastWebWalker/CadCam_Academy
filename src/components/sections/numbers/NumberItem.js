// // // export default function NumberItem({ title, description, className }) {
// // //   return (
// // //     <div
// // //       className={`flex flex-col gap-4 max-w-[279px] justify-center ${className}`}>
// // //       <h2 className="lg:text-[80px] md:text-[40px] text-[34px] text-white">
// // //         {title}
// // //       </h2>
// // //       <p className="text-white max-w-[196px] sm:text-[16px] text-[12px]">
// // //         {description}
// // //       </p>
// // //     </div>
// // //   );
// // // }

// // // import { motion } from "framer-motion";

// // // export default function NumberItem({ title, description, className }) {
// // //   return (
// // //     <motion.div
// // //       whileHover={{ scale: 1.05 }}
// // //       className={`flex flex-col gap-4 max-w-[279px] justify-center ${className}`}>
// // //       <motion.h2
// // //         className="lg:text-[80px] md:text-[40px] text-[34px] text-white"
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 0.5 }}>
// // //         {title}
// // //       </motion.h2>
// // //       <motion.p
// // //         className="text-white max-w-[196px] sm:text-[16px] text-[12px]"
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 0.5, delay: 0.2 }}>
// // //         {description}
// // //       </motion.p>
// // //     </motion.div>
// // //   );
// // // }

// // import { motion } from "framer-motion";
// // import { useEffect, useRef, useState } from "react";
// // import SlotCounter from "react-slot-counter";

// // export default function NumberItem({ title, description, className }) {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setIsVisible(true);
// //           }
// //         });
// //       },
// //       { threshold: 0.5 }
// //     );

// //     if (containerRef.current) {
// //       observer.observe(containerRef.current);
// //     }

// //     return () => {
// //       observer.disconnect();
// //     };
// //   }, []);

// //   return (
// //     <motion.div
// //       ref={containerRef}
// //       whileHover={{ scale: 1.05 }}
// //       className={`flex flex-col gap-4  xl:min-w-[260px] min-w-[50%] justify-center ${className}`}>
// //       <motion.h2
// //         className="lg:text-[80px] md:text-[40px] text-[34px] text-white"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.5 }}>
// //         {isVisible ? (
// //           <div className="flex justify-start items-center">
// //             <SlotCounter
// //               value={title} // Final number
// //               startValue={0} // Starting value
// //               duration={1.5} // Animation duration in seconds
// //               animateOnVisible
// //               containerClassName="inline-flex justify-center"
// //               charClassName="inline-block"
// //             />
// //             +
// //           </div>
// //         ) : (
// //           0 // Fallback value before animation starts
// //         )}
// //       </motion.h2>
// //       <motion.p
// //         className="text-white lg:max-w-[196px] md:max-w-[170px] sm:max-w-[170px]  max-w-[130px] sm:text-[16px] text-[12px]"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.5, delay: 0.2 }}>
// //         {description}
// //       </motion.p>
// //     </motion.div>
// //   );
// // }

// import { motion, useSpring, useTransform, animate } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const SmoothCounter = ({ value }) => {
//   const springConfig = {
//     damping: 30,
//     stiffness: 70,
//     mass: 1,
//     restDelta: 0.001,
//   };

//   const count = useSpring(0, springConfig);
//   const rounded = useTransform(count, (latest) => Math.round(latest));

//   useEffect(() => {
//     const animation = animate(count, value, {
//       duration: 2,
//       ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for smooth acceleration/deceleration
//       onPlay: () => {
//         // Ensure we start from 0
//         count.set(0);
//       },
//     });

//     return animation.stop;
//   }, [value, count]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="inline-flex items-baseline">
//       {rounded}
//     </motion.div>
//   );
// };

// export default function NumberItem({ title, description, className }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 } // Reduced threshold for earlier animation trigger
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <motion.div
//       ref={containerRef}
//       whileHover={{ scale: 1.05 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className={`flex flex-col gap-4 xl:min-w-[260px] min-w-[50%] justify-center ${className}`}>
//       <motion.h2
//         className="lg:text-[80px] md:text-[40px] text-[34px] text-white"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}>
//         <div className="flex justify-start items-center">
//           {isVisible ? (
//             <>
//               <SmoothCounter value={parseInt(title)} />
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.3,
//                   delay: 0.5,
//                   type: "spring",
//                   stiffness: 200,
//                   damping: 15,
//                 }}
//                 className="ml-1">
//                 +
//               </motion.span>
//             </>
//           ) : (
//             <span>0</span>
//           )}
//         </div>
//       </motion.h2>
//       <motion.p
//         className="text-white lg:max-w-[196px] md:max-w-[170px] sm:max-w-[170px] max-w-[130px] sm:text-[16px] text-[12px]"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.6,
//           delay: 0.3,
//           type: "spring",
//           stiffness: 100,
//           damping: 15,
//         }}>
//         {description}
//       </motion.p>
//     </motion.div>
//   );
// }

import { motion, useSpring, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SmoothCounter = ({ value }) => {
  const springConfig = {
    damping: 30,
    stiffness: 70,
    mass: 1,
    restDelta: 0.001,
  };

  const count = useSpring(0, springConfig);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 2,
      ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for smooth acceleration/deceleration
      onPlay: () => {
        // Ensure we start from 0
        count.set(0);
      },
    });

    return animation.stop;
  }, [value, count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-baseline">
      {rounded}
    </motion.div>
  );
};

export default function NumberItem({ title, description, className }) {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust threshold as needed
    triggerOnce: true, // Trigger only once
  });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`flex flex-col gap-4 xl:min-w-[260px] min-w-[50%] justify-center ${className}`}>
      <motion.h2
        className="lg:text-[80px] md:text-[40px] text-[34px] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <div className="flex justify-start items-center">
          {inView ? (
            <>
              <SmoothCounter value={parseInt(title)} />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="ml-1">
                +
              </motion.span>
            </>
          ) : (
            <span>0</span>
          )}
        </div>
      </motion.h2>
      <motion.p
        className="text-white lg:max-w-[196px] md:max-w-[170px] sm:max-w-[170px] max-w-[130px] sm:text-[16px] text-[12px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}>
        {description}
      </motion.p>
    </motion.div>
  );
}
