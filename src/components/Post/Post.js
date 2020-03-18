import React from "react"

import postStyles from "./post.module.scss"

const Post = ({ post }) => {
  return (
    <div className={postStyles.post}>
      <img
        src={`${process.env.API_URL}${post.hero.image.url}`}
        alt={post.hero.image.altText}
      />
      <h1>{post.title}</h1>
    </div>
  )
}

export default Post
