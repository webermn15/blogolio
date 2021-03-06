import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/generalLayout'
import SEO from '../components/seo'
import WorkCard from '../components/workCard'

const Work = ({data}) => {
	const { edges } = data.allMarkdownRemark
	return(
		<Layout>
			<SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
			<div className="page-title">A selection of my projects</div>
			<div className="work__wrapper">	
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
						tech
						thumbnail {
							childImageSharp {
								fluid(maxWidth: 500) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`