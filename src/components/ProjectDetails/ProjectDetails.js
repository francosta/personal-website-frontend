import React from 'react';
import postStyles from './projectDetails.module.scss';

// Images import
import dateIcon from '../../images/date.svg';
import stackIcon from '../../images/code-icon.svg';
import summaryIcon from '../../images/summary.svg';

const ProjectDetails = ({ post }) => {
  return (
    <section className={postStyles.summaryBox}>
      <div className={postStyles.specs}>
        <div className={postStyles.dateBox}>
          <div className={postStyles.heading}>
            <span>Date of Project</span>
            <img src={dateIcon} alt="Calendar icon in black and white" />
          </div>
          <div className={postStyles.postDate}>
            <span>{post.publishedDate}</span>
          </div>
        </div>
        <div className={postStyles.stackBox}>
          <div className={postStyles.heading}>
            <span>Stack</span>
            <img src={stackIcon} alt="Programming icon in black and white" />
          </div>
          <div className={postStyles.postStack}>
            <ul>
              {post.stack.technology.map((technology) => (
                <li>{technology.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={postStyles.summaryContainer}>
        <div className={postStyles.heading}>
          <img src={summaryIcon} alt="Text icon in black and white" />
          <span>Summary</span>
        </div>
        <p>{post.description}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
