import React from "react"
import { PageProps, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Container, Typography, Card, Grid, CardContent, Box} from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects: React.FC<PageProps> = ({data}) => {
  const mappedProjects = data['allContentfulProjects'].edges.map((project) => {
    return {
      title: project.node.title,
      description: project.node.description.description,
      images: project.node.images.map((image) => {
        return getImage(image.gatsbyImageData)
      })
    };
  });
  console.log(mappedProjects);

  return (
    <Layout tab={0}>
      <SEO title="Projects" />
      <Container>
      { mappedProjects.map((project, index) => {
        return (
          <Box mb={3}>
            <Card elevation={3} key={index}>
              <Grid container>
                <Grid item xs={12} sm={5}>
                  <GatsbyImage image={project.images[0]} alt="project images" style={{height: '100%'}}></GatsbyImage>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Box>
        )
      })
      }
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsQuery {
    allContentfulProjects {
      edges {
        node {
          title
          description {
            description
          }
          images {
            gatsbyImageData
          }
        }
      }
    }
  }`;

export default Projects
