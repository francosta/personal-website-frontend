import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  const navbarSlide = () => {
    const navLinks = document.querySelector(
      ".navbar-module--navbar-links--21od5"
    )
    navLinks.classList.toggle("nav-active")
  }

  return (
    <nav className={`${navbarStyles.navbar}`}>
      <div className={navbarStyles.logo}>
        <Link to="/">
          <h1 id={navbarStyles.logo}>Francisco Costa</h1>
        </Link>
      </div>
      <ul className={`${navbarStyles.navbarLinks} ${navbarStyles.navActive}`}>
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
      <div className={navbarStyles.burger} onClick={navbarSlide}>
        <div className={navbarStyles.line1}></div>
        <div className={navbarStyles.line1}></div>
        <div className={navbarStyles.line1}></div>
      </div>
    </nav>
  )
}

export default Navbar
