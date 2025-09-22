class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function VisionProViewer() {
  const [isModelLoaded, setIsModelLoaded] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [availableAnimations, setAvailableAnimations] = React.useState([]);
  const modelViewerRef = React.useRef();

  React.useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const handleLoad = () => {
      setIsModelLoaded(true);
      console.log('Vision Pro 3D model loaded successfully');
      
      // Start auto-rotation immediately after load
      if (modelViewer.availableAnimations && modelViewer.availableAnimations.length > 0) {
        setAvailableAnimations(modelViewer.availableAnimations);
        modelViewer.animationName = modelViewer.availableAnimations[0];
        modelViewer.play();
        console.log('Auto-playing animation:', modelViewer.availableAnimations[0]);
      }
    };

    const handleError = (event) => {
      console.error('Vision Pro model loading error:', event.detail);
    };

    modelViewer.addEventListener('load', handleLoad);
    modelViewer.addEventListener('error', handleError);

    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener('load', handleLoad);
        modelViewer.removeEventListener('error', handleError);
      }
    };
  }, []);

  const handleAnimationToggle = () => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer || !isModelLoaded) return;

    try {
      if (isPaused) {
        // Resume animation
        if (availableAnimations.length > 0) {
          modelViewer.play();
        }
        setIsPaused(false);
        console.log('Resuming animation');
      } else {
        // Pause animation
        if (availableAnimations.length > 0) {
          modelViewer.pause();
        }
        setIsPaused(true);
        console.log('Pausing animation');
      }
    } catch (error) {
      console.error('Animation control error:', error);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative">
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
      />
      
      {!isModelLoaded && (
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
  );
}

function App() {
  try {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    const handleNavigation = (page) => {
      window.location.href = page;
    };

    if (isLoading) {
      return <LoadingScreen />;
    }

    return (
      <div className="min-h-screen relative overflow-hidden" data-name="app" data-file="app.js">
        {/* Hero Background with Gradient */}
        <div className="absolute inset-0 hero-background"></div>
        <div className="absolute inset-0 gradient-overlay opacity-60"></div>

        {/* Apple Style Navigation */}
        <nav className="apple-nav fixed top-0 left-0 right-0 z-50 fade-in">
          <div className="nav-container">
            <div className="flex items-center justify-between h-12">
              <a href="index.html" className="apple-logo">
                <div className="icon-apple text-lg"></div>
              </a>
              <div className="flex items-center space-x-8">
                <span className="nav-item active">Vision</span>
                <span className="nav-item" onClick={() => handleNavigation('watch.html')}>Watch</span>
                <span className="nav-item" onClick={() => handleNavigation('iphone.html')}>iPhone</span>
                <span className="nav-item" onClick={() => handleNavigation('ipad.html')}>iPad</span>
                <span className="nav-item" onClick={() => handleNavigation('macbook.html')}>Mac</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="icon-search text-lg text-[#1d1d1f] cursor-pointer hover:opacity-70 transition-opacity"></div>
                <div className="icon-shopping-bag text-lg text-[#1d1d1f] cursor-pointer hover:opacity-70 transition-opacity"></div>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-10 pt-32 p-6 fade-in">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-light text-center text-gradient mb-2">
              Apple Vision Pro
            </h1>
            <p className="text-lg font-medium text-[var(--text-secondary)] text-center tracking-wide">designed by el.cine</p>
          </div>
        </header>

        {/* 3D Vision Pro Viewer */}
        <div className="absolute inset-0 flex items-center justify-center">
          <VisionProViewer />
        </div>

        {/* Instructions */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 fade-in">
          <p className="text-sm font-medium text-[var(--text-secondary)] text-center tracking-wide">
            Drag to rotate • Scroll to zoom • Click to animate
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);