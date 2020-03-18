import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from "../styles/index.scss"
import indexStyles from "./index.module.scss"
import CardGrid from "../components/CardGrid/CardGrid"

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
            publishedDate(formatString: "DD MMMM YYYY")
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
      <CardGrid posts={posts} />
    </Layout>
  )
}

export default IndexPage
