import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/Layout/layout';
import blogStyles from './blog.module.scss';
import CardGrid from '../../components/CardGrid/CardGrid';

const Blog = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiBlogPost {
        nodes {
          hero {
            image {
              url
            }
            altText
          }
          title
          publishedDate(formatString: "DD MMMM YYYY")
          description
          body
          fields {
            slug
            type
          }
          readingTime {
            minutes
          }
        }
      }
    }
  `);

  const posts = data.allStrapiBlogPost.nodes;

  return (
    <Layout>
      <section className={blogStyles.container}>
        <CardGrid path={path} posts={posts} />
      </section>
    </Layout>
  );
};

export default Blog;
