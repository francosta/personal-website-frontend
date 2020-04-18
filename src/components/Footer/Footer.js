import React from 'react';
import footerStyles from './footer.module.scss';
import linkedinLogo from '../../images/linkedin.png';
import githubLogo from '../../images/github.png';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/francosta/" target="blank">
        <img src={githubLogo} alt="Gitub logo" />
        <h1>Github</h1>
      </a>
      <a href="https://www.linkedin.com/in/francosta/" target="blank">
        <img src={linkedinLogo} alt="Linkedin logo" />
        <h1>Linkedin</h1>
      </a>
    </footer>
  );
};

export default Footer;
