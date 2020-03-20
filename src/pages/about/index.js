import React from "react"
import Layout from "../../components/Layout/layout"
import aboutStyles from "./about.module.scss"

const About = () => {
  return (
    <Layout>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.profilePicture}>
          <img></img>
        </div>
        <div className={aboutStyles.aboutText}>
          <p></p>
        </div>
      </div>
    </Layout>
  )
}

export default About
