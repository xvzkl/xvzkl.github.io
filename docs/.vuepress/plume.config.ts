/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import collections from './collections'
import navbar from './navbar'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
 logo: '/plume.svg',           // 浅色模式导航栏 logo
  logoDark: '/plume_bark.svg',  // 深色模式导航栏 logo（放入 .vuepress/public 目录）
  // 页脚配置
    /**
   * 阅读辅助线：鼠标所在行/元素旁显示蓝色竖条，辅助视觉聚焦。
   * 可选值：false | 'left' | 'right' | 'mask'
   * @see https://theme-plume.vuejs.press/config/theme/#readaid
   */
  readAid: 'left',
  footer: {
    message: '<span class="reg-icon-xvzk">®</span><span class="footer-xvzk"></span>',        // ← 替换"由 VuePress 和 ..."这一行
    copyright: '© 2026 墨染残阳 | <span class="icp-icon-xvzk"></span> <a href="https://beian.miit.gov.cn/" target="_blank" style="color: var(--vp-c-text-2); font-size: 1em; font-weight: bold; text-decoration: none;">浙ICP备2024141841</a>',          // ← 第二行版权文字（可选）
  },

  social: [
    { icon: 'github', link: '/' },
  ],

  /**
   * @see https://theme-plume.vuejs.press/config/theme/#profile
   */
  profile: {
    avatar: '/墨染残阳.svg',
    name: '墨染残阳',
    description: '个人博客',
  },

  navbar,
  collections,

})
