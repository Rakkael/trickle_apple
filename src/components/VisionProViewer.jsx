import React from 'react'
import { ensureModelViewer } from '../utils/ensureModelViewer'

function VisionProViewer() {
  const [isReady, setIsReady] = React.useState(false)
  const [isModelLoaded, setIsModelLoaded] = React.useState(false)
  const [isPaused, setIsPaused] = React.useState(false)
  const [availableAnimations, setAvailableAnimations] = React.useState([])
  const modelViewerRef = React.useRef()

  React.useEffect(() => {
    let mounted = true
    ensureModelViewer().then(() => { if (mounted) setIsReady(true) }).catch(console.error)
    return () => { mounted = false }
  }, [])

  React.useEffect(() => {
    if (!isReady) return
    
    const modelViewer = modelViewerRef.current
    if (!modelViewer) return

    const handleLoad = () => {
      setIsModelLoaded(true)
      console.log('Vision Pro 3D model loaded successfully')
      
      if (modelViewer.availableAnimations && modelViewer.availableAnimations.length > 0) {
        setAvailableAnimations(modelViewer.availableAnimations)
        modelViewer.animationName = modelViewer.availableAnimations[0]
        modelViewer.play()
        console.log('Auto-playing animation:', modelViewer.availableAnimations[0])
      }
    }

    const handleError = (event) => {
      console.error('Vision Pro model loading error:', event.detail)
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

  const handleAnimationToggle = () => {
    const modelViewer = modelViewerRef.current
    if (!modelViewer || !isModelLoaded) return

    try {
      if (isPaused) {
        if (availableAnimations.length > 0) {
          modelViewer.play()
        }
        setIsPaused(false)
        console.log('Resuming animation')
      } else {
        if (availableAnimations.length > 0) {
          modelViewer.pause()
        }
        setIsPaused(true)
        console.log('Pausing animation')
      }
    } catch (error) {
      console.error('Animation control error:', error)
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {isReady && (
      <model-viewer
        ref={modelViewerRef}
        src="https://app.trickle.so/storage/public/images/usr_13b22eb278000001/42884deb-1681-4b24-b329-09dde54d7473.gltf"
        alt="Apple Vision Pro"
        auto-rotate={!isPaused}
        camera-controls
        touch-action="pan-y"
        animation-name=""
        autoplay={true}
        style={{
          width: '100%',
          height: '100vh',
          minHeight: '600px'
        }}
        loading="eager"
        reveal="auto"
        environment-image="neutral"
        shadow-intensity="0.6"
        shadow-softness="0.8"
        exposure="0.5"
        camera-orbit="25deg 75deg 4m"
        min-camera-orbit="auto auto 2.5m"
        max-camera-orbit="auto auto 6m"
        interpolation-decay="200"
        tone-mapping="neutral"
        environment-intensity="0.4"
      />)}
      
      {(!isReady || !isModelLoaded) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
          <div className="text-center">
            <div className="w-16 h-16 loading-spinner border-4 border-[var(--text-primary)] mx-auto mb-4"></div>
            <p className="text-[var(--text-primary)] font-medium tracking-wide">Loading Vision Pro...</p>
          </div>
        </div>
      )}
      
      {isModelLoaded && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={handleAnimationToggle}
            className="px-6 py-3 rounded-full bg-black bg-opacity-20 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-opacity-30 cursor-pointer"
          >
            {isPaused ? 'Click to Resume' : 'Click to Pause'}
          </button>
        </div>
      )}
    </div>
  )
}

export default VisionProViewer
