import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Testimonials: React.FC<PageProps> = () => (
  <Layout tab={1}>
    <SEO title="Testimonials" />
    <div>Testimonials</div>
  </Layout>
)

export default Testimonials
