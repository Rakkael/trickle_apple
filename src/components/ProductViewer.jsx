import React from 'react'
import { ensureModelViewer } from '../utils/ensureModelViewer'

function ProductViewer({ selectedColor }) {
  const [isReady, setIsReady] = React.useState(false)
  const [isModelLoaded, setIsModelLoaded] = React.useState(false)
  const modelViewerRef = React.useRef()

  React.useEffect(() => {
    let mounted = true
    ensureModelViewer().then(() => {
      if (mounted) setIsReady(true)
    }).catch((e) => {
      console.error('Failed to load model-viewer', e)
    })
    return () => { mounted = false }
  }, [])

  React.useEffect(() => {
    if (!isReady) return
    
    const modelViewer = modelViewerRef.current
    if (!modelViewer) return

    const handleLoad = () => {
      setIsModelLoaded(true)
      console.log('Apple Watch 3D model loaded successfully')
    }

    const handleError = (event) => {
      console.error('Model loading error:', event.detail)
    }

    modelViewer.addEventListener('load', handleLoad)
    modelViewer.addEventListener('error', handleError)

    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener('load', handleLoad)
        modelViewer.removeEventListener('error', handleError)
      }
    }
  }, [isReady])

  // Apply color variations
  React.useEffect(() => {
    const modelViewer = modelViewerRef.current
    if (!modelViewer || !isModelLoaded) return

    const colorFilters = {
      'silver': 'brightness(1.1) contrast(1.1) saturate(0.9)',
      'black': 'brightness(0.7) contrast(1.2) saturate(1.0)',
      'gold': 'brightness(1.0) contrast(1.1) sepia(0.2) hue-rotate(15deg) saturate(1.2)',
      'blue': 'brightness(0.9) contrast(1.1) hue-rotate(180deg) saturate(1.3)'
    }

    const filter = colorFilters[selectedColor] || colorFilters.silver
    modelViewer.style.filter = filter
  }, [selectedColor, isModelLoaded])

  return (
    <div className="w-full h-full flex items-center justify-center">
      {isReady && (
      <model-viewer
        ref={modelViewerRef}
        src="https://cdn.jsdelivr.net/gh/Rakkael/glbFilesDelivr/tripo_pbr_model_262b47c9-24fa-4ef4-8e36-b3f016c0dc61.glb"
        alt="Apple Watch SE"
        auto-rotate
        camera-controls
        touch-action="pan-y"
        style={{
          width: '100%',
          height: '100vh',
          minHeight: '600px'
        }}
        loading="eager"
        reveal="auto"
        environment-image="neutral"
        shadow-intensity="1.2"
        shadow-softness="0.4"
        exposure="1.5"
        camera-orbit="20deg 80deg 5m"
        min-camera-orbit="auto auto 5m"
        max-camera-orbit="auto auto 10m"
        interpolation-decay="150"
        tone-mapping="aces"
        environment-intensity="1.2"
      />)}
      
      {(!isReady || !isModelLoaded) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
          <div className="text-center">
            <div className="w-16 h-16 loading-spinner border-4 border-[var(--text-primary)] mx-auto mb-4"></div>
            <p className="text-[var(--text-primary)] font-medium tracking-wide">Loading Apple Watch...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductViewer
