import { createContext } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
  user: {
    userId: string;
    account: string;
    role: string;
  } | null;
}
//https://ithelp.ithome.com.tw/articles/10252519
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

