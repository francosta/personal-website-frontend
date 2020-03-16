import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from "../styles/index.scss"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiBlogPost {
        edges {
          node {
            hero {
              image {
                url
              }
              altText
            }
            title
            publishedDate
            description
            body
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const posts = data.allStrapiBlogPost.edges
  return (
    <Layout>
      <SEO title="Home" />
      {console.log(posts)}
      <div className="post-list">
        {posts.map((post, index) => {
          return (
            <Link to={`/blog/${post.node.fields.slug}`} key={index}>
              <h1>{post.node.title}</h1>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
