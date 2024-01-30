import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

export default defineConfig({
  base: '/sr_novel',
  plugins: [svgr(), react()],
  server: {
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
