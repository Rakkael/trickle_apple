# 本地开发环境指南

## 概述

为了解决CDN加载React的开发限制和Trickle编辑器功能局限，我们提供了完整的本地开发环境配置。

## 核心文件

### 开发配置文件
- `package-dev.json` - 现代化依赖管理
- `vite-dev.config.js` - Vite构建配置  
- `index-dev.html` - Vite入口页面

### 源代码结构
- `src/main.jsx` - React 18入口点
- `src/App.jsx` - 主应用组件
- `src/index.css` - Tailwind CSS配置
- `src/components/` - 模块化React组件

## 开发优势

### VS Code完整支持
- React Hooks智能提示
- Tailwind CSS类名自动补全
- ESLint代码检查
- 实时错误提示

### 现代化工具链
- Vite热更新 (HMR)
- ES6模块系统
- 现代React语法支持
- 自动代码格式化

### 灵活部署
- 本地开发服务器
- 生产环境构建
- GitHub Pages自动部署
- 多平台托管支持

## 使用方法

1. 复制开发文件到本地项目
2. 重命名配置文件去掉`-dev`后缀  
3. 运行`npm install`安装依赖
4. 使用`npm run dev`启动开发服务器

## 双环境策略

- **Trickle平台**: 快速原型和在线演示
- **本地开发**: 深度开发和高级定制

这样既保持了Trickle平台的便利性，又获得了现代化开发工具的全部优势。