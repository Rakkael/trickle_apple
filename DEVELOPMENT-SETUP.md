# 🚀 本地开发环境设置指南

本指南将帮助你建立现代化的本地开发环境，摆脱CDN依赖，获得完整的开发体验。

## 📋 开发方案对比

### 方案1: 现代化本地开发 (推荐)
✅ **优势**:
- 完整的VS Code智能提示和自动补全
- 热更新 (HMR) - 代码保存即时生效
- 现代化的包管理和依赖管理
- 完整的ESLint代码检查
- Git版本控制
- 灵活的构建和部署选项

❌ **劣势**:
- 需要Node.js环境
- 初始设置稍复杂

### 方案2: Trickle在线编辑
✅ **优势**:
- 无需本地环境
- 即时预览
- 内置数据库和AI集成

❌ **劣势**:
- 编辑器功能有限
- 无智能提示
- CDN依赖限制开发灵活性

## 🛠️ 快速开始 (推荐方案1)

### 1. 环境准备

```bash
# 检查Node.js版本 (需要18+)
node --version
npm --version

# 如果没有安装，请访问 https://nodejs.org
```

### 2. 项目设置

```bash
# 创建新目录并进入
mkdir 3d-product-showcase
cd 3d-product-showcase

# 复制开发文件到本地
# 将以下文件从Trickle下载到本地:
# - package-dev.json (重命名为 package.json)
# - vite-dev.config.js (重命名为 vite.config.js)  
# - index-dev.html (重命名为 index.html)
# - src/ 目录及其所有内容
# - tailwind.config.js
# - postcss.config.js

# 安装依赖
npm install
```

### 3. 启动开发服务器

```bash
# 启动热更新开发服务器
npm run dev
```

浏览器将自动打开 `http://localhost:3000`

## 🎯 开发体验优势

### VS Code 增强功能

安装推荐扩展:
```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next", 
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-eslint"
  ]
}
```

### 智能提示示例

```jsx
// 完整的React Hooks自动补全
import { useState, useEffect } from 'react'

// Tailwind CSS类名提示
<div className="flex items-center justify-" // 自动提示所有选项

// 组件props类型检查
<VisionProViewer 
  modelUrl="..."  // 自动提示必需的props
  onLoad={...}    // 函数类型检查
/>
```

### 热更新体验

```jsx
// 修改任何代码
function App() {
  return (
    <div className="bg-blue-500"> {/* 改为bg-red-500 */}
      Hello World  {/* 改为任何文本 */}
    </div>
  )
}
// 保存后立即在浏览器中看到变化，无需刷新
```

## 🔧 开发工作流

### 日常开发

```bash
# 1. 启动开发服务器
npm run dev

# 2. 在VS Code中编辑代码
# 3. 浏览器自动更新

# 4. 代码检查
npm run lint

# 5. 构建生产版本
npm run build

# 6. 预览生产版本
npm run preview
```

### 项目结构

```
src/
├── main.jsx              # Vite入口点
├── App.jsx               # 主应用组件
├── index.css             # 全局样式
└── components/           # React组件
    ├── LoadingScreen.jsx
    ├── VisionProViewer.jsx
    ├── ColorSelector.jsx
    └── ProductViewer.jsx

public/                   # 静态资源
dist/                     # 构建输出
package.json              # 依赖配置
vite.config.js            # 构建配置
```

## 🚀 部署选项

### 开发环境
```bash
npm run dev     # 本地开发服务器
```

### 生产环境
```bash
npm run build   # 构建生产版本
npm run preview # 预览生产版本
```

### 部署到GitHub Pages
```bash
npm run deploy  # 自动构建并部署到GitHub Pages
```

### 部署到其他平台
- **Vercel**: 连接GitHub仓库，自动部署
- **Netlify**: 拖拽dist文件夹或连接Git
- **静态托管**: 上传dist文件夹到任何服务器

## 🎨 开发技巧

### 1. 组件开发

```jsx
// 使用ES6模块和现代React语法
import React, { useState } from 'react'

const MyComponent = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue)
  
  return (
    <div className="modern-styling">
      {/* JSX with full IntelliSense */}
    </div>
  )
}

export default MyComponent
```

### 2. 样式管理

```css
/* Tailwind CSS with IntelliSense */
@layer components {
  .custom-button {
    @apply px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded;
  }
}
```

### 3. 资源管理

```jsx
// 导入本地资源
import logo from './assets/logo.png'
import { modelUrl } from '@assets/models.json'
```

## 🔄 双环境工作流

你可以同时使用两个环境:

1. **Trickle**: 快速原型和演示
2. **本地开发**: 深度开发和定制

### 同步策略

```bash
# 从Trickle导出 → 本地开发
# 下载最新代码到src/

# 本地开发 → 部署到生产
npm run build
# 上传dist/到静态托管

# 本地开发 → 更新Trickle (可选)
# 手动复制核心组件到Trickle
```

## 🛟 故障排除

### 常见问题

**1. 端口冲突**
```bash
# 使用不同端口
npm run dev -- --port 3001
```

**2. 依赖问题**
```bash
# 清除缓存重新安装
rm -rf node_modules package-lock.json
npm install
```

**3. 构建错误**
```bash
# 检查ESLint错误
npm run lint
# 修复后重新构建
npm run build
```

现在你拥有了完整的现代化开发环境! 🎉