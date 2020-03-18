import React from "react"

import cardStyles from "./card.module.scss"

const Card = ({ index, post }) => {
  if (index % 2 === 0 || index === 0) {
    return (
      <div className={`${cardStyles.card} ${cardStyles.card1} `}>
        {console.log(post)}
        <img
          className={cardStyles.image}
          src={`${process.env.API_URL}${post.node.hero.image.url}`}
          alt={post.node.hero.image.altText}
        />
        <h1 className={cardStyles.postTitle}>{post.node.title}</h1>
        <h6 className={cardStyles.description}>{post.node.description}</h6>
        <div className={cardStyles.details}>
          <p className={cardStyles.postType}>Blog Post</p> &middot;
          <p>{post.node.publishedDate}</p>
        </div>
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
        <h1 className={cardStyles.postTitle}>{post.node.title}</h1>
        <h6 className={cardStyles.description}>{post.node.description}</h6>
        <div className={cardStyles.details}>
          <p>Blog Post</p> &middot; <p>{post.node.publishedDate}</p>
        </div>
      </div>
    )
  }
}

export default Card
