import * as React from "react"
import { leftSidebar } from "./leftSidebar.module.css"

const LeftSidebar = ({ className }) => {
  return (
    <div className={`${className} ${leftSidebar}`}>
      <div></div>
    </div>
  )
}

export default LeftSidebar
