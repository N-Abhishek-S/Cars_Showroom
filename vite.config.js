
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Cars_Showroom/', // 👈 exactly your GitHub repo name
  plugins: [react()],
});
