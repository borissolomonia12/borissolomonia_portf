import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    outDir: process.env.BUILD_PATH || 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  base: process.env.VITE_BASE_URL || '/'
})
