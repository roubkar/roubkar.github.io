import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="header-nav">
      <Link to="/" className="header-title">{siteTitle}</Link>
      <ul className="nav-items">
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/blog" activeClassName="active">Blog</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
