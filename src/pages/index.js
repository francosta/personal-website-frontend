import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/index.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            publishDate
            author {
              name
            }
            slug
            description {
              description
            }
            body {
              body
            }
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map((post, index) => {
        return <h1 key={index}>{post.node.title}</h1>
      })}
    </Layout>
  )
}

export default IndexPage
