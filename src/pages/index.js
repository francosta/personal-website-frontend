import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/index.scss"
import indexStyles from "./index.module.scss"

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
      <div className={indexStyles.postList}>
        {posts.map((post, index) => {
          return <h1 key={index}>{post.node.title}</h1>
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
