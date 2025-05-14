import { useAuth } from 'app/core/auth/hooks/useAuth';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }: { children: ReactNode }) {
  //驗證是否已經登入
  const { isAuthenticated,loading } = useAuth();
  //loading 為 true 時，表示正在驗證中
  if (loading) return null; // Spinner預定

  //登入後，導向首頁
  //未登入，導向登入頁
  return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
}