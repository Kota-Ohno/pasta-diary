import * as React from "react"
import { rightSidebar } from "./rightSidebar.module.css"

const RightSidebar = ({ className }) => {
  return (
    <div className={`${className} ${rightSidebar}`}>
      <div></div>
    </div>
  )
}

export default RightSidebar
