# GitHub Setup & Deployment Guide

This guide will help you set up version control with Git and deploy your 3D Product Showcase to GitHub.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Node.js 18+ and npm

## 🚀 Initial Setup

### 1. Initialize Git Repository

```bash
# Navigate to your project directory
cd 3d-product-showcase

# Initialize Git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: 3D Product Showcase with Vision Pro and Apple Watch"
```

### 2. Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click "New repository" 
3. Name it `3d-product-showcase`
4. Keep it public (for GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 3. Connect Local Repository to GitHub

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/yourusername/3d-product-showcase.git

# Push initial commit to GitHub
git branch -M main
git push -u origin main
```

## 🌐 Deploy to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

```bash
# Install gh-pages package globally (one-time setup)
npm install -g gh-pages

# Deploy to GitHub Pages
npm run deploy
```

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy dist folder to gh-pages branch
npx gh-pages -d dist
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

Your site will be available at: `https://yourusername.github.io/3d-product-showcase`

## 🔄 Development Workflow

### Daily Development

```bash
# Make changes to your code
# ...

# Stage and commit changes
git add .
git commit -m "Add new feature: interactive color selector"

# Push to GitHub
git push origin main

# Deploy updated version
npm run deploy
```

### Branch-based Development

```bash
# Create feature branch
git checkout -b feature/new-3d-model

# Make changes and commit
git add .
git commit -m "Add new iPhone 15 Pro 3D model"

# Push feature branch
git push origin feature/new-3d-model

# Create Pull Request on GitHub
# Merge when ready
# Delete feature branch
git branch -d feature/new-3d-model
```

## 📁 File Management

### What Gets Tracked

✅ **Included in Git:**
- Source code (HTML, JS, CSS)
- Component files
- Configuration files
- Documentation
- Package.json

❌ **Excluded from Git:**
- `node_modules/` (dependencies)
- `dist/` (build output)
- `.env` files (environment variables)
- IDE specific files

### Update Repository Configuration

Replace `yourusername` in these files:
- `package.json` (homepage and repository URLs)
- `README.md` (clone URL and links)

## 🔧 Troubleshooting

### Common Issues

**1. Permission Denied**
```bash
# Use SSH instead of HTTPS
git remote set-url origin git@github.com:yourusername/3d-product-showcase.git
```

**2. GitHub Pages Not Working**
- Check that gh-pages branch exists
- Verify Pages settings in repository
- Wait 5-10 minutes for deployment

**3. Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📊 Repository Features

### Enable Useful Features

1. **Issues**: Track bugs and feature requests
2. **Projects**: Organize development tasks
3. **Actions**: Automate deployment (CI/CD)
4. **Releases**: Tag stable versions

### Branch Protection

1. Go to Settings → Branches
2. Add rule for `main` branch
3. Require pull request reviews
4. Require status checks

## 🎯 Best Practices

### Commit Messages

```bash
# Good commit messages
git commit -m "Add: Vision Pro model with realistic lighting"
git commit -m "Fix: Material transparency in Apple Watch showcase"
git commit -m "Update: Navigation component for better mobile experience"

# Use conventional commits
git commit -m "feat: add new 3D model loader with error handling"
git commit -m "fix: resolve camera positioning for watch display"
git commit -m "docs: update README with deployment instructions"
```

### Release Management

```bash
# Tag stable releases
git tag -a v1.0.0 -m "Release version 1.0.0: Initial 3D Product Showcase"
git push origin v1.0.0

# Create release on GitHub with changelog
```

## 🤝 Collaboration

### For Team Development

1. **Fork** repository instead of direct collaboration
2. Create **Pull Requests** for code review
3. Use **Issues** for bug reports and feature requests
4. Follow **branch naming** conventions:
   - `feature/description`
   - `bugfix/issue-number`
   - `hotfix/critical-fix`

---

Your 3D Product Showcase is now ready for version control and deployment! 🚀