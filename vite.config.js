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
        solidSeries: './solid-series.html',
        soundLight: './sound-light-aesthetics.html',
        qualityMaterials: './quality-materials.html',
        auxiliaryMaterials: './auxiliary-materials.html',
        productionConsultation: './production-consultation.html'
      }
    }
  }
})
