import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogCard from '../components/blog-card'
import Featured from '../components/featured'

const IndexPage = (props) => {
  const cardInfo = props.data.allMarkdownRemark.edges
  return(
    <Layout
      section={cardInfo.map(({node}, i) => {
        if (i === 0) {
          return(<Featured key={i} {...node}/>)
        } else {
          return(
            <BlogCard key={i} {...node} />
          )
        }
      })}
      aside={<div>this is the aside ayyy its the fonz ayyy</div>}
    >
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Landing Page</h1>
      
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