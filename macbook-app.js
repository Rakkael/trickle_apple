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

function MacBookApp() {
  try {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    const handleBackToHome = () => {
      window.location.href = 'index.html';
    };

    if (isLoading) {
      return (
        <div className="min-h-screen hero-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 loading-spinner border-4 mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Loading MacBook Pro...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen hero-background relative overflow-hidden">
        <button
          onClick={handleBackToHome}
          className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-opacity-100"
        >
          <div className="icon-arrow-left text-white text-xl"></div>
        </button>

        {/* Apple Style Navigation */}
        <nav className="apple-nav fixed top-0 left-0 right-0 z-50 fade-in">
          <div className="nav-container">
            <div className="flex items-center justify-between h-12">
              <a href="index.html" className="apple-logo">
                <div className="icon-apple text-lg"></div>
              </a>
              <div className="flex items-center space-x-8">
                <span className="nav-item" onClick={() => window.location.href = 'index.html'}>Watch</span>
                <span className="nav-item" onClick={() => window.location.href = 'iphone.html'}>iPhone</span>
                <span className="nav-item" onClick={() => window.location.href = 'ipad.html'}>iPad</span>
                <span className="nav-item active">Mac</span>
                <span className="nav-item" onClick={() => window.location.href = 'vision-pro.html'}>Vision</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="icon-search text-lg text-[#1d1d1f] cursor-pointer hover:opacity-70 transition-opacity"></div>
                <div className="icon-shopping-bag text-lg text-[#1d1d1f] cursor-pointer hover:opacity-70 transition-opacity"></div>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center min-h-screen p-6">
          <div className="text-center mb-12 fade-in" style={{marginTop: '60px'}}>
            <h1 className="text-5xl font-light text-gray-900 mb-4">MacBook Pro</h1>
            <p className="text-xl text-gray-600">Mind-blowing. Head-turning.</p>
          </div>

          <div className="w-full max-w-4xl h-96 bg-white rounded-2xl shadow-lg flex items-center justify-center fade-in">
            <div className="text-center">
              <div className="icon-laptop text-6xl text-gray-300 mb-4"></div>
              <p className="text-gray-500">3D Model Coming Soon</p>
            </div>
          </div>

          <div className="mt-8 text-center fade-in">
            <p className="text-gray-500 text-sm">Interactive 3D model will be available soon</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('MacBookApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><MacBookApp /></ErrorBoundary>);