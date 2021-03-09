import React from "react"
import { graphql, PageProps } from "gatsby"
import {Container, Typography, Box} from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Testimonials: React.FC<PageProps> = ({data}) => {
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
              <Box key={index}>
                <Typography variant="body1">{review.review}</Typography>
                <Typography variant="body1">- {review.name}</Typography>
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
