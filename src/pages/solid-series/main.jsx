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
      features={[
        {
          title: "水晶3D 成型",
          description: "根据你的模型高质量切割并抛光。",
          imagePlaceholder: "俄罗斯地图形状水晶图片"
        },
        {
          title: "水晶CNC加工",
          description: "根据3D模型加工定制水晶。",
          imagePlaceholder: "小提琴水晶图片"
        },
        {
          title: "压铸水晶",
          description: "压力模具快速生产。",
          imagePlaceholder: "压铸水晶照片"
        }
      ]}
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
