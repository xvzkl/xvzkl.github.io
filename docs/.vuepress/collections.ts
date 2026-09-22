/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。
 *
 * Collections 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Collections，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Collections，然后在与 Collection 相关的 Markdown 文件中，自动生成 permalink。
 *
 * collection 的  type 为 `post` 时，表示为 文档列表类型（即没有侧边导航栏，有文档列表页）
 * 可用于实现如 博客、专栏 等以文章列表聚合形式的文档集合 （内容相对碎片化的）
 *
 * collection 的 type 为 `doc` 时，表示为文档类型（即有侧边导航栏）
 * 可用于实现如 笔记、知识库、文档等以侧边导航栏形式的文档集合 （内容强关联、成体系的）
 * 如果发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 Collection 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `collection.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineCollections` 是用于定义 collection 集合的帮助函数
 * - `defineCollection` 是用于定义单个 collection 配置的帮助函数
 *
 * 通过 `defineCollection` 定义的 collection 配置，应该填入 `defineCollections` 中
 */
import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const blog = defineCollection({
  type: 'post',
  dir: 'blog',
  title: 'Blog',
  link: '/blog/',
})

const demoDoc = defineCollection({
  type: 'doc',
  dir: 'demo',
  linkPrefix: '/demo',
  title: 'Demo',
  sidebar: ['', 'foo', 'bar'],
  // 根据文件结构自动生成侧边栏
  // sidebar: 'auto',
  sidebarCollapsed: true, 
})


/**
 * 「指南」文档集合：演示截图中那种 分组 + 图标 + 嵌套 + 折叠 的侧边栏。
 * - 带 `items` 的条目渲染为可折叠分组（如「从这里开始」「写作」「功能」）
 * - 同时带 `link` 和 `items` 的条目（如「集合」）既是页面又有子级
 * - `collapsed: true` 让子分组默认收起（如「markdown」）
 * - `link: '---'` 渲染为分组之间的分隔线
 * - `icon` 使用 Iconify 图标名（集合:名称），也可用 / 开头的本地图片路径
 */
const guideDoc = defineCollection({
  type: 'doc',
  dir: 'guide',
  linkPrefix: '/guide',
  title: '指南',
  sidebarCollapsed: false, // 顶层分组默认展开
  sidebar: [
    {
      text: '从这里开始',
      icon: 'mdi:lightbulb-on-outline',
      collapsed: true, // 默认折叠，显示为右箭头，点击展开
      items: [
        { text: '主题介绍', link: 'intro', icon: 'mdi:text-box-outline' },
        { text: '安装与使用', link: 'install', icon: 'mdi:layers-outline' },
        { text: '项目结构', link: 'structure', icon: 'mdi:file-tree-outline' },
        {
          text: '集合',
          link: 'collection',
          icon: 'mdi:view-grid-plus-outline',
          items: [
            { text: 'post 集合', link: 'collection-post', icon: 'mdi:post-outline' },
            { text: 'doc 集合', link: 'collection-doc', icon: 'mdi:file-document-outline' },
          ],
        },
        { text: '侧边栏', link: 'sidebar', icon: 'mdi:dock-left' },
        { text: '编写文章', link: 'write', icon: 'mdi:note-edit-outline' },
        { text: 'frontmatter', link: 'frontmatter', icon: 'mdi:code-json' },
        { text: '国际化', link: 'i18n', icon: 'mdi:web' },
        { text: '部署', link: 'deploy', icon: 'mdi:rocket-outline' },
        { text: '构建优化', link: 'build', icon: 'mdi:package-variant-closed' },
      ],
    },
    {
      text: '写作',
      icon: 'mdi:pencil-ruler',
      prefix: '/writing',
      items: [
        {
          text: 'markdown',
          icon: 'mdi:markdown-outline',
          prefix: 'markdown',
          collapsed: true, // 默认折叠，显示为右箭头，点击展开
          items: [
            { text: '基础语法', link: 'basic' },
            { text: '扩展语法', link: 'extend' },
          ],
        },
        { text: '代码块', link: 'code-block', icon: 'mdi:code-tags' },
        { text: '代码演示', link: 'code-demo', icon: 'mdi:monitor' },
        { text: '图表', link: 'chart', icon: 'mdi:chart-line' },
        { text: '资源嵌入', link: 'embed', icon: 'mdi:play-box-multiple-outline' },
      ],
    },
    { text: '分隔线', link: '---' }, // 分组之间的水平分隔线
    {
      text: '功能',
      icon: 'mdi:cube-outline',
      prefix: '/features',
      items: [
        { text: '图标', link: 'icons', icon: 'mdi:emoticon-happy-outline' },
        { text: '内容搜索', link: 'search', icon: 'mdi:magnify' },
        { text: '图片预览', link: 'image-preview', icon: 'mdi:image-outline' },
        { text: '评论', link: 'comments', icon: 'mdi:comment-text-outline' },
        { text: '公告板', link: 'announcement', icon: 'mdi:bullhorn-outline' },
      ],
    },
  ],
})

export default defineCollections([
  blog,
  demoDoc,
  guideDoc,
])
