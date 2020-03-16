import React from "react"

import cardStyles from "./card.module.scss"

const Card = ({ post }) => {
  return (
    <div className={cardStyles.container}>
      <img
        className={cardStyles.image}
        src={`${process.env.API_URL}${post.node.hero.image.url}`}
        alt={post.node.hero.image.altText}
      />
      <h4 className={cardStyles.text}>{post.node.title}</h4>
    </div>
  )
}

export default Card
