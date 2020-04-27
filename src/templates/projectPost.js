import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import Post from '../components/ProjectPost/ProjectPost';

const ProjectPost = ({ pageContext, path }) => {
  return (
    <Layout path={path}>
      <SEO title={pageContext.post.title} />
      <Post post={pageContext.post} />
    </Layout>
  );
};

export default ProjectPost;
