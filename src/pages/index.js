import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/index.scss"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiBlogPost {
        edges {
          node {
            Hero {
              Image {
                url
              }
              AltText
            }
            Title
            PublishedDate
            Description
            Body
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
      <div className={indexStyles.postList}>
        {posts.map((post, index) => {
          return (
            <Link to={`/blog/${post.node.fields.slug}`} key={index}>
              <h1>{post.node.Title}</h1>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
