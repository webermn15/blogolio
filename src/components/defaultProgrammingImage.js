import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const DefaultProgrammingImage = () => {
	return(
		<StaticQuery
	    query={graphql`
	      query {
	      	defaultImage: file(relativePath: { eq: "default-programming-bg.jpg" }) {
			      childImageSharp {
			        fluid(maxWidth: 1000, maxHeight: 550, quality: 100) {
			          ...GatsbyImageSharpFluid
			        }
			      }
			    }
	      }
	    `}
	    render={data => {
	    	return(
	    		<Img 
	    			fluid={data.defaultImage.childImageSharp.fluid}
	    			style={{
					    position: "absolute",
					    left: 0,
					    top: 0,
					    width: "100%",
					    height: "100%",
					    zIndex: 0
	    			}}
	    		/>
	    )}
	  	}
	  />
	)
}

export default DefaultProgrammingImage