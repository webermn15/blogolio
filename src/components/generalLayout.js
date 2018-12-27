import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, section, aside }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleGeneralQuery {
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
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
