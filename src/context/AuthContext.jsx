// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase-config';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  sendPasswordResetEmail,
  updatePassword // <- Importe a nova função
} from 'firebase/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // --- NOVA FUNÇÃO ---
  const updateUserPassword = (newPassword) => {
    if (auth.currentUser) {
      return updatePassword(auth.currentUser, newPassword);
    }
    // Lança um erro se não houver usuário logado
    return Promise.reject(new Error("Nenhum usuário logado para alterar a senha."));
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    resetPassword,
    updateUserPassword, // <- Exponha a nova função
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};