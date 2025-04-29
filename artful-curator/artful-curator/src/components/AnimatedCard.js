import { motion } from "framer-motion";
import React from "react";

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="card"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;