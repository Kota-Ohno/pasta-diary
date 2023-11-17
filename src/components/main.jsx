import * as React from "react"
import { heading, main, mainContent, mainBackground } from "./main.module.css"

const Main = ({ className, pageTitle, children }) => {
  return (
    <div className={`${className} ${main}`}>
      <div className={mainBackground}></div>
      <main className={mainContent}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Main
