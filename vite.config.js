import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Cars_Showroom/',
  plugins: [react()],
 build: {
  outDir: 'dist'
}

});
