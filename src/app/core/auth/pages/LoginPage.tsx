import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = useLogin();

  return (
    <>
      <LoginComponent
        account={account}
        password={password}
        setAccount={setAccount}
        setPassword={setPassword}
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(account, password);
        }}
      />
    </>
  );
}
