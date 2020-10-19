import React from 'react';
import PropTypes from 'prop-types';
import imageStyles from './cardImage.module.scss';

/**
 * @function
 * @param {typeOfParam} props - What are the props
 * @returns {JSXElement} - What the return value is
 */
const CardImage = ({ image }) => {
  return (
    <img
      className={imageStyles.image}
      src={`${image.image.url}`}
      alt={image.altText}
    />
  );
};

CardImage.propTypes = {};

export default CardImage;
