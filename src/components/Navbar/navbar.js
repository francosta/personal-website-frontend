import React from 'react';
import { Link } from 'gatsby';
import navbarStyles from './navbar.module.scss';

const Navbar = () => {
  const activateResponsiveMenu = () => {
    const navbarLinks = document.querySelector('#navbarLinks');
    navbarLinks.classList.toggle(navbarStyles.navbarResponsive);
    const burger = document.querySelector('#burger');
    burger.classList.toggle(navbarStyles.clicked);
  };

  return (
    <nav>
      <div className={navbarStyles.navbar}>
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
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <div
          id="burger"
          onClick={activateResponsiveMenu}
          onKeyDown={activateResponsiveMenu}
          className={navbarStyles.burger}
          role="menu"
          tabIndex={0}
        >
          <div className={navbarStyles.line1} />
          <div className={navbarStyles.line2} />
          <div className={navbarStyles.line3} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
