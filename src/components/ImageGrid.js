import { motion } from "framer-motion";
import React from "react";

const ImageGrid = React.memo(({ images }) => (
  <motion.div
    className="image-grid"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {images &&
      images.map((img, idx) => (
        <motion.img
          key={idx}
          src={img.url}
          alt={img.description || "Artwork"}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      ))}
  </motion.div>
));

export default ImageGrid;