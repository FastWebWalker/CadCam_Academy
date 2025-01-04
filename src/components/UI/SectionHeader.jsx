import { motion } from "framer-motion";
import Title from "./Title";
import Description from "./Description";

export default function WhyChooseUs({
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
    <div
      className={`${
        textIsWhite === true ? "text-white" : "text-[#111111]"
      } flex justify-between lg:items-center lg:mb-[46px] md:mb-[40px] mb-[32px] lg:flex-row [@media(max-width:1024px)]:flex-col"`}>
      <motion.div
        className={`lg:mb-[24px]`}
        initial={{ opacity: 0, x: -50 }}
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { duration: 0.6 } }
            : { opacity: 0, x: -50 }
        }>
        <Title
          firstPart={titleFirstPart}
          secondPart={titleSecondPart}
          pl={titlePl}
        />
      </motion.div>

      <motion.div
        className="lg:max-w-[557px] lg:text-right"
        initial={{ opacity: 0, x: 50 }}
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { duration: 0.6 } }
            : { opacity: 0, x: 50 }
        }>
        {isDescription && <Description>{description}</Description>}
        {!isDescription && descriptionPart}
      </motion.div>
    </div>
  );
}
