"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function signin(data) {
    // LOGIN LOGIC
    console.log("Signin data:", data);
  }

  function signup(data) {
    // SIGNUP LOGIC
    console.log("Signup data:", data);
  }

  return (
    <AuthContext.Provider value={{ signin, signup, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
