import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import postStyles from './projectPost.module.scss';
import globalStyles from '../../styles/styles.module.scss';

// Images import
import Github from '../../images/logos/github.jpg';
import Youtube from '../../images/logos/youtube.jpg';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const Post = ({ post }) => {
  return (
    <div className={globalStyles.container}>
      <section className={postStyles.projectHeader}>
        <img
          className={globalStyles.hero}
          src={`${post.hero.image.url}`}
          alt={post.hero.altText}
        />
        <div className={postStyles.titleContainer}>
          <h1 className={postStyles.title}>{post.title}</h1>
          <div className={postStyles.networksContainer}>
            {post.networks.map((network, index) => {
              return (
                <a index={index} href={network.link} target="blank">
                  <img
                    src={network.network === 'Github' ? Github : Youtube}
                    alt="Network logo"
                  />
                </a>
              );
            })}
          </div>
        </div>
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
