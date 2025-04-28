// filepath: /Users/allisongattone/Desktop/artcurator/artful-curator/src/hooks/useAuth.js
import { useEffect, useState } from "react";
import { auth } from "../services/firebase";

export function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);
  return user;
}