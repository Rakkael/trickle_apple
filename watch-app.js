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
            <button onClick={() => window.location.reload()} className="btn btn-black">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function WatchApp() {
  try {
    const [isLoading, setIsLoading] = React.useState(true);
    const [selectedColor, setSelectedColor] = React.useState('silver');

    React.useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);

    const handleColorChange = (color) => {
      setSelectedColor(color);
    };

    if (isLoading) {
      return <LoadingScreen />;
    }

    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 hero-background"></div>
        <div className="absolute inset-0 gradient-overlay opacity-60"></div>

        <nav className="apple-nav fixed top-0 left-0 right-0 z-50 fade-in">
          <div className="nav-container">
            <div className="flex items-center justify-between h-12">
              <a href="index.html" className="apple-logo">
                <div className="icon-apple text-lg"></div>
              </a>
              <div className="flex items-center space-x-8">
                <span className="nav-item" onClick={() => window.location.href = 'index.html'}>Vision</span>
                <span className="nav-item active">Watch</span>
                <span className="nav-item" onClick={() => window.location.href = 'iphone.html'}>iPhone</span>
                <span className="nav-item" onClick={() => window.location.href = 'ipad.html'}>iPad</span>
                <span className="nav-item" onClick={() => window.location.href = 'macbook.html'}>Mac</span>
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
              Apple Watch SE
            </h1>
            <p className="text-lg font-medium text-[var(--text-secondary)] text-center tracking-wide">
              Heavy on features. Light on price.
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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 fade-in">
          <p className="text-sm font-medium text-[var(--text-secondary)] text-center tracking-wide">
            Drag to rotate • Scroll to zoom
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('WatchApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><WatchApp /></ErrorBoundary>);