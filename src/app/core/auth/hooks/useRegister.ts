import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { RegisterDto } from "../types/RegisterDto";


export function useRegister() {
    const navigate = useNavigate();
  
    return async (registerDto: RegisterDto) => {
      try {
        const res = await register(registerDto);
        if (res.data.success) {
          alert("註冊成功，請登入");
          navigate("/auth/login");
        } else {
            alert(res.data.message);
        }
      } catch {
        alert('註冊失敗，請稍後再試');
      }
    };
  }


