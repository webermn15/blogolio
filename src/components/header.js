import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './layout.css'

const Header = ({ siteTitle }) => (
  <div>

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
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>

    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
