// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// MUI Componentsをインポート
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="あばうとみー">
      <Grid>
        <Typography variant="body1" sx={{ margin: '2rem'}} >
          昼ごはんにいつもパスタを食べています。
          ねこも飼っています。
        </Typography>
      </Grid>
    </Layout>
  )
}

export const Head = () => <Seo title="あばうとみー"></Seo>

// Step 3: Export your component
export default AboutPage
