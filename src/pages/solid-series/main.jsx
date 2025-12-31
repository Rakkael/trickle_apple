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
        "水晶3D 成型",
        "水晶CNC加工",
        "压铸水晶"
      ]}
    >
      <ProductViewer />
    </App>
  </React.StrictMode>
)
