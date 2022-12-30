/*
 * @Author: You
 * @Date: 2022-12-30 13:43:38
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-12-30 15:12:16
 * @FilePath: \examsf:\Protest\newyear\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from "postcss-pxtorem"
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
  base: '/love/',
  server: {
    port: 4000, // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
    open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
    cors: true, // 为开发服务器配置 CORS，配置为允许跨域
      // 设置代理，根据我们项目实际情况配置
      proxy: {// 代理转发配置，用于调试环境
        '/api': {
          target: 'http://127.0.0.1:8100',
          changeOrigin: true,
          ws: true,//开启WebSocket
          rewrite: (pathStr) => pathStr.replace('/api', '')// 如果是https接口，需要配置这个参数
        },
      },
    },
    resolve: {
      alias: {
        // '@': '/src',
        '@': resolve(__dirname, './src')//设置别名
      }
    },
    build: {
      chunkSizeWarningLimit: 1500,//大文件报警阈值设置,不建议使用原文链接：https://blog.csdn.net/shinjie1210/article/details/122473024
      rollupOptions: {
        output: { //静态资源分类打包
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) { //静态资源分拆打包
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";'
        }
      },
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 37.5, // 1rem的大小
            propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
            selectorBlackList: ['norem'], // 过滤掉norem-开头的class，不进行rem转换
          })
        ]
      }
    },
  })
