// src/app/modules/user/UserRouter.tsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; // 或 @modules/user/pages/Login

export default function UserRouter() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      {/* 你也可以加 register 或 profile */}
    </Routes>
  );
}
