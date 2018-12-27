import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './layout.css'

const Header = ({ siteTitle }) => (
  <div>

    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "80%", margin: "0 auto"}}>
      <div style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </div>

      <nav style={{margin: 0}}>
        <ul style={{display: "flex", flexDirection: "row", listStyle: "none", margin: 0}}>
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

      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{ width: `30px`, height: "30px", backgroundColor: "black" }}>
        </div>
        <div style={{ width: `30px`, height: "30px", backgroundColor: "black" }}>
        </div>
        <div style={{ width: `30px`, height: "30px", backgroundColor: "black" }}>
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
