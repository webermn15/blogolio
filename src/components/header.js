import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './layout.css'

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
            activeStyle={{
              textDecoration: "underline"
            }}
          >
            Blog
          </Link>
          <Link
            to="/about/"
            activeStyle={{
              textDecoration: "underline"
            }}
          >
            About
          </Link>
          <Link
            to="/work/"
            activeStyle={{
              textDecoration: "underline"
            }}
          >
            Work
          </Link>
          <Link
            to="/smash/"
            activeStyle={{
              textDecoration: "underline"
            }}
          >
            Alter-Ego
          </Link>
        </ul>
      </nav>

      <div className="header-social-icons">
      connect:
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
