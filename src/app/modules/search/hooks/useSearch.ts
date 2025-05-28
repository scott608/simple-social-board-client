import { searchAll } from "../services/searchService";
import { useEffect, useState } from "react";
import { UserBasicDto } from "@modules/profile/types/UserBasicDto";


export function useSearch(query: string) {
  const [results, setResults] = useState<UserBasicDto[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      setLoading(true);
      searchAll(query)
        .then((res) => {
          if (res.data.success) {
            setResults(res.data.data);
          }
        })
        .finally(() => setLoading(false));
    }, 300); // debounce 時間

    return () => clearTimeout(timeout);
  }, [query]);

  return { results, loading };
}


