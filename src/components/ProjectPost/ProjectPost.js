import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import postStyles from './projectPost.module.scss';

// Images import
import dateIcon from '../../images/date.svg';
import stackIcon from '../../images/code-icon.svg';
import summaryIcon from '../../images/summary.svg';

const Post = ({ post }) => {
  return (
    <div className={postStyles.container}>
      <section className={postStyles.projectHeader}>
        <img
          className={postStyles.hero}
          src={`${post.hero.image.url}`}
          alt={post.hero.altText}
        />
        <h1 className={postStyles.title}>{post.title}</h1>
      </section>
      <section className={postStyles.summaryBox}>
        <div className={postStyles.specs}>
          <div className={postStyles.dateBox}>
            <div className={postStyles.date}>
              <h2>Date of Project</h2>
              <span>{post.publishedDate}</span>
            </div>
            <img src={dateIcon} alt="Calendar icon in black and white" />
          </div>
          <div className={postStyles.stackBox}>
            <div className={postStyles.stack}>
              <h2>Stack</h2>
              <ul>
                {post.stack.technology.map((technology) => (
                  <li>{technology.name}</li>
                ))}
              </ul>
            </div>
            <img src={stackIcon} alt="Programming icon in black and white" />
          </div>
        </div>
        <div className={postStyles.summaryContainer}>
          <img src={summaryIcon} alt="Text icon in black and white" />
          <div className={postStyles.summary}>
            <h2>Summary</h2>
            <p>{post.description}</p>
          </div>
        </div>
      </section>
      <section>
        <ReactMarkdown className={postStyles.body}>{post.body}</ReactMarkdown>
      </section>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.element.isRequired,
};

export default Post;
