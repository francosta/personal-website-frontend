import React from "react"

import ReactMarkdown from "react-markdown"

import postStyles from "./post.module.scss"

const Post = ({ post }) => {
  return (
    <div className={postStyles.container}>
      <img
        className={postStyles.hero}
        src={`${process.env.API_URL}${post.hero.image.url}`}
        alt={post.hero.image.altText}
      />
      <h1 className={postStyles.title}>{post.title}</h1>
      <ReactMarkdown className={postStyles.body} source={post.body} />
    </div>
  )
}

export default Post
