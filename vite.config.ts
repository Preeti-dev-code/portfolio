import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
      base: '/portfolio/',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
    };
});
