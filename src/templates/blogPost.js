import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/Layout/layout';
import Post from '../components/BlogPost/BlogPost';

const BlogPost = ({ pageContext, path }) => {
  return (
    <Layout path={path}>
      <SEO title={pageContext.post.title} />
      <Post post={pageContext.post} />
    </Layout>
  );
};

export default BlogPost;
