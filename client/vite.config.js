import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {   /* If /api encountered (as in api/auth/signup), then target should be changed to lh 3000 */
        target: 'http://localhost:3000',
        secure: false,      /* Bec. http request, not https */
      },
    },
  },
  plugins: [react()],
});
