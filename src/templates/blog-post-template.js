import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'


const BlogPostTemplate = ({data}) => {
	const { html, frontmatter } = data.markdownRemark
	const { date, title, author } = frontmatter
	return(
		<Layout
			section={<div dangerouslySetInnerHTML={{__html: html}} />}
      aside={<div>this is the aside this is the aside yeet</div>}
		>
      <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h5>{date}</h5>
    </Layout>
	)
}

export const blogPostQuery = graphql`
	query blogPostQuery($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
    	html
    	frontmatter {
    		date(formatString: "MMMM, DD YYYY")
    		title
    		author
    	}
    }
	}
`
export default BlogPostTemplate