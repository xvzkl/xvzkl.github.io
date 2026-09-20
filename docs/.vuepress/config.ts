/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import path from 'node:path'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '墨染残阳',
  description: '墨染残阳-文档站点',
  templateDev: path.resolve(__dirname, './templates/dev.html'),
 
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/plume.svg' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({
   // 内容加密配置
    encrypt: {
      // more options...
    }

}),

  
})
