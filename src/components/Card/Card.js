import React from "react"
const path = require("path")
const env = require("dotenv").config()

const Card = ({ post }) => {
  return (
    <div>
      {/* <img
        src={`${process.env.API_URL}${post.node.hero.image.url}`}
        alt={post.node.hero.image.altText}
      /> */}
      <p>{`${process.env.API_URL}${post.node.hero.image.url}`}</p>
    </div>
  )
}

export default Card
