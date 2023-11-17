import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  container,
  background,
  header,
  leftSidebar,
  rightSidebar,
  main,
  footer,
} from "./layout.module.css"
import Header from "./header"
import LeftSidebar from "./leftSidebar"
import RightSidebar from "./rightSidebar"
import Main from "./main"
import Footer from "./footer"

// 余白部分を消去するのに必要
import "../styles/styles.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <StaticImage
        className={background}
        alt="スパゲティの背景"
        src="../images/background.jpg"
        height={1024} // モバイル時に背景を表示するのに必要？
      />

      <Header className={header}></Header>

      <LeftSidebar className={leftSidebar}></LeftSidebar>

      <RightSidebar className={rightSidebar}></RightSidebar>

      <Main className={main} pageTitle={pageTitle}>
        {children}
      </Main>

      <Footer className={footer}></Footer>
    </div>
  )
}

export default Layout
