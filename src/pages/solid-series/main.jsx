import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import App from '../../App'

import ProductViewer from '../../components/ProductViewer'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      title="3D 纪念品"
      subtitle="超越平面，珍藏温度。"
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
