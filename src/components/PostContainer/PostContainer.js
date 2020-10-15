import React from 'react';
import postContainerStyles from './postContainer.module.scss';

const PostContainer = ({ children }) => {
  console.log(children);
  return <div className={postContainerStyles.container}>{children}</div>;
};

export default PostContainer;
