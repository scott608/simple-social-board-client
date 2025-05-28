import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

export default function ProfileRouter() {
  return (
    <Routes>
      <Route path=":userId" element={<ProfilePage />} />

    </Routes>
  );
}
