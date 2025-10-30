# 3D Product Showcase - Development Setup

A modern React application showcasing Apple products with interactive 3D models.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+ or yarn

### Installation

```bash
# Clone or download the project
# Navigate to project directory

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run serve` - Serve built files with http-server

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Model Viewer** - 3D model rendering
- **Lucide Icons** - Icon library

## 📁 Project Structure

```
├── components/           # React components
│   ├── LoadingScreen.js
│   ├── ColorSelector.js
│   ├── MaterialController.js
│   └── ProductViewer.js
├── trickle/             # Project assets and notes
│   ├── assets/          # 3D models and images
│   ├── notes/           # Documentation
│   └── rules/           # Development rules
├── *.html              # Page templates
├── *-app.js            # Page-specific React apps
├── styles.css          # Global styles
├── package.json        # Dependencies and scripts
└── vite.config.js      # Build configuration
```

## 🎯 Development Features

- **Hot Module Replacement** - Instant updates during development
- **Multi-page Support** - Separate pages for each product
- **Modern Build Pipeline** - Optimized production builds
- **Source Maps** - Easy debugging
- **Auto-prefixing** - CSS vendor prefixes automatically added

## 🌐 Pages

- `/` - Apple Vision Pro showcase
- `/watch.html` - Apple Watch SE showcase  
- `/iphone.html` - iPhone 15 Pro (placeholder)
- `/ipad.html` - iPad Pro (placeholder)
- `/macbook.html` - MacBook Pro (placeholder)

## 🎨 Customization

### Adding New 3D Models

1. Add model URL to `trickle/assets/`
2. Update `ProductViewer.js` with new model source
3. Adjust camera settings for optimal viewing

### Styling

- Modify `tailwind.config.js` for theme customization
- Update CSS custom properties in `styles.css`
- Component-specific styles in individual files

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Build Configuration

### Development
- Vite dev server with HMR
- Source maps enabled
- Fast refresh for React

### Production
- Code splitting and tree shaking
- Asset optimization
- Minification and compression

## 🚀 Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains the built application
# Deploy the contents to any static hosting service
```

## 📝 Notes

- 3D models are loaded via CDN for optimal performance
- All pages use the same component architecture
- Navigation is handled via standard HTML links
- Model Viewer handles 3D rendering and interactions

## 🤝 Contributing

1. Follow the existing code structure
2. Test on multiple devices and browsers
3. Ensure 3D models load properly
4. Maintain responsive design principles