import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html',
        watch: './watch.html',
        iphone: './iphone.html',
        ipad: './ipad.html',
        macbook: './macbook.html',
        visionpro: './vision-pro.html'
      }
    }
  }
})
