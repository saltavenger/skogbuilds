import React from "react"
import { PageProps } from "gatsby"
import {Box, Container, Typography} from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Home" />
    <Box display="grid" style={{gridTemplateColumns: "1fr", gridTemplateRows: "1fr auto", height: "100%"}}>
      <Container style={{textAlign: 'center'}}>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="body1">Dis is why we da best</Typography>
      </Container>
      <Box style={{background: '#c6b695'}}>
        <Container>
          <Box p={2}>
            <Typography variant="body1">Based in Long Beach, NY</Typography>
            <Typography variant="body1">Serving the NY metro area</Typography>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24240.177100279503!2d-73.6861029969484!3d40.58526676342893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26ff6430184c9%3A0xd3936da1e33b9063!2sLong%20Beach%2C%20NY!5e0!3m2!1sen!2sus!4v1613943282273!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{border: 0}}
              loading="lazy"></iframe>
          </Box>
        </Container>
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
