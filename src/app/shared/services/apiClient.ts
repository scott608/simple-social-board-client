import axios from "axios";

// 建立 axios 實例
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5182", // 你後端的 base URL
  timeout: 10000, // 請求逾時設定（毫秒）
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  // 如果token存在，則將其添加到請求header中
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 驗證過期的話自動導向登入頁
    if (error.response?.status === 401) {
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default api;
