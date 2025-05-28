import { useEffect, useState } from "react";
import { homeApi } from "../services/homeService";
import { HomeDto } from "../types/HomeDto";

export function useHome(userId?: string) {
  const [results, setResults] = useState<HomeDto>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) {
      console.warn("on userId");
      return;
    }
    setLoading(true);
    homeApi(userId)
      .then((response) => {
        if (response.data.success) {
          setResults(response.data.data);
        }
      })
      .finally(() => { setLoading(false); });
  },[userId]);

  return { results, loading };
}
