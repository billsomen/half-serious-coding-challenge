import * as React from "react"
import { Spin } from "antd"
import { loaderContainer } from "./__loader.utils"

const Loader: React.FC = () => {
  return (
    <div style={loaderContainer}>
      <Spin size="large" />
    </div>
  )
}

export default Loader
