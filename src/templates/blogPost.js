import React from 'react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/seo';
import Layout from '../components/Layout/layout';
import PostContainer from '../components/PostContainer/PostContainer';
import PostHero from '../components/PostHero/PostHero';
import BlogPostHeader from '../components/BlogPostHeader/BlogPostHeader';

const BlogPost = ({ pageContext, path }) => {
  const { post } = pageContext;

  return (
    <Layout path={path}>
      <SEO title={post.title} />
      <PostContainer>
        <section id="BlogPostHeader">
          <PostHero heroImage={post.hero} />
          <BlogPostHeader post={post} />
        </section>
        <section id="BlogPost">
          <ReactMarkdown source={post.body} />
        </section>
      </PostContainer>
    </Layout>
  );
};

export default BlogPost;
