import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Layout from '../components/generalLayout'
import SEO from '../components/seo'
import WorkCard from '../components/workCard'

const Work = ({data}) => {
	const { edges } = data.allMarkdownRemark
	return(
		<Layout>
			<SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
			<h2>A selection of my projects, both unfinished and incomplete</h2>
			<div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>	
				{edges.map(({node}, i) => {
					return <WorkCard key={i} {...node} />
				})}
			</div>
		</Layout>
	)
}

export default Work

export const workQuery = graphql`
	query projectQuery {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/src/pages/work//" } }
			sort: { fields: [frontmatter___id], order: ASC }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						description
						repo
						link
					}
				}
			}
		}
	}
`