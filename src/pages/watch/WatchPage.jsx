import React from 'react'
import LoadingScreen from '../../components/LoadingScreen'
import ColorSelector from '../../components/ColorSelector'
import ProductViewer from '../../components/ProductViewer'

function WatchPage() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedColor, setSelectedColor] = React.useState('silver')

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleColorChange = (color) => {
    setSelectedColor(color)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-10 pt-32 p-6 fade-in">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-light text-center text-gradient mb-2">
            3D 纪念品
          </h1>
          <p className="text-lg font-medium text-[var(--text-secondary)] text-center tracking-wide">
            超越平面，珍藏温度。
          </p>
        </div>
      </header>

      <div className="absolute inset-0 flex items-center justify-center">
        <ProductViewer selectedColor={selectedColor} />
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 fade-in">
        <ColorSelector selectedColor={selectedColor} onColorChange={handleColorChange} />
      </div>

      <div className="fixed bottom-8 left-0 right-0 z-10 fade-in">
        <p className="text-sm font-medium text-[var(--text-secondary)] text-center tracking-wide mx-auto">
          Drag to rotate · Scroll to zoom
        </p>
      </div>
    </div>
  )
}

export default WatchPage
