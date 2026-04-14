import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          strategies: 'injectManifest',
          srcDir: '.',
          filename: 'sw.ts',
          registerType: 'autoUpdate',
          includeAssets: ['20260414-135459.jpg', 'apple-touch-icon.png'],
          manifest: {
            name: 'Neon Gemini Runner',
            short_name: 'Gemini Runner',
            description: 'Neon cyber runner experience powered by Gemini.',
            start_url: '/',
            scope: '/',
            display: 'standalone',
            background_color: '#050011',
            theme_color: '#050011',
            icons: [
              {
                src: '/192x192.png',
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: '/512x512.png',
                sizes: '512x512',
                type: 'image/png'
              },
              {
                src: '/512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable'
              }
            ]
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
