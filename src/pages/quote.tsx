import React from "react"
import { PageProps } from "gatsby"
import {Container, Typography} from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Quote: React.FC<PageProps> = () => (
  <Layout tab={2}>
    <SEO title="Get a quote" />
    <Container><Typography variant="body1">quote</Typography></Container>
  </Layout>
)

export default Quote
