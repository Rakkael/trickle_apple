import React from 'react'
import LoadingScreen from './components/LoadingScreen'

function App({
  children,
  title,
  subtitle,
  features, // Expected to be Array of objects { title, description, imagePlaceholder } or strings
  footerText = '拖动旋转 • 滚动缩放'
}) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [scrollHintState, setScrollHintState] = React.useState('icon') // 'icon' or 'text'

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll Hint Animation Loop
  React.useEffect(() => {
    if (isLoading) return
    const interval = setInterval(() => {
      setScrollHintState(prev => prev === 'icon' ? 'text' : 'icon')
    }, 3000) // Switch every 3 seconds
    return () => clearInterval(interval)
  }, [isLoading])

  const handleNavigation = (page) => {
    window.location.href = `/${page}.html`
  }

  const scrollToSection = (index) => {
    const element = document.getElementById(`feature-${index}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  const getLinkClass = (path) => {
    const currentPath = window.location.pathname
    const isActive = currentPath.includes(path) || (path === 'solid-series' && (currentPath === '/' || currentPath === '/index.html'))
    return `nav-item cursor-pointer${isActive ? ' active text-black' : ''}`
  }

  // Normalize features to objects if they are strings (backward compatibility)
  const normalizedFeatures = features ? features.map(f =>
    typeof f === 'string' ? { title: f, description: '', imagePlaceholder: '' } : f
  ) : []

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Navigation Bar - Fixed */}
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

      {/* Hero Section (One Screen Height) */}
      <div className="relative w-full h-screen isolate">
        {/* Background & Overlay */}
        <div className="absolute inset-0 hero-background z-0"></div>
        <div className="absolute inset-0 gradient-overlay opacity-60 z-0"></div>

        {/* 3D Viewer Container - Should be above background but below text */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          {children}
        </div>

        {/* Header Content */}
        <header className="absolute top-0 left-0 right-0 z-10 pt-32 p-6 fade-in pointer-events-none">
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

        {/* Left Features Navigation */}
        {normalizedFeatures.length > 0 && (
          <div className="absolute inset-y-0 left-8 md:left-24 flex flex-col justify-center z-20 pointer-events-none fade-in">
            <div className="space-y-8">
              {normalizedFeatures.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className="group relative pb-2 pointer-events-auto cursor-pointer"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Visual Anchor Line */}
                  <div className="absolute bottom-0 left-0 w-24 h-[1px] bg-gradient-to-r from-gray-500/30 to-transparent transition-all duration-700 ease-out group-hover:w-full group-hover:from-gray-800/60"></div>
                  {/* Glow Effect */}
                  <div className="absolute bottom-[-10px] -left-8 -right-8 h-16 bg-gradient-to-t from-white/40 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"></div>
                  {/* Text */}
                  <p className="text-xl md:text-2xl font-light text-[#1d1d1f] tracking-wide pl-1 relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer info (moved up) */}
        <div className="absolute bottom-24 left-0 right-0 z-10 fade-in pointer-events-none">
          <p className="text-sm font-medium text-[var(--text-secondary)] text-center tracking-wide opacity-80">
            {footerText}
          </p>
        </div>

        {/* Scroll Hint (Bottom) */}
        <div
          className="absolute bottom-8 left-0 right-0 h-12 flex items-center justify-center z-20 fade-in pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => scrollToSection(0)}
        >
          {/* Icon State */}
          <div className={`absolute transition-opacity duration-1000 ease-in-out ${scrollHintState === 'icon' ? 'opacity-100' : 'opacity-0'}`}>
            <svg className="w-6 h-6 text-[#1d1d1f] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {/* Text State */}
          <div className={`absolute transition-opacity duration-1000 ease-in-out ${scrollHintState === 'text' ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-sm font-light text-[#1d1d1f] tracking-widest uppercase">继续浏览</span>
          </div>
        </div>
      </div>

      {/* Second Screen & Details Sections */}
      <div className="relative z-10 bg-white">
        {normalizedFeatures.map((feature, index) => (
          <div
            key={index}
            id={`feature-${index}`}
            className="min-h-screen flex items-center justify-center py-24 px-6 border-b border-gray-100 last:border-0"
          >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              {/* Text Content */}
              <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1d1d1f] mb-6">
                  {feature.title}
                </h2>
                <p className="text-lg md:text-xl text-[#86868b] leading-relaxed font-light">
                  {feature.description || "这里是关于该功能的详细介绍。采用精选工艺，打造极致体验。"}
                </p>
              </div>

              {/* Image Placeholder */}
              <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 relative group">
                  {feature.imagePlaceholder ? (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                      {/* Placeholder Content */}
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <p className="font-medium text-sm">{feature.imagePlaceholder}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                  )}
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
