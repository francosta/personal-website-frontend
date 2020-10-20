import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SEO from '../components/seo';
import Layout from '../components/Layout/layout';
import PostContainer from '../components/PostContainer/PostContainer';
import PostHero from '../components/PostHero/PostHero';
import BlogPostHeader from '../components/BlogPostHeader/BlogPostHeader';

SyntaxHighlighter.registerLanguage('javascript', js);

const BlogPost = ({ pageContext, path }) => {
  const { post } = pageContext;

  const renderers = {
    code: ({ value }) => {
      return (
        <SyntaxHighlighter
          style={solarizedDark}
          language="javascript"
          children={value}
        />
      );
    },
  };

  return (
    <Layout path={path}>
      <SEO title={post.title} />
      <PostContainer>
        <section id="BlogPostHeader">
          <PostHero heroImage={post.hero} />
          <BlogPostHeader post={post} />
        </section>
        <section id="BlogPost">
          <ReactMarkdown source={post.body} renderers={renderers} />
        </section>
      </PostContainer>
    </Layout>
  );
};

export default BlogPost;
