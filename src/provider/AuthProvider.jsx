import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log(user);

  const createUser = (emaiL,password) => {
    return createUserWithEmailAndPassword(auth, emaiL, password);
  }
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const logOut = () => {
    return signOut(auth);
}
  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const authData = {
    user,
    logOut,
    setUser,
    createUser,
    signIn,
    updateUser
  }
  return <AuthContext value={authData}>
    {children}
  </AuthContext>;
};

export default AuthProvider; 



