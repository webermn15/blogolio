import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import github from '../images/social/github.png'
import twitter from '../images/social/twitter-circle.png'
import linkedin from '../images/social/linkedin.png'

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

      <div className="header-social-icons">
        <div className="social-icon__wrapper">
          <a href="https://twitter.com/_websdev">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://github.com/webermn15">
            <img src={github} alt="Github" />
          </a>
          <a href="https://linkedin.com/in/michaelnweber">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
