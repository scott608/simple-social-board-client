import { useState } from "react";
import { register } from "../services/authApi";
import RegisterComponent from "../components/RegisterComponent";
import { RegisterDto } from "../types/RegisterDto";
import { useNavigate } from "react-router-dom";
import { Gender } from "@shared/types/enum/Gender";

export default function Register() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState<Gender>("Male");
  const [birthday, setBirthday] = useState("");
  const payload: RegisterDto = { 
    account, 
    password,
    name,
    email,
    gender,
    birthday
  };

  const navigate = useNavigate(); 


  const handleRegister = async () => {
    try {
      const res = await register(payload);
      if (res.data.success) {
        alert("註冊成功，請登入");
        navigate("/auth/login");
      } else {
        alert(res.data.message);
      }
    } catch {
      alert("註冊失敗，請稍後再試");
    }
  };

  return (
      <RegisterComponent
        account={account}
        password={password}
        name={name}
        email={email}
        gender={gender}
        birthday={birthday}
        setAccount={setAccount}
        setPassword={setPassword}
        setName={setName}
        setEmail={setEmail}
        setGender={setGender}
        setBirthday={setBirthday}
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      />
  );
}
