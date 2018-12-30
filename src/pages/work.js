import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Layout from '../components/generalLayout'
import SEO from '../components/seo'
import WorkCard from '../components/workCard'

const Work = ({data}) => {
	const { edges } = data.allMarkdownRemark
	console.log(edges)
	return(
		<Layout>
			<SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
			<div className="page-title">A collection of my projects, both unfinished and incomplete</div>
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