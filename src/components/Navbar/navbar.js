import React from 'react';
import { Link } from 'gatsby';
import navbarStyles from './navbar.module.scss';

const Navbar = ({ path }) => {
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
          <li
          // className={
          //   path !== '/' &&
          //   path.match(new RegExp('/' + '(.*)' + '/'))[1] === 'about'
          //     ? `${navbarStyles.active}`
          //     : null
          // }
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={
              path !== '/' &&
              path.match(new RegExp('/' + '(.*)' + '/'))[1] === 'blog'
                ? `${navbarStyles.active}`
                : null
            }
          >
            <Link to="/blog">Blog</Link>
          </li>
          <li
            className={
              path !== '/' &&
              path.match(new RegExp('/' + '(.*)' + '/'))[1] === 'projects'
                ? `${navbarStyles.active}`
                : null
            }
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            className={
              path !== '/' &&
              path.match(new RegExp('/' + '(.*)' + '/'))[1] === 'contact'
                ? `${navbarStyles.active}`
                : null
            }
          >
            <Link to="/contact">Contact</Link>
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
