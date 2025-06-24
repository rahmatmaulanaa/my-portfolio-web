import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ganti 'username' dan 'repo-name' sesuai dengan GitHub kamu
export default defineConfig({
  base: '/my-portfolio-web/',
  plugins: [react()],
});
