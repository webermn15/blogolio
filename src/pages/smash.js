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
				<div className="page-title">Smash</div>
				<Img fluid={data.commentatorImage.childImageSharp.fluid} style={{marginTop: "1rem"}} />
				<div className="photo-cred" style={{textAlign: "right"}}>Photo Credit -<a href="http://rmpaul.com/">Rob Paul</a></div>
				<div className="smash-body">
					I moonlight as a commentator for one of the longest-standing competitive gaming communities, Super Smash Bros. Melee. Look at me! I'm talking into a microphone!
					<br /><br />
					<strong><a href="https://youtu.be/BAckLJfm4ZY">This</a></strong> is the one and only reel of my work I've put together, from 2016. I've been an active member of the scene since 2013, although in the past year it's taken a back seat in favor of programming. If you've stumbled across videos of competitive Melee in the past, there's a chance you heard my voice narrating the action! Don't hesitate to reach out if you're interested in learning more.
				</div>
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