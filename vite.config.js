import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Cars_Showroom/', // 👈 this MUST match your repo name
});
