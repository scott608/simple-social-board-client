import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"; 
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // 支援 tsconfig 路徑別名
    tailwindcss(), // Configure the Vite plugin
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
} as UserConfig)
