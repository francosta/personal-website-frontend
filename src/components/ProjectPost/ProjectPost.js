import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import postStyles from './projectPost.module.scss';
import globalStyles from '../../styles/styles.module.scss';

// Images import
import dateIcon from '../../images/date.svg';
import stackIcon from '../../images/code-icon.svg';
import summaryIcon from '../../images/summary.svg';
import Github from '../../images/logos/github.jpg';
import Youtube from '../../images/logos/youtube.jpg';

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
      <section className={postStyles.summaryBox}>
        <div className={postStyles.specs}>
          <div className={postStyles.dateBox}>
            <div className={postStyles.date}>
              <span className={postStyles.heading}>Date of Project</span>
              <span>{post.publishedDate}</span>
            </div>
            <img src={dateIcon} alt="Calendar icon in black and white" />
          </div>
          <div className={postStyles.stackBox}>
            <div className={postStyles.stack}>
              <span className={postStyles.heading}>Stack</span>
              <ul>
                {post.stack.technology.map(technology => (
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
            <span className={postStyles.heading}>Summary</span>
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
