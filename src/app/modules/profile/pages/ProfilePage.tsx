import { useAuth } from "app/core/auth/hooks/useAuth";
import ProfileHeaderComponent from "../components/ProfileHeaderComponent";
import { useProfile } from "../hooks/useProfile";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { user } = useAuth();
  const { pageUserId } = useParams(); // 這邊會抓到 URL 裡的 :pageUserId
  const { results } = useProfile(user?.userId, pageUserId);

  return (
    <ProfileHeaderComponent profileData={results}></ProfileHeaderComponent>
  );


}