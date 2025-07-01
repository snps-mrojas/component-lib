import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './lib/index.ts', // Entry point for your library
      name: 'ComponentLib',
      fileName: (format) => `component-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Mark peer dependencies as external
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});