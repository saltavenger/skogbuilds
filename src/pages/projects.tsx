import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects: React.FC<PageProps> = () => (
  <Layout tab={0}>
    <SEO title="Projects" />
    <div>projects</div>
  </Layout>
)

export default Projects
