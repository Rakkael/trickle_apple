import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import App from '../../App'
import ProductViewer from '../../components/ProductViewer'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      title="声光美学"
      subtitle="光影流转，声随心动。"
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
