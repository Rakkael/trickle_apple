# Interactive 3D Product Showcase

A modern, multi-product showcase website featuring Apple Vision Pro as the main experience and Apple Watch SE 2022, with Three.js and React, featuring advanced 3D rendering and smooth scrolling transitions.

## Features

### Multi-Product Showcase
- **Apple Watch SE 2022 (Main Page)**: Interactive 3D watch display with material variants and color options
- **Apple Vision Pro Section**: Interactive spatial computing device showcase with realistic lighting on dedicated page
- **iPhone 15 Pro Section**: Placeholder page for future 3D model integration
- **iPad Pro Section**: Placeholder page for future 3D model integration  
- **MacBook Pro Section**: Placeholder page for future 3D model integration
- **Cross-Page Navigation**: Apple-style navigation bar for seamless product switching

### Advanced Three.js 3D Rendering
- **Professional-grade 3D Models**: High-quality Apple Watch SE 2022 and Vision Pro displays with:
  - **Custom Scene Setup**: Optimized camera, lighting, and environment
  - **Progressive Loading**: Real-time loading progress with visual feedback
  - **Enhanced Error Handling**: Comprehensive model loading error management
  - **Multiple Format Support**: GLB, GLTF model format support
  - **Animated Screen Display**: Realistic pulsing screen glow with emissive materials
- **Professional Material System**: Advanced Three.js PBR materials featuring:
  - **Custom Metalness & Roughness**: Fine-tuned material properties for watch components
  - **Environment Mapping**: HDR environment reflections for realistic lighting
  - **Screen Emissive Effects**: Glowing screen with animated intensity
  - **Shadow Casting**: Realistic shadow mapping and soft shadows
  - **Dynamic Color System**: Real-time material color adjustments
- **Interactive Color Variants**: Four Apple Watch color options with real-time material updates:
  - Silver (Classic metallic finish)
  - Space Black (Deep matte black)
  - Gold (Warm gold tones)
  - Ocean Blue (Cool blue metallic)
- **Advanced Lighting Setup**: Multi-light environment with:
  - **Ambient Lighting**: Soft environmental illumination
  - **Directional Key Light**: Main shadow-casting light with soft shadows
  - **Fill Lights**: Multiple accent lights for realistic watch photography lighting
  - **Screen Point Light**: Dedicated light source for screen glow effect
- **Smooth Interactive Controls**: Three.js OrbitControls with:
  - **Auto-rotation**: Continuous smooth rotation with damping
  - **Zoom Constraints**: Optimized min/max distances for watch viewing
  - **Touch Support**: Mobile-friendly gesture controls
  - **Smooth Damping**: Natural camera movement feel
- **High-Performance Rendering**: Optimized Three.js pipeline featuring:
  - **60fps Target**: Smooth animation and interaction
  - **Shadow Mapping**: PCF soft shadows for realism
  - **Tone Mapping**: ACES Filmic tone mapping for professional color grading
  - **Anti-aliasing**: Smooth edge rendering
  - **Responsive Canvas**: Automatic resize handling

## Technical Stack

- **React 18**: Component architecture and state management
- **Three.js**: Advanced WebGL 3D rendering engine (unpkg CDN for reliability)
- **GLTFLoader**: High-quality Apple Watch SE 2022 GLB model loading with retry mechanisms
- **OrbitControls**: Smooth camera interaction system
- **PBR Materials**: Physically-based rendering for realistic materials
- **Shadow Mapping**: Real-time shadow rendering system
- **Tone Mapping**: Professional color grading pipeline
- **Post-processing Ready**: Extensible for bloom and other effects
- **Tailwind CSS**: Responsive styling and animations

## Troubleshooting

### GLTFLoader Not Available Error
If you encounter "GLTFLoader not available" errors:
1. Check browser console for Three.js loading errors
2. Ensure stable internet connection for CDN resources
3. Clear browser cache and reload
4. The app includes automatic retry mechanisms for GLTFLoader initialization
5. A placeholder model will display if GLTFLoader fails to load

### Model Loading Issues
- The app tries multiple model URLs with automatic fallback
- Loading progress is displayed during model loading
- Network retry mechanisms handle temporary connection issues

## Usage

### Apple Watch Section (Homepage)
1. **Viewing the Apple Watch**: The 3D model loads automatically on page load
2. **Rotation**: Click and drag to rotate the watch 360°
3. **Zooming**: Use mouse wheel to zoom in/out for detail viewing
4. **Band Color Selection**: Click color options to see different band colors (Silver, Space Black, Gold, Ocean Blue)
5. **Navigation**: Use top navigation bar to switch between products

### Apple Vision Pro Section (Dedicated Page)
1. **Dedicated Page Experience**: Full-screen theme consistent with Apple design language
2. **Interactive 3D Model**: Full 360° rotation and zoom capabilities with spatial computing device
3. **Realistic Lighting System**: Optimized exposure (0.5), soft shadows (0.6 intensity, 0.8 softness) for natural appearance
4. **Professional 3D Rendering**: Advanced lighting setup with neutral tone-mapping and reduced environment intensity (0.4)
5. **Click Animation**: Interactive model animations triggered by user interaction
6. **Mobile Support**: Touch gestures supported on all devices with responsive design

### Scroll Features
- **Smooth Scrolling**: Natural transitions between product sections
- **Scroll Animations**: Content reveals with intersection observer
- **Parallax Effects**: Dynamic background opacity changes during scroll

## Customization

### Updating the Watch Model

Replace the model URL in `components/ProductViewer.js`:

```javascript
src="https://path/to/your/watch-model.glb"
```

### Band Colors

Update the color options in `components/ColorSelector.js`:

```javascript
const colors = [
  { name: 'color-name', color: '#hexcolor', label: 'Display Name' }
];
```

### Camera Settings

Adjust camera positioning for optimal watch viewing in `ProductViewer.js`:

```javascript
camera-orbit="15deg 70deg 3m"
min-camera-orbit="auto auto 2m"
max-camera-orbit="auto auto 6m"
field-of-view="20deg"
```

## Development Setup

For local development with modern tooling, see [README-DEVELOPMENT.md](../README-DEVELOPMENT.md) for:
- Node.js setup with Vite
- Hot reload development server
- Modern build pipeline
- Package management

## Browser Support

- Chrome/Edge 88+
- Firefox 78+  
- Safari 14+
- Mobile browsers with WebGL support

## Performance

- Optimized for detailed 3D models
- Efficient model loading and caching
- Responsive design for various screen sizes
- Hardware-accelerated WebGL rendering
- 60fps target performance

## Deployment Options

1. **Trickle Platform** - Direct deployment (current)
2. **Local Development** - Modern Node.js setup with Vite
3. **Static Hosting** - Deploy built files to any CDN/hosting service
