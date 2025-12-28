import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import App from '../../App'
import ProductViewer from '../../components/ProductViewer'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      title="辅助材料"
      subtitle="细节之处，尽显品质。"
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
