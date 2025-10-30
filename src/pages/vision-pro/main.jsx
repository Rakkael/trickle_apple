import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import VisionProViewer from '../../components/VisionProViewer'

function VisionProPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 hero-background"></div>
      <div className="absolute inset-0 gradient-overlay opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <VisionProViewer />
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisionProPage />
  </React.StrictMode>
)

