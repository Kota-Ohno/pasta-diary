import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { leftSidebar, categoryLink } from "./leftSidebar.module.css"
import { Box } from "@mui/material";

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
    <Box className={`${className} ${leftSidebar}`}>
      {data.allMdx.group.map(category => (
        <Link
          key={category.fieldValue}
          to={`/blog/${category.fieldValue.toLowerCase()}/`}
          className={categoryLink}
        >
          {category.fieldValue}
        </Link>
      ))}
    </Box>
  )
}

export default LeftSidebar
