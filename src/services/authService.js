// filepath: /Users/allisongattone/Desktop/artcurator/artful-curator/src/services/authService.js
import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);