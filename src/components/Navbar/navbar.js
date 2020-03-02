import React from "react"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <h1 id={navbarStyles.logo}>Francisco Costa</h1>
      <ul className={navbarStyles.navbarLinks}>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
