import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/generalLayout'
import SEO from '../components/seo'

const About = ({data}) => {
	
	return(
		<Layout>
			<SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
			<div>
				<div className="page-title">Me af</div>
				<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>	
					<div style={{minWidth: "200px", marginRight: "2rem"}}>
						<Img fluid={data.aboutImage.childImageSharp.fluid} />
					</div>
					<div className="about-body">
						I discovered my love for programming through friends who worked as developers and engineers. Watching them engage and discuss their trade with one another prompted me to learn more about the field on my own, and I found myself engaged and inspired from the first line of Javascript I wrote. I'm capable of developing in a full stack role, but I tend to find myself gravitating towards the front end- I love writing Javascript, and my current flavor of framework is React. <br /> I'm a Chicago native who loves traveling, reading, and running, and on weekends I occasionally travel cross-country to compete in and commentate the oldest active competitive esport, Super Smash Brothers Melee for the Nintendo Gamecube. I'd love to play you sometime!
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default About

export const aboutQuery = graphql`
  query {
    aboutImage: file(relativePath: { eq: "about-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`