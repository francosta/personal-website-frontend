import React from 'react';
import projectTitleStyles from './projectTitle.module.scss';
import Github from '../../images/logos/github.jpg';
import Youtube from '../../images/logos/youtube.jpg';

const ProjectTitle = ({ post }) => {
  return (
    <div className={projectTitleStyles.titleContainer}>
      <h1 className={projectTitleStyles.title}>{post.title}</h1>
      <div className={projectTitleStyles.networksContainer}>
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
  );
};

export default ProjectTitle;
