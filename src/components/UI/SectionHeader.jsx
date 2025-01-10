import { motion } from "framer-motion";
import Title from "./Title";
import Description from "./Description";
import { useTranslation } from "react-i18next";

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
  isLongDescription,
}) {
  const { i18n } = useTranslation();
  return (
    <motion.div
      className={`${
        textIsWhite ? "text-white" : "text-[#111111]"
      } flex flex-col gap-6 justify-between  lg:mb-12 md:mb-10 mb-8 lg:flex-row ${
        isLongDescription &&
        (i18n.language === "en"
          ? "[@media(max-width:1024px)]:flex-col lg:items-center"
          : "[@media(max-width:1350px)]:flex-col [@media(min-width:1350px)]:items-center")
      }`}
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
        className={`${
          i18n.language === "en"
            ? "lg:max-w-[500px] lg:text-right"
            : "[@media(min-width:1350px)]:max-w-[500px] [@media(min-width:1350px)]:text-right"
        } `}
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
