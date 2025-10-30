import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

function ErrorBoundaryWrapper({ children }) {
  return children
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundaryWrapper>
      <App />
    </ErrorBoundaryWrapper>
  </React.StrictMode>
)
