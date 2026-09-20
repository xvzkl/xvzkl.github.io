---
title: 侧边栏
createTime: 2026/09/20 22:43:30
permalink: /guide/fgeepwuv/
---

# 侧边栏：创建方法详解

本页演示的就是你正在看到的左侧导航栏。下面是在本项目（VuePress 2 + vuepress-theme-plume）中创建它的完整方法。

## 1. 原理

Plume 主题的侧边栏由「集合（Collection）」驱动：在 `.vuepress/collections.ts` 中定义一个 `type: 'doc'` 的集合，并通过 `sidebar` 字段描述导航结构。页面链接前缀与集合的 `linkPrefix` 匹配时，该页面就会显示这套侧边栏。

## 2. 配置位置

- 集合与侧边栏：`docs/.vuepress/collections.ts`（本示例为 `guideDoc`）
- 集合注册：`docs/.vuepress/plume.config.ts` 中的 `collections`
- 顶部导航入口：`docs/.vuepress/navbar.ts`

## 3. 侧边栏条目字段（SidebarItem）

| 字段 | 作用 |
| --- | --- |
| `text` | 显示文本 |
| `link` | 链接地址（集合内为相对 `dir` 的路径） |
| `icon` | 图标，支持 Iconify 名称（如 `mdi:magnify`）或图片路径 |
| `prefix` | 子项链接的公共前缀 |
| `items` | 下一级侧边栏，可为数组或 `'auto'`（按目录自动生成） |
| `collapsed` | 该分组是否默认折叠 |
| `badge` | 徽章，如 `{ text: '新', type: 'danger' }` |

## 4. 本示例用到的结构技巧

- **可折叠分组**：顶层对象带 `text + items`，渲染为带箭头的分组标题（如「从这里开始」「写作」「功能」）。
- **二级嵌套**：「集合」条目同时带 `link` 和 `items`，展开后显示「post 集合」「doc 集合」。
- **默认折叠的子项**：「markdown」设置 `collapsed: true`，显示为右箭头，点击才展开。
- **分组分隔线**：在顶层数组中插入 `{ text: '分隔线', link: '---' }`（link 含三个以上连续 `-` 即渲染为分隔线）。
- **整体折叠策略**：集合上的 `sidebarCollapsed` 控制默认全折叠（`true`）或全展开（`false`），单条 `collapsed` 可覆盖。
- **自动生成**：`sidebar: 'auto'` 或分组内 `items: 'auto'` 可按目录结构自动生成，目录名数字前缀（如 `1.guide`）只用于排序不显示。

## 5. 另一种方式：全局 sidebar

简单站点可不使用集合，直接在主题配置中写：

```ts
export default defineThemeConfig({
  sidebar: {
    '/guide/': [
      { text: '主题介绍', link: 'intro' },
      { text: '侧边栏', link: 'sidebar' },
    ],
  },
})
```

键为路径前缀，值为该前缀下页面使用的侧边栏。

## 6. 生效与排查

- 修改 `collections.ts` 后需重启 `pnpm docs:dev`（集合配置不参与热更新）。
- 侧边栏不显示时，检查页面 permalink 是否以集合 `linkPrefix` 开头。
