import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/generalLayout'
import SEO from '../components/seo'

const NotFoundPage = ({data}) => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="page-title">How did you get here?</div>
    <p>If you think this is a bug please <a href="https://twitter.com/_websdev">tweet at me</a>! Frogs love bugs.</p>
    <a href="https://twitter.com/froggywave">
    	<Img fluid={data.frogImage.childImageSharp.fluid} alt="Box Frog" style={{maxWidth: "150px"}} />
    </a>
  </Layout>
)

export default NotFoundPage

export const frogQuery = graphql`
	query {
		frogImage: file(relativePath: { eq: "boxfrog.png" }) {
      childImageSharp {
        fluid(maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
	}
`