import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Pagination from "../../components/pagination"
import PostList from "../../components/postList"

const CategoryPage = ({ data, pageContext }) => {
  const { category, currentPage, numPages } = pageContext
  const posts = data.allMdx.edges

  return (
    <Layout pageTitle={`${category}`}>
      <PostList posts={posts} />
      <Pagination category={category} currentPage={currentPage} numPages={numPages} />
    </Layout>
  )
}

export const query = graphql`
  query CategoryPage($category: String, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: {frontmatter: {categories: {in: [$category]}}}
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

export default CategoryPage
