import React from 'react'
import LoadingScreen from './components/LoadingScreen'

function App({
  children,
  title,
  subtitle,
  features,
  footerText = '拖动旋转 • 滚动缩放'
}) {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleNavigation = (page) => {
    window.location.href = `/${page}.html`
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  const getLinkClass = (path) => {
    const currentPath = window.location.pathname
    // Check if the current path matches the link path (ignoring .html extension for robustness if needed, but strict match is fine for now)
    // Also handle root path '/' for solid-series if that's the default
    const isActive = currentPath.includes(path) || (path === 'solid-series' && (currentPath === '/' || currentPath === '/index.html'))
    return `nav-item cursor-pointer${isActive ? ' active text-black' : ''}`
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
              <span className={getLinkClass('solid-series')} onClick={() => handleNavigation('solid-series')}>立体系列</span>
              <span className={getLinkClass('sound-light-aesthetics')} onClick={() => handleNavigation('sound-light-aesthetics')}>声光美学</span>
              <span className={getLinkClass('quality-materials')} onClick={() => handleNavigation('quality-materials')}>优质原料</span>
              <span className={getLinkClass('auxiliary-materials')} onClick={() => handleNavigation('auxiliary-materials')}>辅助材料</span>
              <span className={getLinkClass('production-consultation')} onClick={() => handleNavigation('production-consultation')}>生产咨询</span>
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
          {title && (
            <h1 className="text-4xl md:text-6xl font-display font-light text-center text-gradient mb-2">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg font-medium text-[var(--text-secondary)] text-center tracking-wide">
              {subtitle}
            </p>
          )}
        </div>
      </header>

      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>

      {features && features.length > 0 && (
        <div className="absolute top-1/2 left-8 md:left-16 transform -translate-y-1/2 z-20 pointer-events-none fade-in">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl shadow-lg transform transition-all duration-700 pointer-events-auto hover:scale-105 hover:bg-white/20"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="text-lg md:text-xl font-medium text-[#1d1d1f] tracking-tight">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="fixed bottom-8 left-0 right-0 z-10 fade-in">
        <p className="text-sm font-medium text-[var(--text-secondary)] text-center tracking-wide mx-auto">
          {footerText}
        </p>
      </div>
    </div>
  )
}

export default App
