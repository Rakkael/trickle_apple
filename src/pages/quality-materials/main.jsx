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
        {
          title: "高质量无气泡无划痕水晶",
          description: "只有高透明度没有内部波纹的水晶才适合激光雕刻。",
          imagePlaceholder: "高质量水晶图片"
        },
        {
          title: "高质量金属奖牌",
          description: "只有足够重量的金属奖牌才能体现出荣誉的重量。",
          imagePlaceholder: "奖牌图片"
        },
        {
          title: "亚克力奖杯",
          description: "更轻便多彩的选择。",
          imagePlaceholder: "亚克力奖杯图片"
        },
        {
          title: "多功能礼盒",
          description: "不仅是容器同时也是艺术品的多功能展示礼盒。",
          imagePlaceholder: "复杂礼盒图片"
        }
      ]}
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
