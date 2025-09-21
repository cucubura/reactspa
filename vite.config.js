import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base "./" makes assets work when uploaded anywhere (file servers, subpaths)
export default defineConfig({
  plugins: [react()],
  base: './'
})
