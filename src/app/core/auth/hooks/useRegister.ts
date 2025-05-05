import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { RegisterDto } from "../types/RegisterDto";
import toast from "react-hot-toast";


export function useRegister() {
  const navigate = useNavigate();

  return async (registerDto: RegisterDto) => {
    try {
      const res = await register(registerDto);
      if (res.data.success) {
        toast.success("註冊成功，請登入");
        navigate("/auth/login");
        return { success: true };
      }
      return { success: false, message: res.data.message };
    } catch  {
      return { success: false };
    }
  };
}


