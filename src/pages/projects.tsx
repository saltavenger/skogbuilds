import React from "react"
import { PageProps } from "gatsby"
import {Container, Typography} from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects: React.FC<PageProps> = () => (
  <Layout tab={0}>
    <SEO title="Projects" />
    <Container>
      <Typography variant="body1">projects</Typography>
    </Container>
  </Layout>
)

export default Projects
