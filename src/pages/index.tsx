import React from "react"
import { PageProps } from "gatsby"
import {Box, Container, Typography, Grid} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

import Layout from "../components/layout"
import SEO from "../components/seo"

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
          borderBottom: '2px solid #6d2c2c'
        }
      },
      [theme.breakpoints.up('md')]: {
        borderRight: '2px solid #6d2c2c'
      }
    }
  })
);

const IndexPage: React.FC<PageProps> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
      <Box display="grid" style={{gridTemplateColumns: "1fr", gridTemplateRows: "1fr auto", gap: "16px"}} height="100%">
        <Box textAlign="center">
          <Container>
            <Typography variant="h2">Quality work for your home </Typography>
            <Box textAlign="left">
              <Typography variant="body1">Bringing twenty years of experience in dockbuilding, concrete, &amp; union carpentry.</Typography>
              <Typography variant="h3">Services:</Typography>
              <ul>
                <li><Typography variant="body1">Carpentry</Typography></li>
                <li><Typography variant="body1">Framing</Typography></li>
                <li><Typography variant="body1">Drywall</Typography></li>
                <li><Typography variant="body1">Paint &amp; Spackle</Typography></li>
                <li><Typography variant="body1">Flooring &amp; Tile</Typography></li>
                <li><Typography variant="body1">Finish work</Typography></li>
                <li><Typography variant="body1">Pressure washing</Typography></li>
                <li><Typography variant="body1">...and more!</Typography></li>
              </ul>
            </Box>
          </Container>
        </Box>
        <Box bgcolor="#e2dbca" p={2}>
          <Container>
            <Grid container spacing={3} style={{margin: 0, width: "100%"}}>
              <Grid item xs={12} md={6} className={classes.locationBorder}>
                <Box component="p"
                    m={0}
                    textAlign={{xs: "center", md: "right"}}
                    fontFamily="'Heebo', sans-serif"
                    color="primary.main"
                    fontWeight={600}
                    fontSize={30}>Based in Long Beach</Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box component="p"
                  m={0}
                  textAlign={{xs: "center", md: "left"}}
                  fontFamily="'Heebo', sans-serif"
                  color="primary.main"
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

export default IndexPage
