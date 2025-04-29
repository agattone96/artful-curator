import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFile = async (file, path) => {
  try {
    const storageRef = ref(storage, path || file.name);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error("File upload failed:", error);
    throw new Error("Failed to upload file. Please try again.");
  }
};