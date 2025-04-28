// filepath: /Users/allisongattone/Desktop/artcurator/artful-curator/src/hooks/useUpload.js
import { useState } from "react";
import { uploadFile } from "../services/uploadService";

export function useUpload() {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");

  const upload = async (file) => {
    setProgress(0);
    setUrl("");
    const downloadUrl = await uploadFile(file);
    setUrl(downloadUrl);
    setProgress(100);
  };

  return { upload, progress, url };
}