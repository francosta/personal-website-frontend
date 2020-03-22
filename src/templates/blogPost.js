import React from "react"
import Layout from "../components/Layout/layout"
import Post from "../components/Post/Post"

const BlogPost = ({ pageContext }) => {
  return (
    <Layout>
      {console.log(pageContext)}
      <Post post={pageContext.post} />
    </Layout>
  )
}

export default BlogPost
