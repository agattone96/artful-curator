import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <h1>Artful Curator</h1>
      {/* Add navigation links here */}
    </motion.nav>
  );
};

export default Navbar;