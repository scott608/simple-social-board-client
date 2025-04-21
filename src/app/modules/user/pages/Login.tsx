import { useState } from "react";
import { login } from "../services/userApi";
import { LoginDto, UserInfo } from "../types/user";

export default function Login() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<UserInfo | null>(null);

  const handleLogin = async () => {
    const payload: LoginDto = { account, password };

    try {
      const res = await login(payload);
      if (res.data.success) {
        setUser(res.data.data); // 記錄登入者資料
        alert("登入成功，歡迎 " + res.data.data.name);
      } else {
        alert(res.data.message);
      }
    } catch {
      alert("登入失敗，請稍後再試");
    }
  };

  return (
    <div>
      <h2>登入</h2>
      <input
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        placeholder="帳號"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="密碼"
      />
      <button onClick={handleLogin}>登入</button>

      {user && (
        <div style={{ marginTop: "1rem" }}>
          ✅ 已登入：{user.name}（{user.account}）
        </div>
      )}
    </div>
  );
}
