import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/generalLayout'
import SEO from '../components/seo'

const WorkDetailTemplate = (props) => {
	console.log(props)
	return(
		<Layout>
			<SEO title="title" keywords={[`gatsby`, `application`, `react`]} />

		</Layout>
	)
}

export default WorkDetailTemplate

export const workDetailQuery = graphql`
	query projectDetailQuery($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
    	html
    	frontmatter {
    		id
    		title
    		repo
    		link
    	}
    }
	}
`