import React from 'react';
import PropTypes from 'prop-types';
import cardHeadingStyles from './cardHeading.module.scss';
import { Link } from 'gatsby';

/**
 * @function
 * @param {typeOfParam} props - What are the props
 * @returns {JSXElement} - What the return value is
 */
const CardHeading = ({ post, path }) => {
  return (
    <div className={cardHeadingStyles.titleContainer}>
      {path === '/' ? (
        <Link to={`/${post.fields.type === 'project' ? 'projects' : 'blog'}`}>
          <div className={cardHeadingStyles.postType}>
            <span>
              {post.fields.type.charAt(0).toUpperCase() +
                post.fields.type.slice(1)}
            </span>
          </div>
        </Link>
      ) : null}
      <h1 className={cardHeadingStyles.postTitle}>{post.title}</h1>
    </div>
  );
};

CardHeading.propTypes = {};

export default CardHeading;
