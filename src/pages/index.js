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
  const posts = data.allStrapiBlogPost.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <div className={indexStyles.landing}></div>
      </section>
      <CardGrid posts={posts} />
    </Layout>
  )
}

export default IndexPage
