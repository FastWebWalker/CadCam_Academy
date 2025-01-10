// import { motion } from "framer-motion";
// import Title from "./Title";
// import Description from "./Description";

// export default function SectionHeader({
//   titleFirstPart,
//   titleSecondPart,
//   description,
//   inView,
//   titlePl,
//   isDescription,
//   descriptionPart,
//   textIsWhite,
// }) {
//   return (
//     <div
//       className={`${
//         textIsWhite === true ? "text-white" : "text-[#111111]"
//       } flex flex-col gap-[24px] justify-between lg:items-center lg:mb-[46px] md:mb-[40px] mb-[32px] lg:flex-row [@media(max-width:1024px)]:flex-col"`}>
//       <motion.div
//         className={`lg:mb-[24px]`}
//         initial={{ opacity: 0, x: -50 }}
//         animate={
//           inView
//             ? { opacity: 1, x: 0, transition: { duration: 0.6 } }
//             : { opacity: 0, x: -50 }
//         }>
//         <Title
//           firstPart={titleFirstPart}
//           secondPart={titleSecondPart}
//           pl={titlePl}
//         />
//       </motion.div>

//       <motion.div
//         className="lg:max-w-[500px] lg:text-right"
//         initial={{ opacity: 0, x: 50 }}
//         animate={
//           inView
//             ? { opacity: 1, x: 0, transition: { duration: 0.6 } }
//             : { opacity: 0, x: 50 }
//         }>
//         {isDescription && <Description>{description}</Description>}
//         {!isDescription && descriptionPart}
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import Title from "./Title";
import Description from "./Description";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function SectionHeader({
  titleFirstPart,
  titleSecondPart,
  description,
  inView,
  titlePl,
  isDescription,
  descriptionPart,
  textIsWhite,
}) {
  return (
    <motion.div
      className={`${
        textIsWhite ? "text-white" : "text-[#111111]"
      } flex flex-col gap-6 justify-between lg:items-center lg:mb-12 md:mb-10 mb-8 lg:flex-row [@media(max-width:1024px)]:flex-col`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}>
      <motion.div className="lg:mb-6" variants={titleVariants}>
        <Title
          firstPart={titleFirstPart}
          secondPart={titleSecondPart}
          pl={titlePl}
        />
      </motion.div>

      <motion.div
        className="lg:max-w-[500px] lg:text-right"
        variants={descriptionVariants}>
        {isDescription ? (
          <Description>{description}</Description>
        ) : (
          descriptionPart
        )}
      </motion.div>
    </motion.div>
  );
}
