import React from 'react';
import PropTypes from 'prop-types';
import cardDescriptionStyles from './cardDescription.module.scss';

/**
 * @function
 * @param {typeOfParam} props - What are the props
 * @returns {JSXElement} - What the return value is
 */
const CardDescription = ({ descriptionExcerpt }) => {
  return (
    <h6 className={cardDescriptionStyles.description}>{descriptionExcerpt}</h6>
  );
};

CardDescription.propTypes = {};

export default CardDescription;
