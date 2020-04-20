import React from 'react';
import Layout from '../components/Layout/layout';
import Post from '../components/BlogPost/BlogPost';

const BlogPost = ({ pageContext }) => {
  return (
    <Layout>
      <Post post={pageContext.post} />
    </Layout>
  );
};

export default BlogPost;
