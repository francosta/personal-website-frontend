import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import postStyles from './projectPost.module.scss';

// Images import
import avatar from '../../images/relaxed-round.png';
import dateIcon from '../../images/date.svg';
import stackIcon from '../../images/code-icon.svg';
import summaryIcon from '../../images/summary.svg';

const Post = ({ post }) => {
  return (
    <div className={postStyles.container}>
      <section>
        <img
          className={postStyles.hero}
          src={`${process.env.API_URL}${post.hero.image.url}`}
          alt={post.hero.image.altText}
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
            <img src={dateIcon}></img>
          </div>
          <div className={postStyles.stackBox}>
            <div className={postStyles.stack}>
              <h2>Stack</h2>
              <ul>
                {post.stack.technology.map(technology => (
                  <li>{technology.name}</li>
                ))}
              </ul>
            </div>
            <img src={stackIcon}></img>
          </div>
        </div>
        <div className={postStyles.summaryContainer}>
          <img src={summaryIcon}></img>
          <div className={postStyles.summary}>
            <h2>Summary</h2>
            <p>{post.description}</p>
          </div>
        </div>
      </section>
      <section>
        <ReactMarkdown source={post.body} />
      </section>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.element.isRequired,
};

export default Post;
