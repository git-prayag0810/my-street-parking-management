import React, { createContext, useContext, useState } from "react";
import type { User } from "../types";

interface AuthContextType {
  user: User | null;
  login: (username: string, role: "admin" | "user") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType |undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, role: "admin" | "user") =>
    setUser({ username, role });

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;