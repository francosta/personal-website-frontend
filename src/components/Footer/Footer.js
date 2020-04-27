import React from 'react';
import linkedinLogo from '../../images/linkedin.png';
import githubLogo from '../../images/github.png';
import footerStyles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <a href="https://github.com/francosta/" target="blank">
        <img src={githubLogo} alt="Gitub logo" />
        {/* <h1>Github</h1> */}
      </a>
      <a href="https://www.linkedin.com/in/francosta/" target="blank">
        <img src={linkedinLogo} alt="Linkedin logo" />
        {/* <h1>Linkedin</h1> */}
      </a>
    </footer>
  );
};

export default Footer;
