import React from 'react';
import postContainerStyles from './postContainer.module.scss';

const PostContainer = ({ children }) => {
  return <div className={postContainerStyles.container}>{children}</div>;
};

export default PostContainer;
