//幫我設置approuter.tsx的路由
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserRouter from "@modules/user/UserRouter";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" replace />} />
        <Route path="/user/*" element={<UserRouter />} />
      </Routes>
    </BrowserRouter>
  );
}
