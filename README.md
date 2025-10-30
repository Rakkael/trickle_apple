# 3D Product Showcase

Interactive Apple product showcase featuring Vision Pro, Apple Watch SE, and other Apple devices with advanced 3D rendering capabilities.

## 🚀 Live Demo

View the live application at: [Your GitHub Pages URL]

## 📱 Features

- **Apple Vision Pro**: Interactive 3D spatial computing device showcase
- **Apple Watch SE**: Multi-color variants with realistic materials
- **Multi-Device Support**: iPhone, iPad, MacBook Pro pages (expandable)
- **3D Model Rendering**: Advanced Three.js WebGL rendering
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Apple-Style Navigation**: Authentic navigation experience

## 🛠️ Tech Stack

- React 18 with modern hooks
- Vite for fast development and building
- Tailwind CSS for styling
- Model Viewer for 3D rendering
- Lucide Icons for UI elements

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/3d-product-showcase.git
cd 3d-product-showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the application.

## 📦 Scripts

```bash
npm run dev      # Development server with HMR
npm run build    # Production build
npm run preview  # Preview production build
npm run serve    # Serve built files
```

## 🌐 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
# Push dist folder to gh-pages branch
npm install -g gh-pages
gh-pages -d dist
```

### Other Platforms

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **Static Hosting**: Upload `dist` folder contents to any web server

## 📁 Project Structure

```
├── components/          # Reusable React components
├── trickle/            # Assets, notes, and development rules
├── *.html             # Multi-page HTML templates
├── *-app.js           # Page-specific React applications
├── styles.css         # Global CSS styles
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## 🎨 Customization

### Adding New 3D Models

1. Upload model to `trickle/assets/`
2. Update component model source URLs
3. Adjust camera settings for optimal viewing

### Styling

- Modify `tailwind.config.js` for theme changes
- Update CSS custom properties in `styles.css`
- Component-specific styles in individual files

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers with WebGL support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Apple for design inspiration
- Three.js community for 3D rendering capabilities
- Model Viewer team for seamless 3D integration
- React team for the amazing framework

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [documentation](./README-DEVELOPMENT.md)
- Review existing issues for solutions

---

**Built with ❤️ by el.cine**