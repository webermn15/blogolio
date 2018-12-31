import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


import Layout from '../components/generalLayout'
import SEO from '../components/seo'

const WorkDetailTemplate = ({data}) => {
	const { html } = data.markdownRemark
	const { title, description, repo, link, thumbnail } = data.markdownRemark.frontmatter
	return(
		<Layout>
			<SEO title="title" keywords={[`gatsby`, `application`, `react`]} />
			<Img fluid={thumbnail.childImageSharp.fluid} alt={title} />
			<div className="work-template-title ">{title}</div>
			<h3>{description}</h3>
			<a href={repo} style={{marginRight: "2rem"}}>Github Repo</a><a href={link}>Project Link</a>
			<div className="work-detail__wrapper">
				<div dangerouslySetInnerHTML={{ __html: html}} />
			</div>
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
`