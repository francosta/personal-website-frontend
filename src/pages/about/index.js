import React from "react"
import Layout from "../../components/Layout/layout"
import aboutStyles from "./about.module.scss"
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

  return (
    <Layout>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.profilePicture}>
          <img className={aboutStyles.profilePicture} src={avatar}></img>
        </div>
        <div className={aboutStyles.aboutText}>
          <p>{about_me}</p>
        </div>
      </div>
    </Layout>
  )
}

export default About
