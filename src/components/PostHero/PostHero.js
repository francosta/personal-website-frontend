import React from 'react';
import heroStyles from './postHero.module.scss';

const PostHero = ({ heroImage }) => {
  return (
    <img
      className={heroStyles.hero}
      src={`${heroImage.image.url}`}
      alt={heroImage.altText}
    />
  );
};

export default PostHero;
