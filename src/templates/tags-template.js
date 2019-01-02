import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/blogLayout'
import SEO from '../components/seo'
import BlogCard from '../components/blogCard'

const TagsTemplate = ({data, pathContext}) => {
  const { edges } = data.allMarkdownRemark
  const { tag } = pathContext
	return(
		<Layout
      article={edges.map(({node}, i) => {
        return(<BlogCard key={i} {...node} />)
      })}
    >
      <SEO title={`Posts tagged: '${tag}'`} keywords={[`gatsby`, `application`, `react`]} />
      <div className="post-header">
        <div className="post-title">All posts tagged "{`${tag}`}"</div>
      </div>

    </Layout>
	)
}

export default TagsTemplate

export const tagsQuery = graphql`
	query TagsQuery($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            spoiler
            tags
          }
        }
      }
    }
  }
`