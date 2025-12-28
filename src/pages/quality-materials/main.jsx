import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import App from '../../App'
import ProductViewer from '../../components/ProductViewer'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      title="优质原料"
      subtitle="精选材质，匠心铸造。"
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
