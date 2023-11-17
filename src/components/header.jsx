import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  header,
  headerIcon,
  headerTitle,
  headerTitleGroup,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./header.module.css"

import Icon from "./icon"

const Header = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={`${className} ${header}`}>
      <Link to="/" className={headerTitleGroup}>
        <Icon className={headerIcon}></Icon>
        <div className={headerTitle}>{data.site.siteMetadata.title}</div>
      </Link>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
