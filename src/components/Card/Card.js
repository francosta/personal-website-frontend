import React from "react"

import cardStyles from "./card.module.scss"

const Card = ({ index, post }) => {
  if (index % 2 === 0 || index === 0) {
    return (
      <div className={`${cardStyles.card} ${cardStyles.card1} `}>
        <img
          className={cardStyles.image}
          src={`${process.env.API_URL}${post.node.hero.image.url}`}
          alt={post.node.hero.image.altText}
        />
        <h1>{post.node.title}</h1>
        <h6>{post.node.description}</h6>
      </div>
    )
  } else {
    return (
      <div className={`${cardStyles.card} ${cardStyles.card2} `}>
        <img
          className={cardStyles.image}
          src={`${process.env.API_URL}${post.node.hero.image.url}`}
          alt={post.node.hero.image.altText}
        />
        <h1>{post.node.title}</h1>
        <h6>{post.node.description}</h6>
        <div className={cardStyles.details}>
          
        </div>
      </div>
    )
  }
}

export default Card
