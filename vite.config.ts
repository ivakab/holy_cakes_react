import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export const pathResolver = (p: string) => resolve(__dirname, '.', p)

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].ts',
        entryFileNames: 'assets/[name].[hash].ts',
      },
    },
  },
})
