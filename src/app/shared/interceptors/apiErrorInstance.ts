import { removeToken } from 'app/core/auth/utils/token';
import type { AxiosInstance, AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

interface ErrorResponseData {
  message?: string;
}

export function apiErrorInstance(api: AxiosInstance): void {
  api.interceptors.response.use(
    (response) => response,
    (err) => {
      console.error('API Error:', err); // Log the error for debugging
      const error = err as AxiosError;

      //Token 過期
      if (error.response?.status === 401) {
        toast.error('登入已過期，請重新登入');
        removeToken(); 
        window.location.href = '/auth/login';
        return Promise.reject(error);
      }

      //其他錯誤：統一錯誤訊息
      const data = error.response?.data as ErrorResponseData;
      const message = data?.message || error.message || '發生未知錯誤!!!';
      toast.error(message);

      return Promise.reject(error);
    }
  );
}
