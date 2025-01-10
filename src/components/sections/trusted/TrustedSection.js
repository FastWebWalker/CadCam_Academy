import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContinuousCarousel from "../../animation/ContinuosCarousel";
import ContentContainer from "../../UI/ContentContainer";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SectionHeader from "../../UI/SectionHeader";

export default function TrustedSection() {
  const { i18n, t } = useTranslation();

  // Animation variants for the whole section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Trigger the animation only the first time

  // Set up IntersectionObserver for the section
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger animation when 20% of the section is in view
  });

  // State to track if the specific animation has already triggered
  const [hasTriggered, setHasTriggered] = useState(false);

  if (inView && !hasTriggered) {
    setHasTriggered(true);
  }

  return (
    <motion.div
      id="partners"
      ref={ref} // Attach observer to the section
      className="lg:pt-[90px] md:pt-[60px] pt-[30px] lg:pb-[60px] pb-[30px] bg-[#111111]"
      initial="hidden"
      // animate={inView ? "visible" : "hidden"} // Trigger animation based on visibility
      animate={hasTriggered ? "visible" : inView ? "visible" : "hidden"}>
      <ContentContainer>
        <SectionHeader
          titleFirstPart={t("trustedSection.title1")}
          titleSecondPart={t("trustedSection.title2")}
          isDescription={true}
          description={t("trustedSection.description")}
          inView={inView}
          titlePl={`${
            i18n.language === "en"
              ? "lg:pl-[40%]"
              : "[@media(min-width:1350px)]:pl-[40%]"
          }`}
          textIsWhite={true}
          isLongDescription={true}
        />

        {/* Continuous Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            inView
              ? { opacity: 1, transition: { duration: 0.8 } }
              : { opacity: 0 }
          }>
          <ContinuousCarousel />
        </motion.div>
      </ContentContainer>
    </motion.div>
  );
}
