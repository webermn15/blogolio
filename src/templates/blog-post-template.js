import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/blogLayout'
import SEO from '../components/seo'


const BlogPostTemplate = ({data}) => {
	const { html, frontmatter } = data.markdownRemark
	const { date, title, author } = frontmatter
	return(
		<Layout
			article={<div className="post__wrapper"><div dangerouslySetInnerHTML={{__html: html}} /></div>}
		>
      <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
      <div className="post-header">
        <div className="post-title">{title}</div>
        <h3>{author}</h3>
        <h5>{date}</h5>
      </div>
    </Layout>
	)
}

export default BlogPostTemplate

export const blogPostQuery = graphql`
	query postQuery($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
    	html
    	frontmatter {
    		date(formatString: "MMMM DD, YYYY")
    		title
    		author
    	}
    }
  }
`