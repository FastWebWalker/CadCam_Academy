// import arrowDown from "../../../images/sections/hero/arrow-down.svg";

// export default function ArrowDown() {
//   return (
//     <div className="absolute lg:bottom-[-3%] bottom-[-3%] right-[2vw] md:bottom-[-3%] md:w-[13.88vw] md:h-[13.88vw] w-[30vw] h-[30vw] bg-transparent border-[1px] border-[#C7C7C7] flex items-center justify-center rounded-full">
//       <img src={arrowDown} alt="arrow-down" />
//     </div>
//   );
// }

import { motion } from "framer-motion";
import arrowDown from "../../../images/sections/hero/arrow-down.svg";

export default function ArrowDown() {
  const bounceAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="absolute lg:bottom-[-3%] bottom-[-3%] right-[2vw] md:bottom-[-3%] md:w-[13.88vw] md:h-[13.88vw] w-[30vw] h-[30vw] bg-transparent border-[1px] border-[#C7C7C7] flex items-center justify-center rounded-full">
      <motion.img
        src={arrowDown}
        alt="arrow-down"
        initial="initial"
        animate="animate"
        variants={bounceAnimation}
      />
    </div>
  );
}
