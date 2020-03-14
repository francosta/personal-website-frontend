import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
            fields {
              slug
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
          {
            console.log(post)
          }
          return (
            <Link to={`/blog/${post.node.fields.slug}`}>
              <h1 key={index}>{post.node.title}</h1>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
