import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthRouter from "./core/auth/AuthRouter";
import HomeRouter from "@modules/home/HomeRouter";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFoundPage from "@modules/common/pages/NotFoundPage";
import ProfileRouter from "@modules/profile/ProfileRouter";
import { ProtectedRoute } from "@shared/components/ProtectedRoute";
import GuestRoute from "@shared/components/GuestRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route element={<ProtectedRoute><DefaultLayout /></ProtectedRoute>}>
          <Route path="/profile/*" element={<ProfileRouter />} />
          <Route path="/home/*" element={<HomeRouter />} />
        </Route>

        <Route path="/auth/*" element={<GuestRoute><AuthRouter /></GuestRoute>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
