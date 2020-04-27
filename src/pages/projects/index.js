import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/Layout/layout';
import projectStyles from './projects.module.scss';
import CardGrid from '../../components/CardGrid/CardGrid';
import SEO from '../../components/seo';

const Blog = ({ path }) => {
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
    <Layout path={path}>
      <SEO title="Projects" />
      <section className={projectStyles.container}>
        <CardGrid path={path} posts={posts} />
      </section>
    </Layout>
  );
};

export default Blog;
