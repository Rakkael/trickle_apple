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
        {
          title: "玻璃抛光机器",
          description: "用于抛光玻璃平面，修整划痕的机器。",
          imagePlaceholder: "刻面机图片"
        },
        {
          title: "高质量抛光粉",
          description: "更加好用的稀土抛光粉。",
          imagePlaceholder: "抛光粉图片"
        },
        {
          title: "UV胶水",
          description: "牢固可靠的胶水。",
          imagePlaceholder: "UV胶水图片"
        }
      ]}
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
