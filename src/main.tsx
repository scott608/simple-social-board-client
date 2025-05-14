import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import AppRouter from 'app/AppRouter.tsx'
import { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from 'app/core/auth/contexts/AuthProvider'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-right" />
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
)
