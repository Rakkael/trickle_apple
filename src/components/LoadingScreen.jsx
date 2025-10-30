import React from 'react'

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[var(--background-light)] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 loading-spinner border-4 border-[var(--text-primary)] mx-auto mb-8"></div>
        
        <h2 className="text-2xl font-display font-light text-[var(--text-primary)] mb-4 pulse">
          Loading Experience
        </h2>
        
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-[var(--text-primary)] rounded-full animate-pulse"></div>
          <div 
            className="w-2 h-2 bg-[var(--text-primary)] rounded-full animate-pulse" 
            style={{animationDelay: '0.2s'}}
          ></div>
          <div 
            className="w-2 h-2 bg-[var(--text-primary)] rounded-full animate-pulse" 
            style={{animationDelay: '0.4s'}}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
