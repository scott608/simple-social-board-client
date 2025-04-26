import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserRouter from "@modules/user/UserRouter";
import AuthRouter from "./core/auth/AuthRouter";
import HomeRouter from "@modules/home/HomeRouter";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFoundPage from "@modules/common/pages/NotFoundPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        <Route element={<DefaultLayout />}>
          <Route path="/user/*" element={<UserRouter />} />
          <Route path="/home/*" element={<HomeRouter />} />
        </Route>

        <Route path="/auth/*" element={<AuthRouter />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
