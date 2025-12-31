import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import App from '../../App'
import ProductViewer from '../../components/ProductViewer'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      title="生产咨询"
      subtitle="专业团队，全程服务。"
      features={[
        "解决复杂生产定制问题",
        "联系方式"
      ]}
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
