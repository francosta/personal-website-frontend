import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import PostContainer from '../components/PostContainer/PostContainer';
import PostHero from '../components/PostHero/PostHero';
import ProjectTitle from '../components/ProjectTitle/ProjectTitle';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import CodeBlock from '../components/CodeBlock/CodeBlock';

const ProjectPost = ({ pageContext, path }) => {
  const { post } = pageContext;

  return (
    <Layout path={path}>
      <SEO title={post.title} />
      <PostContainer>
        <section id="ProjectHeader">
          <PostHero heroImage={post.hero} />
          <ProjectTitle post={post} />
          <ProjectDetails post={post} />
        </section>
        <section id="ProjectBody">
          <ReactMarkdown source={post.body} renderers={{ code: CodeBlock }} />
        </section>
      </PostContainer>
    </Layout>
  );
};

export default ProjectPost;
