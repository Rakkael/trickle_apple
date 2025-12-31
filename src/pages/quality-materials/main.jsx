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
      features={[
        "高质量无气泡无划痕水晶",
        "高质量金属奖牌",
        "亚克力奖杯",
        "多功能礼盒"
      ]}
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
