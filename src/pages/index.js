import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/blogLayout'
import SEO from '../components/seo'
import BlogCard from '../components/blogCard'

const IndexPage = ({data}) => {
  const cardInfo = data.allMarkdownRemark.edges
  return(
    <Layout
      article={cardInfo.map(({node}, i) => {
        return(<BlogCard key={i} {...node} />)
      })}
    >
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="page-title">Thoughts</div>
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/pages/posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
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
          }
        }
      }
    }
  }
`