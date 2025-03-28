import type {PluginOption} from 'vite';

import {reactRouter} from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import {visualizer} from 'rollup-plugin-visualizer';
import {defineConfig} from 'vite';
import checker from 'vite-plugin-checker';
import {cjsInterop} from 'vite-plugin-cjs-interop';
import {compression} from 'vite-plugin-compression2';
import {VitePWA} from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import tailwindcss from 'tailwindcss';

export default defineConfig(({mode}) => {
  const isProduction = mode === 'production';

  return {
    server: {
      open: true,
      host: true
    },
    build: {
      sourcemap: true
    },
    ssr: {
      noExternal: ['rooks', 'ua-parser-js']
    },
    plugins: [
      cjsInterop({dependencies: ['@telegram-apps/telegram-ui']}),

      /* ------------------------------- On Production ------------------------------- */
      svgr(),
      compression(),
      reactRouter(),
      tsconfigPaths(),
      VitePWA({
        minify: true,
        outDir: 'build/client',
        registerType: 'prompt',
        manifestFilename: 'manifest.json',
        workbox: {
          navigateFallback: null,
          globIgnores: ['**/*.js.map'],
          globPatterns: ['**/*.{js,css,ico,gif,png,svg,woff,woff2,json,webp}']
        },
        manifest: {
          name: 'DoubleDot.',
          short_name: 'DoubleDot.',
          start_url: '/',
          display: 'standalone',
          lang: 'en-US',
          scope: '/',
          dir: 'ltr',
          orientation: 'portrait',
          theme_color: '#FFFFFF',
          icons: [
            {
              src: '/icons/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icons/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      }),

      /* ------------------------------- On Develop ------------------------------- */
      ...(!isProduction
        ? [
            checker({typescript: true}),
            visualizer({
              filename: './build/stats.html',
              open: true,
              brotliSize: true,
              sourcemap: false,
              template: 'treemap',
              title: 'DoubleDot. -> Bundle Stats'
            })
          ]
        : [])
    ].filter(Boolean) as PluginOption[],
    css: {postcss: {plugins: [tailwindcss, autoprefixer]}}
  };
});
