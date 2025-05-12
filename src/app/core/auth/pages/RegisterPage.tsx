import { useState } from "react";
import RegisterComponent from "../components/RegisterComponent";
import { RegisterDto } from "../types/RegisterDto";
import { Gender } from "@shared/types/enum/Gender";
import { useRegister } from "../hooks/useRegister";

export default function Register() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState<Gender>(0);
  const [birthday, setBirthday] = useState("");
  const payload: RegisterDto = { 
    account, 
    password,
    name,
    email,
    gender,
    birthday
  };

  const registerHandler = useRegister();

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
          registerHandler(payload);
        }}
      />
  );
}
