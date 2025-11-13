import React from 'react'
import LoadingScreen from './components/LoadingScreen'
import ColorSelector from './components/ColorSelector'
import ProductViewer from './components/ProductViewer'

function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedColor, setSelectedColor] = React.useState('silver')

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleNavigation = (page) => {
    window.location.href = `/${page}.html`
  }

  const handleColorChange = (color) => {
    setSelectedColor(color)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 hero-background"></div>
      <div className="absolute inset-0 gradient-overlay opacity-60"></div>

      <nav className="apple-nav fixed top-0 left-0 right-0 z-50 fade-in">
        <div className="nav-container">
          <div className="flex items-center justify-between h-12">
            <a href="/" className="apple-logo">
              <div className="icon-apple text-lg"></div>
            </a>
            <div className="flex items-center space-x-8">
              <span className="nav-item active">Watch</span>
              <span className="nav-item" onClick={() => handleNavigation('vision-pro')}>Vision</span>
              <span className="nav-item" onClick={() => handleNavigation('iphone')}>iPhone</span>
              <span className="nav-item" onClick={() => handleNavigation('ipad')}>iPad</span>
              <span className="nav-item" onClick={() => handleNavigation('macbook')}>Mac</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="icon-search text-lg text-[#1d1d1f] cursor-pointer hover:opacity-70 transition-opacity"></div>
              <div className="icon-shopping-bag text-lg text-[#1d1d1f] cursor-pointer hover:opacity-70 transition-opacity"></div>
            </div>
          </div>
        </div>
      </nav>

      <header className="absolute top-0 left-0 right-0 z-10 pt-32 p-6 fade-in">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-light text-center text-gradient mb-2">
          3D 纪念品
          </h1>
          <p className="text-lg font-medium text-[var(--text-secondary)] text-center tracking-wide">
          超越平面，珍藏温度。​
          </p>
        </div>
      </header>

      <div className="absolute inset-0 flex items-center justify-center">
        <ProductViewer selectedColor={selectedColor} />
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 fade-in">
        <ColorSelector 
          selectedColor={selectedColor} 
          onColorChange={handleColorChange} 
        />
      </div>

      <div className="fixed bottom-8 left-0 right-0 z-10 fade-in">
        <p className="text-sm font-medium text-[var(--text-secondary)] text-center tracking-wide mx-auto">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  )
}

export default App
