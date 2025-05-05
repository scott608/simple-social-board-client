import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthRouter from "./core/auth/AuthRouter";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/auth/login" replace />} />

                <Route path="/auth/*" element={<AuthRouter />} />


            </Routes>
        </BrowserRouter>
    );
}
