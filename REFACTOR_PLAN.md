SPA 架构实施计划 - 实现与交付细化

目标与范围
- 单入口应用: index.html + src/main.jsx
- 前端路由: /watch(默认), /vision, /iphone, /ipad, /mac
- 统一布局: Layout 负责背景/遮罩/固定导航; 页面组件只保留自身业务内容
- 导航一致: Nav 使用 NavLink, 所有页面可见、可用且高亮正确

里程碑与版本
- v0.1 SPA Shell: 路由骨架 + 统一布局 + Watch 页面迁移
- v0.2 页面接入: Vision/iPhone/iPad/Mac 接入与导航联动
- v0.3 清理收口: 移除多入口与遗留文件, 统一为 SPA
- v0.4 质量加固: 样式一致性、可访问性、深链与刷新验证、打包检查

v0.1 SPA Shell - 详细实施
1) 安装依赖
   - 命令: npm i react-router-dom

2) 新建 src/components/Nav.jsx
   - 目的: 统一导航, 支持 active 高亮
   - 要点:
     - 使用 NavLink 渲染 5 个入口: /watch, /vision, /iphone, /ipad, /mac
     - className 使用函数形式: ({ isActive }) => isActive ? 'nav-item active' : 'nav-item'
     - 左侧 Apple logo 链接到 /watch, 右侧保留搜索和购物袋图标
     - 复用现有样式类: apple-nav, nav-container, nav-item, icon-apple, icon-search, icon-shopping-bag
   - 结构草图:
     - export default function Nav() { return <nav className="apple-nav">...</nav> }

3) 新建 src/layout/Layout.jsx
   - 目的: 承载通用背景/遮罩和固定导航, 并提供内容插槽
   - 要点:
     - 引入 Outlet 渲染子路由内容
     - 背景相关容器放在这里统一渲染: .hero-background, .gradient-overlay
     - 结构: 最外层 min-h-screen relative, 顶部固定 Nav, 中部通过 <Outlet /> 渲染页面
   - 结构草图:
     - export default function Layout() { return <div>bg + overlay + <Nav/> + <Outlet/></div> }

4) 新建 src/pages/watch/WatchPage.jsx
   - 目的: 将 Watch 业务内容与布局解耦
   - 来源: 从 src/App.jsx 中迁移 Watch 的内容, 移除导航与背景容器
   - 内容点:
     - 状态: isLoading, selectedColor; 副作用: 模拟加载定时器
     - 组件: LoadingScreen, ProductViewer, ColorSelector
     - 页面元素: 顶部标题与副标题, 中部 3D Viewer, 底部颜色选择器, 右下提示文案
   - 注意:
     - 不再包含 nav 与背景容器; 这些由 Layout 负责
     - 原 onClick 导航逻辑删除

5) 路由化 src/main.jsx
   - 目的: 用统一入口接管所有页面
   - 要点:
     - 引入 BrowserRouter, Routes, Route, Navigate
     - 嵌套路由: 顶层 element 使用 <Layout />, 子路由定义各页面
     - 默认路由: path='/' 与 path='*' 都重定向到 /watch
     - 引入全局样式: import './index.css'
   - 路由草图:
     - <Route element={<Layout/>}>
       - <Route path="/watch" element={<WatchPage/>} />
       - 其他页面在 v0.2 加入
       - <Route path="/" element={<Navigate to="/watch" replace/>} />
       - <Route path="*" element={<Navigate to="/watch" replace/>} />

6) 更新 index.html
   - 将脚本入口改为 /src/main.jsx (替换当前对 /src/pages/index/main.jsx 的引用)
   - 保持 <div id="root"></div> 不变

7) 自测验收
   - npm run dev 启动后访问 /watch, 导航可见, Watch 内容正常渲染
   - 刷新 /watch 正常 (dev/preview 环境下)
   - 导航高亮正确 (Watch 处于 active)

v0.2 页面接入 - 详细实施
1) 新建页面组件
   - src/pages/vision-pro/VisionProPage.jsx: 引入并渲染 VisionProViewer
   - src/pages/iphone/IphonePage.jsx: 简单占位区块, 居中标题 "iPhone 15 Pro"
   - src/pages/ipad/IpadPage.jsx: 简单占位区块, 居中标题 "iPad Pro"
   - src/pages/macbook/MacbookPage.jsx: 简单占位区块, 居中标题 "MacBook Pro"
   - 占位样式建议: 最外层 min-h-screen flex items-center justify-center, 中间 text-center

