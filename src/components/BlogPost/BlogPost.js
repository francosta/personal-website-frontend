import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import postStyles from './blogPost.module.scss';
import avatar from '../../images/avatar.jpg';

const Post = ({ post }) => {
  return (
    <div className={postStyles.container}>
      <img
        className={postStyles.hero}
        src={`${post.hero.image.url}`}
        alt={post.hero.image.altText}
      />
      <h1 className={postStyles.title}>{post.title}</h1>
      <h2 className={postStyles.description}>{post.description}</h2>
      <div className={postStyles.details}>
        <Link to="/about">
          <img
            className={postStyles.avatar}
            src={avatar}
            alt="Francisco Costa"
          />
        </Link>
        <div className={postStyles.detailsBox}>
          <Link to="/about">
            <span className={postStyles.author}>Francisco Costa</span>
          </Link>
          <div className={postStyles.articleDetails}>
            <span className={postStyles.publishedDate}>
              {post.publishedDate}
            </span>
            <span>{Math.round(post.readingTime.minutes)}min read</span>
          </div>
        </div>
      </div>
      <ReactMarkdown className={postStyles.body}>{post.body}</ReactMarkdown>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.element.isRequired,
};

export default Post;
