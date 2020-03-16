import React from "react"

import cardStyles from "./card.module.scss"

const Card = ({ post }) => {
  return (
    <div>
      <img
        className={cardStyles.image}
        src={`${process.env.API_URL}${post.node.hero.image.url}`}
        alt={post.node.hero.image.altText}
      />
      <p className={cardStyles.text}>{post.node.title}</p>
    </div>
  )
}

export default Card
