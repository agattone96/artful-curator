import { motion } from "framer-motion";
import React from "react";

const UploadForm = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onUpload) onUpload(file);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <label htmlFor="file-upload" aria-label="Upload a file">
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          aria-describedby="file-upload-description"
        />
      </label>
      <p id="file-upload-description">Choose a file to upload.</p>
    </motion.form>
  );
};

export default UploadForm;