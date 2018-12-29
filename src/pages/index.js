import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/blogLayout'
import SEO from '../components/seo'
import BlogCard from '../components/blogCard'
import Featured from '../components/featured'

const IndexPage = ({data}) => {
  const cardInfo = data.allMarkdownRemark.edges
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