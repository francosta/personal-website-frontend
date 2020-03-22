import React from "react"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  // document.body.classList.toggle("js-enabled")
  let hamburger = document.getElementById(navbarStyles.hamburger)
  hamburger.setAttribute("aria-expanded", "false")

  hamburger.onclick = function() {
    if (this.getAttribute("aria-expanded") == "false") {
      this.setAttribute("aria-expanded", "true")
    } else {
      this.setAttribute("aria-expanded", "false")
    }
  }

  return (
    <nav className={`${navbarStyles.navbar} ${navbarStyles.jsEnabled}`}>
      <div className={navbarStyles.logo}>
        <Link to="/">
          <h1 id={navbarStyles.logo}>Francisco Costa</h1>
        </Link>
      </div>
      <button id={navbarStyles.hamburger} aria-expanded="true">
        <span>menu</span>
        <span id={navbarStyles.expanded}>expanded</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </button>
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
