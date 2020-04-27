const path = require('path');

// // We will use the onCreateNode function from the Gatsby API.
// // As the name suggests, this function will run each time a node is created.
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  //   // What we will do next:
  //   // If we're looking at the nodes within MarkdownRemark (the blog posts),
  //   // we are creating a new field in each of the nodes for the slug, which will take the name of the file.

  if (node.internal.type === 'StrapiBlogPost') {
    const sluggedTitle = node.title.replace(/\s+/g, '-').toLowerCase();
    const slug = sluggedTitle;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
    createNodeField({
      node,
      name: 'type',
      value: 'blog',
    });
  } else if (node.internal.type === 'StrapiProject') {
    const sluggedName = node.title.replace(/\s+/g, '-').toLowerCase();
    const slug = sluggedName;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
    createNodeField({
      node,
      name: 'type',
      value: 'project',
    });
  }
};

// // We will now use the createPages function from the Gatsby API.
// // This will enable us to create a new page

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/BlogPost.js');
  const projectTemplate = path.resolve('./src/templates/ProjectPost.js');

  //   //   // This will get a slug for each of the existing nodes.
  const resp = await graphql(`
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

  // Create pages for blog posts, from blog post template.
  resp.data.allStrapiBlogPost.nodes.forEach((post) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.fields.slug}`,
      context: {
        post,
        slug: post.slug, // We are injecting the slug of the post in the context of the page.
      },
    });
  });

  // Create pages for project posts, from project post template.
  resp.data.allStrapiProject.nodes.forEach((post) => {
    createPage({
      component: projectTemplate,
      path: `/project/${post.fields.slug}`,
      context: {
        post,
        slug: post.slug, // We are injecting the slug of the post in the context of the page.
      },
    });
  });
};
