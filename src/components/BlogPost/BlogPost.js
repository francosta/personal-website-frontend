import React from 'react';
import ReactMarkdown from 'react-markdown';
import postStyles from './blogPost.module.scss';
import PostDetails from '../PostDetails/PostDetails';
import globalStyles from '../../styles/styles.module.scss';

const Post = ({ post }) => {
  return (
    <div className={postStyles.container}>
      <img
        className={globalStyles.hero}
        src={`${post.hero.image.url}`}
        alt={post.hero.altText}
      />
      <h1>{post.title}</h1>
      <p className={postStyles.description}>{post.description}</p>
      <ReactMarkdown className={postStyles.body} source={post.body} />
    </div>
  );
};

export default Post;
