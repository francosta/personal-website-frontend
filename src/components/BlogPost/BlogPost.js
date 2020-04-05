import React from "react"
import ReactMarkdown from "react-markdown"
import postStyles from "./blogPost.module.scss"
import avatar from "../../images/relaxed-round.png"
import { Link } from "gatsby"

const Post = ({ post }) => {
  return (
    <div className={postStyles.container}>
      <img
        className={postStyles.hero}
        src={`${process.env.API_URL}${post.hero.image.url}`}
        alt={post.hero.image.altText}
      />
      <h1 className={postStyles.title}>{post.title}</h1>
      <h2 className={postStyles.description}>{post.description}</h2>
      <div className={postStyles.details}>
        <Link to="/about">
          <img className={postStyles.avatar} src={avatar}></img>
        </Link>
        <div className={postStyles.detailsBox}>
          <Link to="/about">
            <span className={postStyles.author}>Francisco Costa</span>
          </Link>
          <div className={postStyles.articleDetails}>
            <span className={postStyles.publishedDate}>
              {post.publishedDate}
            </span>
            <span>{Math.round(post.readingTime.minutes)}min read</span>
          </div>
        </div>
      </div>
      <ReactMarkdown source={post.body} />
    </div>
  )
}

export default Post
