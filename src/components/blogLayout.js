import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import BlogAside from './blogAside'
import './style.scss'

const Layout = ({ children, article }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleBlogQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="main-content__wrapper">
        {children}
          <main className="main-content">
            <section>
              {article}
            </section>
            <aside>
              <BlogAside />
            </aside>
          </main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
  article: PropTypes.node.isRequired,
}

export default Layout
