import { createContext } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
}
//https://ithelp.ithome.com.tw/articles/10252519
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

