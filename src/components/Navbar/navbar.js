import React from "react"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.logo}>
        <Link to="/">
          <h1 id={navbarStyles.logo}>Francisco Costa</h1>
        </Link>
      </div>
      <ul className={navbarStyles.navbarLinks}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
