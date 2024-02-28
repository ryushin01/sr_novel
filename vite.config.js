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
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@modules', replacement: '/src/modules' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@svg', replacement: '/src/svg' },
      { find: '@data', replacement: '/src/assets/data' },
      { find: '@scss', replacement: '/src/assets/scss' },
      { find: '@images', replacement: '/public/images' },
      { find: '@customHooks', replacement: '/src/customHooks' },
      { find: '@lottie', replacement: '/src/lottie' },
    ],
  },
});
