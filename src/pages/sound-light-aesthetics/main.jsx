import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import App from '../../App'
import ProductViewer from '../../components/ProductViewer'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      title="声光美学"
      subtitle="光影流转，声随心动。"
      features={[
        {
          title: "语音/遥控灯光",
          description: "通过声音唤醒沉睡中的纪念品。",
          imagePlaceholder: "语音控制图片"
        },
        {
          title: "炫彩拾音律动",
          description: "跟随音乐舞动的纪念品。",
          imagePlaceholder: "拾音律动图片"
        },
        {
          title: "电子交互纪念品",
          description: "融入电子屏幕，收音机，蓝牙音箱的纪念品。既是电器，也是美学担当。",
          imagePlaceholder: "触碰电子屏幕图片"
        }
      ]}
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
