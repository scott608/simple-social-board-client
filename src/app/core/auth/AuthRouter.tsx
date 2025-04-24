// src/app/modules/user/UserRouter.tsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage"; // 或 @modules/user/pages/Login
import Register from "./pages/RegisterPage";

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      {/* 你也可以加 register 或 profile */}
      <Route path="register" element={<Register />} />

    </Routes>
  );
}
