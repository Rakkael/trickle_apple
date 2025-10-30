import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'

function Placeholder({ title }) {
  return (
    <div className="min-h-screen hero-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-light text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600">Interactive 3D model coming soon.</p>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Placeholder title="iPad Pro" />
  </React.StrictMode>
)

