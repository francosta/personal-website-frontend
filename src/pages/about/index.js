import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/Layout/layout';
import aboutStyles from './about.module.scss';
import avatar from '../../images/avatar.jpg';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiAbout {
        about_me
      }
    }
  `);

  const { about_me, avatar } = data.strapiAbout;

  return (
    <Layout>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.profilePicture}>
          <img className={aboutStyles.profilePicture} src={avatar} />
        </div>
        <div className={aboutStyles.aboutText}>
          <p>{about_me}</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
