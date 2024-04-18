import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const NotFoundPage = () => {
  return (
    <Layout pageTitle="ページが見つかりません">
      <Grid>
        <Typography variant="body1" sx={{ margin: '2rem'}}>
          ページが見つかりませんでした。ヘッダーや左サイドバーから見たいページを探してみてください。
        </Typography>
      </Grid>
    </Layout>
  )
}
export const Head = () => <Seo title="ページが見つかりません"></Seo>

export default NotFoundPage;
