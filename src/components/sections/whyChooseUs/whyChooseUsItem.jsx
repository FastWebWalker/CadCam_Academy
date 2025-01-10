// import Description from "../../UI/Description";

// export default function WhyChooseUsItem({ icon, title, description }) {
//   return (
//     <div className="text-white pt-[32px] flex flex-col items-start gap-4 md:max-w-[357px] border-t-[0.5px] border-[#979797]">
//       <div className="flex items-center justify-center md:w-[90px] md:h-[90px] w-[50px] h-[50px] pb-[32px] pt-[25px]">
//         <img src={icon} alt="icon-image" className="" />
//       </div>
//       <h2 className="text-[32px] font-light leading-10">{title}</h2>
//       <Description>{description}</Description>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import Description from "../../UI/Description";

export default function WhyChooseUsItem({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-white pt-[32px] flex flex-col items-start gap-4 md:max-w-[357px] relative">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-[0.5px] bg-[#979797] origin-left"
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-center md:w-[90px] md:h-[90px] w-[50px] h-[50px] pb-[32px] pt-[25px]">
        <img src={icon} alt="icon-image" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-[32px] font-light leading-10">
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}>
        <Description>{description}</Description>
      </motion.div>
    </motion.div>
  );
}
