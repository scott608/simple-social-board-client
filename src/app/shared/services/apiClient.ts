import axios from "axios";

// 建立 axios 實例
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5182", // 你後端的 base URL
  timeout: 10000, // 請求逾時設定（毫秒）
  headers: {
    "Content-Type": "application/json"
  }
});

// 可選：加入攔截器（例如附加 token、自動轉錯誤）
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
