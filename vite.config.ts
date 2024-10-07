import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: [
        { find: 'shared', replacement: path.resolve(__dirname, 'src/shared') },
        { find: 'entities', replacement: path.resolve(__dirname, 'src/entities') },
        { find: 'features', replacement: path.resolve(__dirname, 'src/features') },
        { find: 'widgets', replacement: path.resolve(__dirname, 'src/widgets') },
        { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
        { find: 'app', replacement: path.resolve(__dirname, 'src/app') },
    ],
},
})
