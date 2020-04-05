import React from "react"
import Layout from "../components/Layout/layout"
import Post from "../components/Post/Post"

const ProjectPost = ({ pageContext }) => {
  return (
    <Layout>
      <Post post={pageContext.post} />
    </Layout>
  )
}

export default ProjectPost
