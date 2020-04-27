import React from 'react';
import blogPostHeaderStyles from './blogPostHeader.module.scss';

const BlogPostHeader = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p className={blogPostHeaderStyles.description}>{post.description}</p>
    </div>
  );
};

export default BlogPostHeader;
