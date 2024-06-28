import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import pxtorem from 'postcss-pxtorem'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 37.5,
           propList: ["*"]
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/mixin.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
