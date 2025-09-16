import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      'kerhope.loca.lt',
      'rotten-rabbit-51.loca.lt',
      'beige-coats-talk.loca.lt',
    ]
  }
})
