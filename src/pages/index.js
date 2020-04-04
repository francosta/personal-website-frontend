import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
          readingTime {
            minutes
          }
        }
      }
      strapiLandingPage {
        landingText
      }
    }
  `)

  const posts = data.allStrapiBlogPost.nodes
  const landingText = data.strapiLandingPage.landingText

  return (
    <Layout>
      <SEO title="Home" />
      <section id="landing">
        <div className={indexStyles.landing}>
          <div className={indexStyles.introduction}>
            <p>{landingText}</p>
          </div>
          <a href="#posts" className={indexStyles.goToPosts}>
            <svg
              width="121"
              height="91"
              viewBox="0 0 121 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M64.2298 68.5457L118.209 28.343C120.572 26.579 120.582 23.7076 118.231 21.9226C115.88 20.142 112.051 20.1287 109.688 21.8928L59.9921 58.9066L10.5555 21.5516C8.20453 19.7711 4.37584 19.7578 2.0065 21.5218C-0.356876 23.2859 -0.366902 26.1618 1.98411 27.9423L55.6813 68.5204C58.008 70.274 61.8969 70.2875 64.2298 68.5457Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    x="120.074"
                    y="0.417542"
                    width="89.8177"
                    height="119.762"
                    transform="rotate(90.1997 120.074 0.417542)"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </section>
      <section id="posts">
        <CardGrid posts={posts} />
      </section>
    </Layout>
  )
}

export default IndexPage
