import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Quantum-Leap-Financial/', // Add your repository name here
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});