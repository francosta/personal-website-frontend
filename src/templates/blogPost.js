import React from 'react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/seo';
import Layout from '../components/Layout/layout';
import PostContainer from '../components/PostContainer/PostContainer';
import PostHero from '../components/PostHero/PostHero';
import BlogPostHeader from '../components/BlogPostHeader/BlogPostHeader';
import CodeBlock from '../components/CodeBlock/CodeBlock';

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
        <section id="blogPost">
          <ReactMarkdown source={post.body} renderers={{ code: CodeBlock }} />
        </section>
      </PostContainer>
    </Layout>
  );
};

export default BlogPost;
