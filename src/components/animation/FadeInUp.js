import React from "react";
import { motion } from "framer-motion";

const FadeInUp = ({ children, delay = 0, duration = 0.5 }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}>
      {children}
    </motion.div>
  );
};

export default FadeInUp;
