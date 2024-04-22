import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { Typography, Box } from '@mui/material';

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.pasta_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Typography variant="subtitle1" gutterBottom>
        {data.mdx.frontmatter.date}
      </Typography>
      <Box>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.image_alt}
        />
      </Box>
      <Box>
        {children}
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "yyyy.MM.DD")
        image_alt
        pasta_image {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
