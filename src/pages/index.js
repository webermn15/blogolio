import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogCard from '../components/blog-card'
import Featured from '../components/featured'

const IndexPage = (props) => {
  const cardInfo = props.data.allMarkdownRemark.edges
  return(
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Landing Page</h1>
      <Featured {...cardInfo[0].node}/>
      <main style={{display: "flex", flexDirection: "row"}}>
        <section style={{flexGrow: 2, border: "1px solid black"}}>
          {cardInfo.map(({node}, i) => {
            if (i === 0) {
              return(<div key={i}></div>)
            } else {
              return(
                <BlogCard key={i} {...node} />
              )
            }
          })}
        </section>
        <aside style={{flexGrow: 1, border: "1px solid black", minWidth: "25%"}}>
          this is the sidebar
        </aside>
      </main>
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