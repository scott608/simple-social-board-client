import { apiErrorInstance } from "@shared/interceptors/apiErrorInstance";
import { getToken } from "app/core/auth/utils/token";
import axios from "axios";

// 建立 axios 實例
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT, // 請求逾時設定（毫秒）
  headers: {
    "Content-Type": "application/json"
  }
});


/**攔截器**/


// 添加 token 到請求header
api.interceptors.request.use(config => {
  const token = getToken();
  // 如果token存在，則將其添加到請求header中
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// errors攔截器
apiErrorInstance(api);

export default api;
