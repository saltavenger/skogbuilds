import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Quote: React.FC<PageProps> = () => (
  <Layout tab={2}>
    <SEO title="Get a quote" />
    <div>quote</div>
  </Layout>
)

export default Quote
