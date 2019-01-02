import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import SocialIcons from './socialIcons'

const Header = ({ siteTitle }) => (
  <header className="header">

    <div className="header-wrapper">
      <div className="header-title">
        <Link
          to="/"
        >
          __WEBSDEV
        </Link>
      </div>

      <nav>
        <ul className="header-nav">
          <Link
            to="/"
            style={{padding: "3px 0"}}
            activeStyle={{
              borderBottom: "1px solid"
            }}
          >
            Blog
          </Link>
          <Link
            to="/about/"
            style={{padding: "3px 0"}}
            activeStyle={{
              borderBottom: "1px solid"
            }}
          >
            About
          </Link>
          <Link
            to="/work/"
            style={{padding: "3px 0"}}
            activeStyle={{
              borderBottom: "1px solid"
            }}
          >
            Work
          </Link>
          <Link
            to="/smash/"
            style={{padding: "3px 0"}}
            activeStyle={{
              borderBottom: "1px solid"
            }}
          >
            Alter-Ego
          </Link>
        </ul>
      </nav>

      <SocialIcons />

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
