import React from "react"
import Layout from "../../components/Layout/layout"
import blogStyles from "./blog.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import CardGrid from "../../components/CardGrid/CardGrid"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsBlogPost {
        nodes {
          heroImage {
            url
            alt
          }
          title
          publishedDate(formatString: "DD MMMM YYYY")
          lead
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
      <section id="posts">
        <CardGrid posts={posts} />
      </section>
    </Layout>
  )
}

export default Blog
