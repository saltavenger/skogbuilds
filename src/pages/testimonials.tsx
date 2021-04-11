import React from "react"
import { graphql, PageProps } from "gatsby"
import {Container, Typography, Box, Card, CardContent} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    attribution: {
      color: '#777',
      marginLeft: '45px'
    },
    quote: {
      '&:before': {
        content: '\'\"\'',
        display: 'inline-block',
        marginRight: '20px',
        fontSize: '70px',
        fontFamily: 'cursive',
        color: '#777'
      }
    }
  })
);

const Testimonials: React.FC<PageProps> = ({data}) => {
  const classes = useStyles();
  const mappedReviews = data['allContentfulTestimonials'].edges.map((review) => {
    return {
      name: review.node.name,
      review: review.node.review.review
    };
  });
  const [formattedReviews, setFormattedReviews] = React.useState(mappedReviews);

  return (
    <Layout tab={1}>
      <SEO title="Testimonials" />
      <Container>
        { formattedReviews.map((review, index) => {
            return (
              <Box key={index} mb={3}>
                <Card elevation={3}>
                  <CardContent>
                  <Typography variant="body1" component="blockquote" className={classes.quote}>{review.review}</Typography>
                  <Typography variant="body1" className={classes.attribution}>– {review.name}</Typography>
                  </CardContent>
                </Card>
              </Box>
            )
        })}
      </Container>
    </Layout>
  );
}


export const query = graphql`
  query TestimonialsQuery {
    allContentfulTestimonials {
      edges {
        node {
          name
          review {
            review
          }
        }
      }
    }
  }`;

export default Testimonials
