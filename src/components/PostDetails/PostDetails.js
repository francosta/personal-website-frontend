import React from 'react';
import Link from 'gatsby';
import postStyles from './postDetails.module.scss';
import avatar from '../../images/avatar.jpg';

const PostDetails = ({ post }) => {
  return (
    <div className={postStyles.details}>
      <Link to="/about">
        <img className={postStyles.avatar} src={avatar} alt="Francisco Costa" />
      </Link>
      <div className={postStyles.detailsBox}>
        <Link to="/about">
          <span className={postStyles.author}>Francisco Costa</span>
        </Link>
        <div className={postStyles.articleDetails}>
          <span className={postStyles.publishedDate}>{post.publishedDate}</span>
          <span>{Math.round(post.readingTime.minutes)}min read</span>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
