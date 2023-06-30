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
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  server:{
    host:true,
    port:4000,    //设置服务启动端口
    // open:true,    //设置服务启动时是否自动打开浏览器
    cors:true,    //允许跨域

    //设置代理
    proxy:{
        // 字符串简写写法
        // '/api': 'http://localhost:8060',
        // // 选项写法
        // '/urlApi':{
        // 	target:'http://localhost:8060',
        // 	changeOrigin: true,       //是否跨域
        // 	ws: true,            //是否代理 websockets
        // 	secure: true,          //是否https接口
        // 	// rewrite:(path) => path.replace('/urlApi/','/')
        // 	rewrite: (path) => path.replace(/^\/urlApi/, '')
        // },
        // 正则表达式写法
        '^/urlApi/.*': {
            target: 'http://localhost:8060',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/urlApi/, '')
        },
    }
}

})
