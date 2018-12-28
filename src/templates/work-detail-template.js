import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/generalLayout'
import SEO from '../components/seo'

const WorkDetailTemplate = ({data}) => {
	const { html } = data.markdownRemark
	const { title, description, repo, link } = data.markdownRemark.frontmatter
	return(
		<Layout>
			<SEO title="title" keywords={[`gatsby`, `application`, `react`]} />
			<h1>{title}</h1>
			<h3>{description}</h3>
			<a href={repo} style={{marginRight: "2rem"}}>Github Repo</a><a href={link}>Project Link</a>
			<div dangerouslySetInnerHTML={{ __html: html}} />
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
    	}
    }
	}
`