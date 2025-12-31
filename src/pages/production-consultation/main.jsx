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
        {
          title: "解决复杂生产定制问题",
          description: "提供专业的技术咨询与解决方案。",
          imagePlaceholder: "技术咨询"
        },
        {
          title: "联系方式",
          description: "随时待命，期待您的来电。",
          imagePlaceholder: "联系我们"
        }
      ]}
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
