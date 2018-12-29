import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SocialIcon = ({path, name}) => {
	return(
		<StaticQuery
	    query={graphql`
	      query {
	      	socialImage: file(absolutePath: { regex: "${path}" }) {
			      childImageSharp {
			        fluid(maxWidth: 40, maxHeight: 40, quality: 100) {
			          ...GatsbyImageSharpFluid
			        }
			      }
			    }
	      }
	    `}
	    render={data => {
	    	return(
	    		<Img 
	    			fluid={data.socialImage.childImageSharp.fluid}
	    			alt={name}
					/>
	    )}
	  	}
	  />
	)
}
export default SocialIcon