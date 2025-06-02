import { useEffect, useState } from "react";
import {  userProfileApi } from "../services/profileService";
import { UserInfoDto } from "../types/UserInfoDto";

export function useProfile(userId?: string, pageUserId?: string) {
  const [results, setResults] = useState<UserInfoDto>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId || !pageUserId) {
      console.warn("on userId");
      return;
    }
    setLoading(true);
    userProfileApi(userId,pageUserId)
      .then((response) => {
        if (response.data.success) {
          setResults(response.data.data);
        }
      })
      .finally(() => { setLoading(false); });
  },[userId,pageUserId]);

  return { results, loading };
}
