import React, { createContext, useEffect } from "react";
import app from "../FirebaseConfig/firebase.config";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxios from "../Hooks/useAxios";

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const instance = useAxios();

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
  // signin with google functionlity here
  const googleProvider = new GoogleAuthProvider();
  const SingIngoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login functionlity here

  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // authentication observer
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        instance.get(`/user/${currentUser.email}`).then((res) => {
          setUser(res.data);
          setLoading(false);
        });
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsubcribe();
    };
  }, [instance]);

  const authData = {
    user,
    setUser,
    loading,
    signUp,
    updateUserProfile,
    LogOut,
    SingIngoogle,
    LogIn,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
