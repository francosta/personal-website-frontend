import React from "react"

import cardStyles from "./card.module.scss"

const Card = ({ index, post }) => {
  if (index === 0) {
    return (
      <div className={`${cardStyles.card2} ${cardStyles.card}`}>
        <img
          className={cardStyles.image}
          src={`${process.env.API_URL}${post.node.hero.image.url}`}
          alt={post.node.hero.image.altText}
        />
      </div>
    )
  } else {
    return (
      <div className={`${cardStyles.card1} ${cardStyles.card}`}>
        <img
          className={cardStyles.image}
          src={`${process.env.API_URL}${post.node.hero.image.url}`}
          alt={post.node.hero.image.altText}
        />
      </div>
    )
  }
}

export default Card
