import * as React from "react"
import { footer } from "./footer.module.css"

const Footer = ({ className }) => {
  return <footer className={`${className} ${footer}`}></footer>
}

export default Footer
