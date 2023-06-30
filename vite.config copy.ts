import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import OptimizationPersist from "vite-plugin-optimize-persist";
import PkgConfig from "vite-plugin-package-config";

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
      '@/': `${pathSrc}/`
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    PkgConfig(),
    OptimizationPersist(),
    AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ]
    }),
  ],
  optimizeDeps: {
    include: [
      "element-plus/es",
      "element-plus/es/components/config-provider/style/css",
      "element-plus/es/components/container/style/css",
      "element-plus/es/components/main/style/css",
      "element-plus/es/components/header/style/css",
      "element-plus/es/components/date-picker/style/css",
      "element-plus/es/components/drawer/style/css",
      "element-plus/es/components/image/style/css",
      "element-plus/es/components/image/style/css",
      "element-plus/es/components/table/style/css",
      "element-plus/es/components/table-column/style/css",
      "element-plus/es/components/input/style/css",
      "element-plus/es/components/dropdown/style/css",
      "element-plus/es/components/popover/style/css",
      "element-plus/es/components/dropdown-item/style/css",
      "element-plus/es/components/dropdown-menu/style/css",
      "element-plus/es/components/pagination/style/css",
      "element-plus/es/components/scrollbar/style/css",
      "element-plus/es/components/dialog/style/css",
      "element-plus/es/components/loading/style/css",
      "element-plus/es/components/tabs/style/css",
      "element-plus/es/components/tab-pane/style/css",
      "element-plus/es/components/select/style/css",
      "element-plus/es/components/option/style/css",
      "vue",
      "pinia",
      "jquery",
      "sass",
      "vue-router",
      "echarts",
      "tailwindcss/plugin",
    ],
  },
})
