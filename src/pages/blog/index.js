import React from "react"
import Layout from "../../components/Layout/layout"
import blogStyles from "./blog.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import avatar from "../../images/relaxed-round.png"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiAbout {
        about_me
      }
    }
  `)

  const about_me = data.strapiAbout.about_me

  return <Layout></Layout>
}

export default About
