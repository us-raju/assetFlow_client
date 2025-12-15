import React, { createContext, useEffect } from "react";
import app from "../FirebaseConfig/firebase.config";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signUp by email password functionality here
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Logout functionlity here
  const LogOut = () => {
    return signOut(auth);
  };
  // update profile
  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // authentication observer
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    loading,
    signUp,
    updateUserProfile,
    LogOut
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
