import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite';
import commonjs from '@rollup/plugin-commonjs';
import { crx } from '@crxjs/vite-plugin';
import manifest from './scripts/manifest';

export default defineConfig(({ mode }) =>{
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  return {
    build: {
      outDir: 'dist', // 指定输出目录
      assetsDir: 'assets', // 静态资源目录
      rollupOptions: {
        input: {
          background: resolve(__dirname, 'src/background/background.js'),
          contentScript: resolve(__dirname, 'src/contentScript/content.js'),
          options: resolve(__dirname, 'src/options/index.html'),
          popup: resolve(__dirname, 'src/popup/index.html')
        },
        output: {
          entryFileNames: 'js/[name].bundle.js' // 控制输出文件名
          //inlineDynamicImports: true, // 将动态导入内联
          //manualChunks: undefined, // 禁止代码分块
        },
        //external: ['commonjsHelpers-*.js'], // 将辅助文件排除
      },
      commonjsOptions: {
        requireReturnsDefault: 'auto',
        transformMixedEsModules: true
        //include: [/node_modules/], // 确保 CommonJS 依赖也被转换
      }
    },
    publicDir: 'public', // 静态文件目录，自动拷贝到 dist
    plugins: [
      crx({
        manifest: manifest(env)
      }),
      // 转换 CommonJS 模块
      commonjs({
        include: ['node_modules/**'],
        exclude: ['node_modules/webextension-polyfill/**'],
        transformMixedEsModules: true,
        requireReturnsDefault: 'auto'
            //include: /node_modules/,
            // 其他配置
          })
    ],
    resolve: {
      alias: {
        'webextension-polyfill': './node_modules/webextension-polyfill/dist/browser-polyfill.js',
        'advanced-css-reset': resolve(__dirname, './node_modules/advanced-css-reset/dist/reset.css'),
        'webext-base': resolve(__dirname, './node_modules/webext-base-css/webext-base.css')
      },
    },
  }
  
});