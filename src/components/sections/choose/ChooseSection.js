import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContentContainer from "../../UI/ContentContainer";
import Title from "../../UI/Title";
import ChooseItem from "./ChooseItem";
import one from "../../../images/sections/choose/1.svg";
import two from "../../../images/sections/choose/2.svg";
import three from "../../../images/sections/choose/3.svg";
import four from "../../../images/sections/choose/4.svg";
import { useTranslation } from "react-i18next";

export default function ChooseSection() {
  const { t } = useTranslation();

  // Animation variants for the whole section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation variants for spans
  const spanVariantsX = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { opacity: 0.2, scaleX: 1, transition: { duration: 1.5 } },
  };
  // Animation variants for spans
  const spanVariantsY = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 0.2, scaleY: 1, transition: { duration: 1.5 } },
  };

  // Set up IntersectionObserver for the section
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger animation when 20% of the section is in view
  });
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger animation when 20% of the section is in view
  });

  return (
    <motion.section
      id="whyWe"
      ref={sectionRef} // Attach observer to the section
      className="relative bg-white lg:py-[104px] md:py-[60px] py-[30px]"
      variants={sectionVariants}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"} // Trigger animation based on visibility
    >
      <div ref={ref}>
        {/* Animated Spans */}
        <motion.span
          className="absolute w-[0.5px] lg:bg-redCustom h-[100%] top-0 left-[50%]"
          variants={spanVariantsY}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}></motion.span>
        <motion.span
          className="absolute w-[50%] lg:bg-redCustom h-[0.5px] top-[55px] left-[50%]"
          variants={spanVariantsX}
          animate={inView ? "visible" : "hidden"}
          initial="hidden"></motion.span>
        <motion.span
          className="absolute w-[50%] lg:bg-redCustom h-[0.5px] bottom-[55px] left-0"
          variants={spanVariantsX}
          animate={inView ? "visible" : "hidden"}
          initial="hidden"></motion.span>

        <ContentContainer>
          <Title className="lg:mb-[46px] md:mb-[40px] mb-[20px]">
            {t("chooseSection.title")}
          </Title>
          <motion.div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[125px] lg:gap-y-[80px] md:gap-y-[84px] gap-y-[32px]">
            <ChooseItem
              image={one}
              title={`${t("chooseSection.items.0.title")}`}
              description={`${t("chooseSection.items.0.description")}`}
              imageCorrection="lg:left-[1%]"
            />
            <ChooseItem
              image={two}
              title={`${t("chooseSection.items.1.title")}`}
              description={`${t("chooseSection.items.1.description")}`}
              imageCorrection="lg:-left-5"
            />
            <ChooseItem
              image={three}
              title={`${t("chooseSection.items.2.title")}`}
              description={`${t("chooseSection.items.2.description")}`}
              imageCorrection="lg:left-[-2%]"
            />
            <ChooseItem
              image={four}
              title={`${t("chooseSection.items.3.title")}`}
              description={`${t("chooseSection.items.3.description")}`}
              imageCorrection="lg:-left-10"
            />
          </motion.div>
        </ContentContainer>
      </div>
    </motion.section>
  );
}
