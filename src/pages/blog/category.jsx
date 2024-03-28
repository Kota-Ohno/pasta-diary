import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { linkText, pagination, paginationLink , paginationLinkDisabled } from "./category.module.css"

const CategoryPage = ({ data, pageContext }) => {
  const { category, currentPage, numCategoryPages } = pageContext
  const posts = data.allMdx.edges

  const isFirst = currentPage === 1;
  const isLast = currentPage === numCategoryPages;
  const prevPage = currentPage - 1 === 1 ? `/blog/${category}` : `/blog/${category}/${currentPage - 1}`;
  const nextPage = `/blog/${category}/${currentPage + 1}`;

  const currentIndex = currentPage - 1;

  const start = Math.max(currentIndex - 2, 0) // ページネーションリンクの開始index
  const end = Math.min(currentIndex + 2, numCategoryPages - 1) // ページネーションリンクの終了index
  const start_index = Math.max(start, end - currentIndex >= 2 ? start : start - (2 - (end - currentIndex)))
  const end_index = Math.min(end, start >= 2 ? end : end + (2 - (currentIndex - start)))


  return (
    <Layout pageTitle={`カテゴリー: ${category}`}>
      <ul>
        {posts.map(({ node }) => (
        <article key={node.id}>
        <h2>
          <Link className={linkText} to={`/blog/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
        </h2>
        <p>投稿: {node.frontmatter.date}</p>
      </article>
        ))}
      </ul>

      <div className={pagination}>
        <Link to={prevPage} rel="prev" className={`${paginationLink} ${isFirst ? paginationLinkDisabled : ''}`}>
          ← 前
        </Link>

        {Array.from({ length: end_index - start_index + 1 }, (_, index) => {
          const i = start_index + index;
          return (
            <Link
              key={`pagination-number${i + 1}`}
              to={`/blog/${category}/${i === 0 ? "" : i + 1}`}
              className={`${paginationLink} ${
                currentPage === i + 1 ? paginationLinkDisabled : ""
              }`}
            >
              {i + 1}
            </Link>
          );
        })}

        <Link to={nextPage} rel="next" className={`${paginationLink} ${isLast ? paginationLinkDisabled : ''}`}>
        次 →
        </Link>
      </div>
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
