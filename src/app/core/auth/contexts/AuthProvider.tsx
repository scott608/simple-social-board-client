import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { isTokenValid, removeToken, setToken } from "../utils/token";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsAuthenticated(isTokenValid());
    setLoading(false);

  }, []);

  const login = (token: string) => {
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

