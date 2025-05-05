import { useNavigate } from "react-router-dom";
import { login, setToken } from "../services/authService";


export function useLogin() {
  const navigate = useNavigate();

  return async (account: string, password: string) => {
    try {
      const res = await login({ account, password });
      if (res.data.success) {
        setToken(res.data.data);
        navigate('/home');
        return { success: true };
      }
      return { success: false, message: res.data.message };
    } catch {
      return { success: false };
    }
  };
}


