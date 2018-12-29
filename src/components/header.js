import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import SocialIcon from './socialIcon'

const Header = ({ siteTitle }) => (
  <header className="header">

    <div className="header-wrapper">
      <div className="header-title">
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </div>

      <nav>
        <ul className="header-nav">
          <Link
            to="/"
            style={{padding: "3px 0"}}
            activeStyle={{
              borderBottom: "1px solid #f6f5f3"
            }}
          >
            Blog
          </Link>
          <Link
            to="/about/"
            style={{padding: "3px 0"}}
            activeStyle={{
              borderBottom: "1px solid #f6f5f3"
            }}
          >
            About
          </Link>
          <Link
            to="/work/"
            style={{padding: "3px 0"}}
            activeStyle={{
              borderBottom: "1px solid #f6f5f3"
            }}
          >
            Work
          </Link>
          <Link
            to="/smash/"
            style={{padding: "3px 0"}}
            activeStyle={{
              borderBottom: "1px solid #f6f5f3"
            }}
          >
            Alter-Ego
          </Link>
        </ul>
      </nav>

      <div className="header-social-icons">
      connect:
        
        <SocialIcon path="../images/linkedin.png" name="LinkedIn" />
        <SocialIcon path="../images/github.png" name="Github" />
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
