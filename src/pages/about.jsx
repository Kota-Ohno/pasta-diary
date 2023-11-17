// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="あばうとみー">
      <p>
        昼ごはんにいつもパスタを食べています。
        ねこも飼っています。
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="あばうとみー"></Seo>

// Step 3: Export your component
export default AboutPage
