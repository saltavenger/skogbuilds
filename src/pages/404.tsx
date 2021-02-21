import React from "react"
import {PageProps} from "gatsby"
import {Container, Typography} from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Typography variant="h2">404: Not Found</Typography>
      <Typography variant="body1">You just hit a route that doesn&#39;t exist... the sadness.</Typography>
    </Container>
  </Layout>
)

export default NotFoundPage
