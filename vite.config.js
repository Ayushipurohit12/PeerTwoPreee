// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'http://192.168.1.16:8080',
        target: 'https://excommunicable-zoey-strophically.ngrok-free.dev',
         
        changeOrigin: true,
        secure: false,
      },
    },
  },
})