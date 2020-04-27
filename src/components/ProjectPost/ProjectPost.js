import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import postStyles from './projectPost.module.scss';
import globalStyles from '../../styles/styles.module.scss';

// Images import
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import ProjectTitle from '../ProjectTitle/ProjectTitle';

const Post = ({ post }) => {
  return (
    <div className={globalStyles.container}>
      <section className={postStyles.projectHeader}>
        <img
          className={globalStyles.hero}
          src={`${post.hero.image.url}`}
          alt={post.hero.altText}
        />
        <ProjectTitle post={post} />
      </section>
      <ProjectDetails post={post} />
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
