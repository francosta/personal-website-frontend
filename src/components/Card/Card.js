import React from "react"
import { Link } from "gatsby"

import cardStyles from "./card.module.scss"

const Card = ({ index, post }) => {
  if (index % 2 === 0 || index === 0) {
    return (
      <div className={`${cardStyles.card} ${cardStyles.card1} `}>
        {console.log(post)}
        <Link to={`/`}>
          <img
            className={cardStyles.image}
            src={`${process.env.API_URL}${post.hero.image.url}`}
            alt={post.hero.image.altText}
          />
        </Link>
        <h1 className={cardStyles.postTitle}>{post.title}</h1>
        <h6 className={cardStyles.description}>{post.description}</h6>
        <div className={cardStyles.details}>
          <p className={cardStyles.postType}>Blog Post</p> &middot;
          <p>{post.publishedDate}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${cardStyles.card} ${cardStyles.card2} `}>
        <img
          className={cardStyles.image}
          src={`${process.env.API_URL}${post.hero.image.url}`}
          alt={post.hero.image.altText}
        />
        <h1 className={cardStyles.postTitle}>{post.title}</h1>
        <h6 className={cardStyles.description}>{post.description}</h6>
        <div className={cardStyles.details}>
          <p>Blog Post</p> &middot; <p>{post.publishedDate}</p>
        </div>
      </div>
    )
  }
}

export default Card
