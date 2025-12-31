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
      features={[
        "玻璃抛光机器",
        "高质量抛光粉",
        "UV胶水"
      ]}
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