2) 路由注册
   - 在 src/main.jsx 中为 /vision, /iphone, /ipad, /mac 添加子路由
   - 验收: 5 路由互通; 点击导航可切换; 各路由刷新正常 (dev/preview)

3) 导航联动
   - Nav.jsx 中 5 个 NavLink 指向上述路由
   - className 使用 isActive 控制 active 样式

v0.3 清理收口 - 详细实施
1) 删除旧入口脚本
   - 删除以下文件:
     - src/pages/index/main.jsx
     - src/pages/watch/main.jsx
     - src/pages/vision-pro/main.jsx
     - src/pages/iphone/main.jsx
     - src/pages/ipad/main.jsx
     - src/pages/macbook/main.jsx

2) 删除多入口 HTML
   - 删除根目录下:
     - watch.html
     - iphone.html
     - ipad.html
     - macbook.html
     - vision-pro.html

3) 删除不再需要的文件
   - 删除 src/App.jsx (Watch 内容已迁移至 WatchPage)

4) 验收
   - npm run build && npm run preview 正常
   - 代码中无旧入口引用; 仅 index.html 加载 /src/main.jsx

v0.4 质量加固 - 详细实施
1) 样式一致性
   - 背景与遮罩仅在 Layout 中渲染; 页面组件不重复此类元素
   - 校验 z-index 与定位: 导航 fixed 顶部, 内容通过 Outlet 渲染

2) 可访问性
   - 导航项可聚焦与键盘可导航; Apple logo 链接具备可访问名称 (aria-label="Home")
   - 标题等级合理; 交互控件具备可见焦点样式

3) 文案与扩展性
   - 将关键文本集中到常量, 便于后续接入 i18n (可选)

4) 打包与依赖检查
   - 构建产物体积评估; 确认依赖未重复打包

附 - 代码骨架参考
1) Nav.jsx
   - import { NavLink } from 'react-router-dom'
   - <nav className="apple-nav fixed top-0 left-0 right-0 z-50">
       <div className="nav-container">
         <div className="flex items-center justify-between h-12">
           <NavLink to="/watch" aria-label="Home" className="apple-logo">
             <div className="icon-apple text-lg"></div>
           </NavLink>
           <div className="flex items-center space-x-8">
             {['watch','vision','iphone','ipad','mac'].map(k => (
               <NavLink key={k} to={`/${k}`} className={({isActive})=> isActive? 'nav-item active' : 'nav-item'}>
                 {k === 'vision' ? 'Vision' : k.charAt(0).toUpperCase()+k.slice(1)}
               </NavLink>
             ))}
           </div>
           <div className="flex items-center space-x-4">
             <div className="icon-search text-lg text-[#1d1d1f]"></div>
             <div className="icon-shopping-bag text-lg text-[#1d1d1f]"></div>
           </div>
         </div>
       </div>
     </nav>

2) Layout.jsx
   - import { Outlet } from 'react-router-dom'
   - import Nav from '../components/Nav'
   - <div className="min-h-screen relative overflow-hidden">
       <div className="absolute inset-0 hero-background"></div>
       <div className="absolute inset-0 gradient-overlay opacity-60"></div>
       <Nav />
       <div className="relative"> <Outlet /> </div>
     </div>

3) WatchPage.jsx
   - 迁移自 App.jsx 的业务内容, 去掉 nav/背景, 保留:
     - 标题与副标题
     - <ProductViewer selectedColor={selectedColor} />
     - <ColorSelector selectedColor={selectedColor} onColorChange={setSelectedColor} />
     - 提示文案 "Drag to rotate / Scroll to zoom"

4) main.jsx
   - import './index.css'
   - import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
   - <BrowserRouter>
       <Routes>
         <Route element={<Layout/>}>
           <Route path="/watch" element={<WatchPage/>} />
           {/* v0.2: /vision, /iphone, /ipad, /mac */}
           <Route path="/" element={<Navigate to="/watch" replace/>} />
           <Route path="*" element={<Navigate to="/watch" replace/>} />
         </Route>
       </Routes>
     </BrowserRouter>

5) index.html
   - <script type="module" src="/src/main.jsx"></script>

验收总清单
- 所有页面共享同一导航与布局, 高亮正确
- 刷新任一子路由在本地开发/预览环境正常
- 目录结构与入口统一, 无重复壳代码
- 构建与预览通过, 产物体积合理

