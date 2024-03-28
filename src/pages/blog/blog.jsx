import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Pagination from "../../components/pagination"
import PostList from "../../components/postList"


const BlogPage = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const posts = data.allMdx.edges

  return (
    <Layout pageTitle="パスタ日記">
      <PostList posts={posts} />
      <Pagination category="" currentPage={currentPage} numPages={numPages} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPage($skip: Int, $limit: Int) {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "yyyy.MM.DD")
            slug
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="パスタ日記" />

export default BlogPage
