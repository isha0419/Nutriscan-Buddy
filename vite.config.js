import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo192.png', 'logo512.png'],
      manifest: {
        name: 'NutriScan Buddy',
        short_name: 'NutriScan',
        description: 'Scan food labels and get personalized health recommendations',
        theme_color: '#4CAF50',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '.',
        icons: [
          {
            src: 'nutrition-plan.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'nutrition-plan.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
