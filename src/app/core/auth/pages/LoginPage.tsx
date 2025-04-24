import { useState } from "react";
import { login } from "../services/authApi";
import { LoginDto } from "../types/auth";
import LoginComponent from "../components/Login.component";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  // 頁面跳轉
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    const payload: LoginDto = { account, password };

    try {
      const res = await login(payload);
      if (res.data.success) {
        // 記錄登入者 token
        localStorage.setItem("token", res.data.data); 
        // alert("登入成功，歡迎 " + res.data.data);
        navigate("/home"); // ✅ 登入成功後跳轉
      } else {
        alert(res.data.message);
      }
    } catch {
      alert("登入失敗，請稍後再試");
    }
  };

  return (
      <LoginComponent
        account={account}
        password={password}
        setAccount={setAccount}
        setPassword={setPassword}
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      />
  );
}
