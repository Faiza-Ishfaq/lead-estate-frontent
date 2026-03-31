"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

    useEffect(() => {
    async function fetchUser() {
        try {
        const res = await fetch("http://localhost:4000/api/auth/me", {
            credentials: "include", 
        });

        const data = await res.json();

        if (data.success) {
            setUser(data.user);
        } else {
            setUser(null);
        }
        } catch (err) {
        console.error(err);
        setUser(null);
        }
    }

    fetchUser();
    }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);