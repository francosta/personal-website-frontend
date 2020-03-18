const path = require("path")

// // We will use the onCreateNode function from the Gatsby API.
// // As the name suggests, this function will run each time a node is created.
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  //   // What we will do next:
  //   // If we're looking at the nodes within MarkdownRemark (the blog posts),
  //   // we are creating a new field in each of the nodes for the slug, which will take the name of the file.

  if (node.internal.type === "StrapiBlogPost") {
    const sluggedTitle = node.title.replace(/\s+/g, "-").toLowerCase()
    const slug = sluggedTitle
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    createNodeField({
      node,
      name: "type",
      value: "blog",
    })
  }
}

// // We will now use the createPages function from the Gatsby API.
// // This will enable us to create a new page

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blogPost.js")

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
        }
      }
    }
  `)

  console.log(resp)

  //   //   // We will now create a page for each of the nodes in the response from the query.
  resp.data.allStrapiBlogPost.nodes.forEach(post => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.fields.slug}`,
      context: {
        post: post,
        slug: post.slug, //We are injecting the slug of the post in the context of the page.
      },
    })
  })
}
