import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/Layout/layout';
import blogStyles from './blog.module.scss';
import CardGrid from '../../components/CardGrid/CardGrid';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProject {
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
          readingTime {
            minutes
          }
          fields {
            slug
            type
          }
          stack {
            technology {
              name
            }
          }
          networks {
            network
            link
          }
        }
      }
    }
  `);

  const posts = data.allStrapiProject.nodes;

  return (
    <Layout>
      <section className={blogStyles.container}>
        <CardGrid posts={posts} />
      </section>
    </Layout>
  );
};

export default Blog;
