import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/blogLayout'
import SEO from '../components/seo'
import BlogCard from '../components/blogCard'
import BlogAside from '../components/blogAside'

const IndexPage = ({data}) => {
  const cardInfo = data.allMarkdownRemark.edges
  return(
    <Layout
      section={cardInfo.map(({node}, i) => {
        return(<BlogCard key={i} {...node} />)
      })}
      aside={<BlogAside />}
    >
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
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
            date(formatString: "MM-DD-YY")
            title
            author
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`