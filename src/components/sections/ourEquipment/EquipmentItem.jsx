// export default function EquipmentItem({ image, title }) {
//   return (
//     <article className="flex flex-col items-center gap-[16px] z-[1]">
//       <div className="w-[257px] h-auto">
//         <img src={image} alt={title} />
//       </div>
//       <h3 className="text-[24px]">{title}</h3>
//     </article>
//   );
// }

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function EquipmentItem({ image, title }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold as needed
  });

  return (
    <motion.article
      ref={ref}
      className="flex flex-col items-center gap-[16px] z-[1]"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}>
      <div className="sm:w-[257px] w-[60vw] h-auto">
        <img src={image} alt={title} />
      </div>
      <h3 className="text-[24px]">{title}</h3>
    </motion.article>
  );
}
