import React from "react"
import { PageProps } from "gatsby"
import {Container, Typography} from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Testimonials: React.FC<PageProps> = () => (
  <Layout tab={1}>
    <SEO title="Testimonials" />
    <Container><Typography variant="body1">Testimonials</Typography></Container>
  </Layout>
)

export default Testimonials
