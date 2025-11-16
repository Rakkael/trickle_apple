import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Layout from './layout/Layout'
import WatchPage from './pages/watch/WatchPage'

function ErrorBoundaryWrapper({ children }) {
  return children
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundaryWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/watch" replace />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="*" element={<Navigate to="/watch" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundaryWrapper>
  </React.StrictMode>
)
