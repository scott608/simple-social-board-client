import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getToken, getUserFromToken, isTokenValid, removeToken, setToken } from "../utils/token";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  type User = {
    userId: string;
    account: string;
    role: string;
  };
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setIsAuthenticated(isTokenValid());
    const token = getToken();
    const valid = isTokenValid();
    if (token && valid) {
      const decoded = getUserFromToken();
      if (decoded) {
        setUser({
          userId: decoded.sub,
          account: decoded.account,
          role: decoded.role
        });
      }
      setIsAuthenticated(true);
    }
    setLoading(false);

  }, []);

  const login = (token: string) => {
    setToken(token);
    const decoded = getUserFromToken();
    if (decoded) {
      setUser({
        userId: decoded.sub,
        account: decoded.account,
        role: decoded.role,
      });
    }
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

