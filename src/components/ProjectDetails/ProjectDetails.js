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
          <div className={postStyles.date}>
            <div className={postStyles.heading}>
              <span>Date of Project</span>
            </div>
            <div className={postStyles.postDate}>
              <span>{post.publishedDate}</span>
            </div>
          </div>
          <img src={dateIcon} alt="Calendar icon in black and white" />
        </div>
        <div className={postStyles.stackBox}>
          <div className={postStyles.stack}>
            <div className={postStyles.heading}>Stack</div>
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
          <div className={postStyles.heading}>
            <span>Summary</span>
          </div>
          <p>{post.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
