import React from 'react';
import Layout from '../components/Layout/layout';
import Post from '../components/BlogPost/BlogPost';

const BlogPost = ({ pageContext, path }) => {
  return (
    <Layout path={path}>
      <Post post={pageContext.post} />
    </Layout>
  );
};

export default BlogPost;
