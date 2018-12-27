import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogCard from '../components/blog-card'

const IndexPage = (props) => {
  const cardInfo = props.data.allMarkdownRemark.edges
  console.log(cardInfo)
  return(
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Blog Home</h1>
      {cardInfo.map(({node}, i) => {
        return(
          <BlogCard key={i} {...node} />
        )
      })}
    </Layout>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD")
            title
            author
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`