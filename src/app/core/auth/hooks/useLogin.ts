import { useNavigate } from "react-router-dom";
import { loginApi } from "../services/authService";
import { useAuth } from "./useAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  return async (account: string, password: string) => {
    try {
      const res = await loginApi({ account, password });

      if (res.data.success) {
        login(res.data.data);
        navigate('/home');

        return { success: true };
      }
      return { success: false, message: res.data.message };
    } catch {
      return { success: false };
    }
  };
}



