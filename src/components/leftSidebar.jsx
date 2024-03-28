import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { leftSidebar, categoryLink } from "./leftSidebar.module.css"


const LeftSidebar = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: {frontmatter: {categories: SELECT}}) {
          fieldValue
        }
      }
    }
  `)

  return (
    <div className={`${className} ${leftSidebar}`}>
      {data.allMdx.group.map(category => (
        <Link
          key={category.fieldValue}
          to={`/blog/${category.fieldValue.toLowerCase()}/`}
          className={categoryLink}
        >
          {category.fieldValue}
        </Link>
      ))}
    </div>
  )
}

export default LeftSidebar
