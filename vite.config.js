import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [],
  server: {
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        detail: path.resolve(__dirname, 'detail.html'),
      },
    },
  },
});