import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/generalLayout'
import SEO from '../components/seo'

const Smash = ({data}) => {
	
	return(
		<Layout>
			<SEO title="Smash" keywords={[`gatsby`, `application`, `react`]} />
			<div>
				<div className="page-title">Me commentating af</div>
				<Img fluid={data.commentatorImage.childImageSharp.fluid} />
				<div className="smash-body">I moonlight as a commentator for one of the longest-standing competitive gaming communities, Super Smash Bros. Melee. Look at me! I'm talking into a microphone!</div>
			</div>
		</Layout>
	)
}

export default Smash

export const smashQuery = graphql`
  query {
    commentatorImage: file(relativePath: { eq: "comm-wide-crop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 550, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`