import PropTypes from 'prop-types';
import React from 'react';
import Navbar from '../Navbar/navbar';
import { Helmet } from 'react-helmet';
import favicon from '../../images/code-icon.svg';

const Header = ({ siteTitle }) => (
  <header>
    <Helmet>
      <link rel="icon" href={favicon} />
      <title>{siteTitle}</title>
    </Helmet>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
