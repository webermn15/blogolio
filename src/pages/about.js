import React from 'react'
// import { graphql } from 'gatsby'

import Layout from '../components/generalLayout'
import SEO from '../components/seo'

const About = () => {

	return(
		<Layout>
			<SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
			<div>
				this is the about page yall lmaooo
			</div>
		</Layout>
	)
}

export default About