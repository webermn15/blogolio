import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, section, aside }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
              {section}
            </section>
            <aside>
              {aside}
            </aside>
          </main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
  section: PropTypes.node.isRequired,
  aside: PropTypes.node.isRequired,
}

export default Layout
