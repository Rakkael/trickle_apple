SPA 架构实施计划（实现与交付）

目标
- 单入口：仅保留 index.html + src/main.jsx。
- 路由：/watch（默认）、/vision、/iphone、/ipad、/mac。
- 结构：Layout 负责背景/遮罩/固定导航，页面组件仅渲染业务内容。
- 导航：Nav 统一渲染 5 个入口，使用 NavLink 控制 active。

总体节奏
- v0.1 SPA Shell：搭建 Router + Layout + Watch 页面。
- v0.2 页面接入：Vision/iPhone/iPad/Mac 组件与路由。
- v0.3 清理收口：删除多入口 HTML、旧 main.jsx、App.jsx。
- v0.4 质量加固：样式、可访问性、文案与打包检查。

v0.1 实施细节
1. 安装依赖
   - npm i react-router-dom

2. Nav 组件（src/components/Nav.jsx）
   - 目的：在 Layout 中复用的导航栏。
   - 行为：使用 NavLink 渲染 Watch / Vision / iPhone / iPad / Mac；根据 isActive 应用 nav-item active。
   - 布局：保留现有 nav 样式结构（left logo、middle links、right icons），使用现有类名。

3. Layout（src/layout/Layout.jsx）
   - 负责页面的背景层、遮罩层、固定导航。
   - 通过 Outlet 渲染子页面内容。
   - 保持 min-h-screen relative 结构，背景为 absolute inset。

4. Watch 页面（src/pages/watch/WatchPage.jsx）
   - 从 src/App.jsx 迁移 Watch 业务内容：LoadingScreen、ProductViewer、ColorSelector、标题、提示等。
   - 移除导航、背景、window.location 跳转逻辑，页面专注于 Watch 的 state 与 UI。

5. main.jsx 路由（src/main.jsx）
   - 引入 BrowserRouter、Routes、Route、Navigate，并使用 Layout 作为父级。
   - 注册 /watch 路由；/ 与 * 重定向到 /watch。
   - 引入 WatchPage（其他页面在 v0.2 添加）。

6. index.html
   - script src 指向 /src/main.jsx，移除指向 src/pages/index/main.jsx 的旧入口。

7. 验收
   - npm run dev：导航可见，/watch 渲染正常，刷新 /watch 无报错（dev/preview）。
   - 导航高亮正确，Watch 内容无旧逻辑残留。

v0.2 实施细节
1. 新建页面组件
   - vision-pro/VisionProPage.jsx：渲染 VisionProViewer。
   - iphone/IphonePage.jsx：占位组件（居中标题 + 描述）。
   - ipad/IpadPage.jsx、macbook/MacbookPage.jsx：同样的占位结构。
   - 样式统一：min-h-screen hero-background，内容居中。

2. 路由扩展
   - 在 main.jsx 中为 /vision、/iphone、/ipad、/mac 添加 Route。
   - 确认 Nav 中的 NavLink 与 ROUTE 名称一致。

3. 验收
   - 通过导航切换 5 个页面，active 高亮正确。
   - 直接访问或刷新任一子路由（通过 dev/preview）均可渲染。

v0.3 实施细节
1. 删除旧入口脚本（src/pages/*/main.jsx）。
2. 删除多入口 HTML（watch.html、iphone.html、ipad.html、macbook.html、vision-pro.html）。
3. 删除 src/App.jsx（Watch 内容已迁移）。
4. 验收：npm run build && npm run preview 正常，代码无旧引用；根目录仅剩 index.html。

v0.4 实施细节
1. 样式统一
   - 背景、遮罩只在 Layout 中渲染；页面组件仅保留业务内容。
   - 检查 z-index、position，确保导航固定于顶部。

2. 可访问性
   - Nav Link 可聚焦（tabIndex 默认即可，确保有可见焦点）。
   - Apple logo 添加 aria-label="Home"。

3. 文案与扩展性
   - 将页面标题、副标题、占位文案抽到常量（可集中在 pages 文案文件），为后续 i18n 做准备。

4. 打包检查
   - npm run build 分析产物体积，确认没有重复打包 Layout/Nav。
   - 更新 README，描述新的单入口架构与运行方式。

依赖与脚本
- 依赖：react-router-dom
- 脚本：npm run dev / npm run build / npm run preview

验收总 checklist
- 导航在所有页面可见且高亮正确。
- 刷新任一子路由在 dev/preview 正常。
- 目录符合目标结构，所有多入口文件已删除。
- 构建产物正常，README/文档同步。

