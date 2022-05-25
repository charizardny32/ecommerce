import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
	plugins: [react()],
	server: {
    proxy: {
      // string shorthand
      '/': 'http://localhost:4000'
    }
  }
});
