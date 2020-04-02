import React from "react"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  const activateResponsiveMenu = () => {
    const navbarLinks = document.querySelector("#navbarLinks")
    navbarLinks.classList.toggle(navbarStyles.navbarResponsive)
    const burger = document.querySelector("#burger")
    burger.classList.toggle(navbarStyles.clicked)
  }

  return (
    <nav className={`${navbarStyles.navbar}`}>
      <div className={navbarStyles.logo}>
        <Link to="/">
          <h1 id={navbarStyles.logo}>Francisco Costa</h1>
        </Link>
      </div>
      <ul id="navbarLinks" className={`${navbarStyles.navbarLinks}`}>
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
      <div
        id="burger"
        onClick={activateResponsiveMenu}
        className={navbarStyles.burger}
      >
        <div className={navbarStyles.line1}></div>
        <div className={navbarStyles.line2}></div>
        <div className={navbarStyles.line3}></div>
      </div>
    </nav>
  )
}

export default Navbar
