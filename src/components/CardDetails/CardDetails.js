import React from 'react';
import PropTypes from 'prop-types';
import cardDetailsStyles from './cardDetails.module.scss';

/**
 * @function
 * @param {typeOfParam} props - What are the props
 * @returns {JSXElement} - What the return value is
 */
const CardDetails = ({ post }) => {
  return (
    <div className={cardDetailsStyles.details}>
      <ul>
        <li className={cardDetailsStyles.publishedDate}>
          {post.publishedDate}
        </li>
        <li>{Math.round(post.readingTime.minutes)} mins read</li>
      </ul>
    </div>
  );
};

CardDetails.propTypes = {};

export default CardDetails;
