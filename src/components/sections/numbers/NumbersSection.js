// import ContentContainer from "../../UI/ContentContainer";
// import NumberItem from "./NumberItem";
// import { useMediaQuery } from "@mui/material";
// import { useTranslation } from "react-i18next";

// export default function NumbersSection() {
//   const isDesktop = useMediaQuery("(min-width:1024px)");
//   const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
//   const isMobile = useMediaQuery("(max-width:767px)");
//   const { t } = useTranslation();
//   return (
//     <section className="relative bg-[#111111] lg:py-[90px] md:py-[60px] py-[30px]">
//       {(isTablet || isDesktop) && (
//         <ContentContainer className="flex justify-between items-start md:flex-nowrap flex-wrap  gap-[34px] ">
//           <NumberItem
//             title="80+"
//             description={`${t("numbersSection.experience")}`}
//           />
//           <NumberItem
//             title="3500+"
//             description={`${t("numbersSection.cases")}`}
//           />
//           <NumberItem
//             title="60+"
//             description={`${t("numbersSection.partners")}`}
//           />
//           <NumberItem
//             title="1500+"
//             description={`${t("numbersSection.customers")}`}
//           />
//         </ContentContainer>
//       )}
//       {isMobile && (
//         <ContentContainer className="flex justify-between items-center md:flex-nowrap flex-wrap  gap-[34px] ">
//           <div className="flex justify-between items-center gap-[35px] w-[100%]">
//             <NumberItem
//               title="80+"
//               description={`${t("numbersSection.experience")}`}
//               className="flex-[0_1_50%]"
//             />
//             <NumberItem
//               title="3500+"
//               description={`${t("numbersSection.cases")}`}
//               className="flex-[0_1_50%]"
//             />
//           </div>
//           <div className="flex justify-between items-center gap-[35px] w-[100%]">
//             <NumberItem
//               title="60+"
//               description={`${t("numbersSection.partners")}`}
//               className="flex-[0_1_50%]"
//             />
//             <NumberItem
//               title="1500+"
//               description={`${t("numbersSection.customers")}`}
//               className="flex-[0_1_50%]"
//             />
//           </div>
//         </ContentContainer>
//       )}
//     </section>
//   );
// }

import { motion } from "framer-motion";
import ContentContainer from "../../UI/ContentContainer";
import NumberItem from "./NumberItem";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function NumbersSection() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative bg-[#111111] lg:py-[90px] md:py-[60px] py-[30px]">
      {(isTablet || isDesktop) && (
        <ContentContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-start md:flex-nowrap flex-wrap gap-[34px]">
          <motion.div variants={itemVariants}>
            <NumberItem
              title="20"
              description={`${t("numbersSection.experience")}`}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NumberItem
              title="3500"
              description={`${t("numbersSection.cases")}`}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NumberItem
              title="60"
              description={`${t("numbersSection.partners")}`}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NumberItem
              title="1500"
              description={`${t("numbersSection.customers")}`}
            />
          </motion.div>
        </ContentContainer>
      )}
      {isMobile && (
        <ContentContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-between items-center md:flex-nowrap flex-wrap gap-[34px]">
          <div className="flex justify-center items-center gap-[35px] w-[100%]">
            <motion.div variants={itemVariants}>
              <NumberItem
                title="20"
                description={`${t("numbersSection.experience")}`}
                className="flex-[0_1_50%]"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <NumberItem
                title="3500"
                description={`${t("numbersSection.cases")}`}
                className="flex-[0_1_50%]"
              />
            </motion.div>
          </div>
          <div className="flex justify-center items-center gap-[35px] w-[100%]">
            <motion.div variants={itemVariants}>
              <NumberItem
                title="60"
                description={`${t("numbersSection.partners")}`}
                className="flex-[0_1_50%]"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <NumberItem
                title="1500"
                description={`${t("numbersSection.customers")}`}
                className="flex-[0_1_50%]"
              />
            </motion.div>
          </div>
        </ContentContainer>
      )}
    </section>
  );
}
