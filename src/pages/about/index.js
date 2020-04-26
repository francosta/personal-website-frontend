import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout/layout';
import aboutStyles from './about.module.scss';
import avatar from '../../images/avatar.jpg';
import globalStyles from '../../styles/styles.module.scss';

const About = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      strapiAbout {
        about_me
      }
    }
  `);

  const { about_me } = data.strapiAbout;

  return (
    <Layout path={path}>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.profilePicture}>
          <img
            className={aboutStyles.profilePicture}
            src={avatar}
            alt="Francisco Costa"
          />
        </div>
        <div className={aboutStyles.aboutText}>
          <ReactMarkdown source={about_me} linkTarget="blank" />
        </div>
      </div>
    </Layout>
  );
};

export default About;
