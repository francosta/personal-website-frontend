import React from 'react';
import cardGridStyles from './cardGrid.module.scss';

import Card from '../Card/Card';

const CardGrid = ({ posts, path }) => {
  return (
    <div className={cardGridStyles.cardGrid}>
      {posts.map((post, index) => {
        return <Card path={path} index={index} key={index} post={post} />;
      })}
    </div>
  );
};

export default CardGrid;
