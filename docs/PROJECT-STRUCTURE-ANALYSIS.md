# 项目结构与优化建议（trickle_apple）

本文档整理当前代码库的项目结构、存在的问题与建议的简化/优化方案，便于后续统一技术栈与减少维护成本。

## 背景与目标
- 当前仓库同时存在两种实现形态：
  - 以 CDN 加载 React/Babel/Tailwind 的多页面实现（根目录 *.html + *-app.js + components/）
  - 以 Vite + React 模块化实现的源码目录（src/**）
- 目标：统一到单一、可维护的现代构建链（建议 Vite 多页面 MPA），消除重复代码与配置，规范资源加载与构建产物。

## 结构总览（简化）
```
root
├─ *.html                     # 多页面模板（index/watch/iphone/ipad/macbook/vision-pro）
├─ *-app.js                   # 对应页面的 CDN 版 React 入口
├─ components/                # CDN 版 React 组件（无模块导入导出）
├─ styles.css                 # 全局样式（与 src/index.css 存在重复）
├─ src/                       # Vite + React 模块化源码
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  └─ components/
├─ trickle/                   # 资产、说明与规则
│  ├─ assets/*.json           # 3D 模型/配置 JSON（含示例模型）
│  ├─ notes/*.md
│  └─ rules/*.md
├─ vite.config.js             # Vite MPA 配置（已包含多入口）
├─ vite-dev.config.js         # Dev 变体（引用 *-dev.html，仓库中不存在这些文件）
├─ tailwind.config.js         # Tailwind 配置（content 覆盖 src 和 components）
├─ postcss.config.js          # PostCSS 配置
├─ package.json               # 包配置（生产/演示脚本）
├─ package-dev.json           # 包配置（开发变体，含 eslint 与 @google/model-viewer）
└─ README*.md, LICENSE        # 文档与许可
```

## 运行与构建方式（现状）
- CDN 方案：HTML 中直接引入 React/ReactDOM/Babel/Tailwind CDN，脚本以 `type="text/babel"`/普通 `<script>` 运行。
- Vite 方案：提供了 `vite.config.js`（MPA 输入为根目录 *.html），但 `src/main.jsx` 仍依赖全局 React/ReactDOM，未使用模块化导入；`vite-dev.config.js` 指向的 `*-dev.html` 不存在，暂不可用。

## 主要问题清单
- 双栈混用与重复实现：
  - `components/*`（CDN 版）与 `src/components/*`（模块化）功能重叠，如 `ProductViewer` 重复。
  - `styles.css` 与 `src/index.css` 重复。
- 包与配置重复：
  - 同时存在 `package.json` 与 `package-dev.json`，脚本与依赖不一致。
  - 存在 `vite-dev.config.js` 与 `index-dev.html`（后者已不存在），配置失效。
- 模块入口不规范：
  - `src/main.jsx` 未使用 `import` 导入 React、App 与样式，不符合 Vite 期望。
- Tailwind 重复注入：
  - HTML 中使用 Tailwind CDN，同时仓库存在 PostCSS + Tailwind 构建链，造成样式来源不唯一、难以裁剪。
- 文案与编码：
  - 若干中文出现乱码字符（如 `�?`），建议统一 UTF-8 并修正文案与 meta。
- 外部依赖：
  - React、Babel、Tailwind、Model Viewer 大量走 CDN，生产可控性与首屏性能受限。

## 优化目标
- 单一技术栈：统一到 Vite + React + Tailwind 的 MPA；移除 CDN 运行时依赖（React/Babel/Tailwind）。
- 入口清晰：每个页面有明确的模块化入口（`src/pages/<page>/main.jsx`）。
- 组件去重：仅保留 `src/components`，合并 CDN 版组件的差异化逻辑。
- 样式统一：仅保留 `src/index.css` 与 Tailwind 构建链，移除 HTML 中的 Tailwind CDN。
- 依赖收敛：仅保留一份 `package.json`；将 `@google/model-viewer` 纳入依赖并通过模块引入。

## 推荐方案 A：统一到 Vite MPA

### 保留与移除
- 保留：`vite.config.js`, `src/**`, `trickle/**`, `tailwind.config.js`, `postcss.config.js`, 各 *.html（作为 MPA 模板）。
- 移除：`components/**`（CDN 版）、所有 `*-app.js`、`index-dev.html`、`vite-dev.config.js`、`package-dev.json`、`styles.css`（样式合并至 `src/index.css`）。

### 入口与脚本
- 为每个页面新增模块化入口（示例）：
  ```jsx
  // src/pages/watch/main.jsx
  import React from 'react'
  import { createRoot } from 'react-dom/client'
  import '../../index.css'
  import App from '../../App'

  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  ```
- 在对应 HTML 中仅保留根节点与模块脚本：
  ```html
  <div id="root"></div>
  <script type="module" src="/src/pages/watch/main.jsx"></script>
  ```

### 组件合并
- 将 `components/MaterialController.js` 的光照/曝光动态设置合入 `src/components/ProductViewer.jsx`，避免重复组件。
- 统一 `ColorSelector`、`LoadingScreen` 实现，只保留 `src/components/*`。

### Tailwind 统一
- 移除 HTML 中 Tailwind CDN；保留 PostCSS 构建链。
- `tailwind.config.js` 的 `content` 精简为：`./index.html`, `./src/**/*.{js,jsx,ts,tsx}`。

### 依赖与脚本
- 仅保留 `package.json`，合并 `package-dev.json` 中的差异：
  - 添加 `@google/model-viewer`，`eslint` 相关依赖与脚本（可选）。
  - 建议脚本集：`dev`, `build`, `preview`, `deploy`（`gh-pages` 可选）。
- 在代码中通过模块引入 Model Viewer：
  ```js
  import '@google/model-viewer'
  ```

### 页面组织
- 延续当前 MPA：使用 `vite.config.js` 的 `build.rollupOptions.input` 管理多入口（index/watch/iphone/ipad/macbook/vision-pro）。
- 若后续希望合并为 SPA，可再引入路由器，现阶段保留 MPA 成本最低。

### 资源与性能
- 字体与图标：可将关键字体与图标本地化或可控 CDN，并使用 `preload`。
- 3D 模型：CDN 加载保留并增加兜底与超时；必要时提供本地占位。
- 按需加载：对非首屏内容做懒加载或拆包；适度使用 `modulepreload`。

### 文档整合
- 合并 `README-DEVELOPMENT.md`、`DEVELOPMENT-SETUP.md` 到 `README.md`，去冗余内容。
- 替换 `package.json` 与 `README.md` 内的占位链接与用户名。

### 质量与一致性
- 引入 `eslint` + `prettier`（`package-dev.json` 中已罗列），保持一致的风格与规则。
- 可选逐步迁移 TypeScript 以提升可维护性与类型安全。

### 目标结构（示例）
```
src/
├─ pages/
│  ├─ index/main.jsx
│  ├─ watch/main.jsx
│  ├─ vision-pro/main.jsx
│  ├─ iphone/main.jsx
│  ├─ ipad/main.jsx
│  └─ macbook/main.jsx
├─ components/
│  ├─ LoadingScreen.jsx
│  ├─ ColorSelector.jsx
│  ├─ ProductViewer.jsx   # 合并材质/光照控制逻辑
│  └─ VisionProViewer.jsx
├─ App.jsx
├─ index.css
└─ ...
```

## 最小落地改造步骤（Checklist）
1. 删除：`vite-dev.config.js`、`package-dev.json`、`index-dev.html`、`styles.css`、`components/**`、所有 `*-app.js`。
2. 修正 `src/main.jsx` 为模块化导入（`import React...`、`import App...`、`import './index.css'`）。
3. 为各页面新增 `src/pages/<page>/main.jsx` 并在对应 HTML 挂载 `<script type="module" ...>`。
4. 移除 HTML 中的 React、Babel、Tailwind CDN，仅保留必要的第三方（如暂时保留 Model Viewer，随后改模块导入）。
5. `tailwind.config.js` 精简 `content`，确保只扫描 `index.html` 与 `src/**/*`。
6. 在 `src/components` 合并 `MaterialController` 能力并删除重复组件。
7. 在 `package.json` 合并/补齐依赖与脚本，添加 `@google/model-viewer` 并在组件中 `import`。
8. 统一中文文案与编码为 UTF-8，修复乱码字符与 meta。

## 风险与兼容性
- 移除 Babel/React CDN 后，所有页面必须通过 Vite 构建/预览（`npm run dev/preview`）。
- 如有直接依赖全局变量的旧逻辑，需要迁移到模块化环境（通常为引入/导出与挂载点变更）。
- Tailwind CDN 移除后，必须确保所有类名能被 `tailwind.config.js` 捕获到并参与构建（避免动态拼接丢失）。

## 后续可选优化
- 将部分公共片段抽为布局组件（导航栏等）。
- 按路由或页面维度做代码分割，优化首屏加载。
- 3D 模型加载体验优化：Skeleton/占位 + 重试/超时/降级方案。
- 引入 `vite-plugin-*` 做更多体验优化（图标、字体内联、压缩等）。

## 附录：关键文件备注
- `vite.config.js`：已配置 MPA 输入（`index/watch/iphone/ipad/macbook`），可继续扩展到 `vision-pro`。
- `src/main.jsx`：需改为模块化导入，当前实现依赖全局 React/ReactDOM，不符合 Vite 规范。
- `tailwind.config.js`：`content` 同时覆盖 `./src/**/*` 与 `./components/**/*`，合并后应去掉后者并移除 HTML 的 CDN。
- `package.json` 与 `package-dev.json`：建议合并为一份，收敛依赖与脚本，删除 dev 变体。
- `index.html` 等页面：移除 React/Babel/Tailwind CDN，仅保留 `<div id="root">` 与模块脚本。

---

如需，我可以基于本方案提交一轮“最小改造”代码变更，确保在 `npm run dev` 下所有页面工作正常，并移除 CDN 运行路径。 
