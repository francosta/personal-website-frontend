import React from "react"

import postStyles from "./post.module.scss"
import ReactMarkdown from "react-markdown"

const Post = ({ post }) => {
  return (
    <div className={postStyles.post}>
      <img
        src={`${process.env.API_URL}${post.hero.image.url}`}
        alt={post.hero.image.altText}
      />
      <h1 className={postStyles.title}>{post.title}</h1>
      <h2 className={postStyles.description}>{post.description}</h2>
      <ReactMarkdown source={post.body} />
    </div>
  )
}

export default Post
