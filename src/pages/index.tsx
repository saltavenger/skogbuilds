import React from "react"
import { graphql, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {Box, Container, Typography, Grid, Button} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

import Layout from "../components/layout"
import SEO from "../components/seo"

function MainPic() {
  // Import result is the URL of your image
  return <StaticImage src="../images/atwork.jpeg" alt="project"></StaticImage>
}

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    locationBorder: {
      position: 'relative',
      '&::after': {
        [theme.breakpoints.down('sm')]: {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          display: 'block',
          height: '2px',
          width: '50%',
          transform: 'translateX(-50%)',
          borderBottom: '2px solid white'
        }
      },
      [theme.breakpoints.up('md')]: {
        borderRight: '2px solid white'
      }
    },
    services: {
      listStyleType: 'none'
    },
    service: {
      fontFamily: "'Heebo', sans-serif",
      textTransform: 'uppercase',
      '&:last-child': {
        listStyle: 'none'
      }
    },
    gridCenter: {
      fontWeight: 600,
      textAlign: 'center',
      alignSelf: 'center'
    }
  })
);

const IndexPage: React.FC<PageProps> = ({data}) => {
  const classes = useStyles();
  const mappedServices = data['allContentfulServices'].edges[0].node.services.map((service) => {
    return service;
  });
  return (
    <Layout>
      <SEO title="Home" />
      <Box display="grid" style={{gridTemplateColumns: "1fr", gridTemplateRows: "1fr auto"}} height="100%">
        <Box textAlign="center">
          <Container>
            <Typography variant="h2">Quality work for your home </Typography>
            <Box mt={3} mb={3}>
              <Typography variant="body1">Twenty years of experience in dockbuilding, concrete, &amp; union carpentry to help bring your project to life.</Typography>
            </Box>
          </Container>
        </Box>
        <Box bgcolor="#f7f4f4" p={2}>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <MainPic></MainPic>
              </Grid>
              <Grid item xs={12} sm={5} className={classes.gridCenter}>
                <Box>
                  <ul className={classes.services}>
                  { mappedServices.map((service, index) => {
                        return (
                          <li key={index} className={classes.service}>{service}</li>
                        )
                    })
                  }
                  </ul>
                </Box>
                <Box textAlign="center">
                  <Button color="primary" variant="contained" type="button" style={{fontSize: "20px"}}>Get a quote</Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box bgcolor="primary.main" p={2}>
          <Container>
            <Grid container spacing={3} style={{margin: 0, width: "100%"}}>
              <Grid item xs={12} md={6} className={classes.locationBorder}>
                <Box component="p"
                    m={0}
                    color="white"
                    textAlign={{xs: "center", md: "right"}}
                    fontFamily="'Heebo', sans-serif"
                    fontWeight={600}
                    fontSize={30}>Based in Long Beach</Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box component="p"
                  m={0}
                  color="white"
                  textAlign={{xs: "center", md: "left"}}
                  fontFamily="'Heebo', sans-serif"
                  fontWeight={600}
                  fontSize={30}>Serving the NY Metro Area</Box>
              </Grid>
              <Grid item xs={12}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24240.177100279503!2d-73.6861029969484!3d40.58526676342893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26ff6430184c9%3A0xd3936da1e33b9063!2sLong%20Beach%2C%20NY!5e0!3m2!1sen!2sus!4v1613943282273!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{border: 0, marginBottom: 0}}
                  loading="lazy"></iframe>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query ServicesQuery {
    allContentfulServices {
      edges {
        node {
            services
        }
      }
    }
  }`;

export default IndexPage
