import React from "react"
import { Link } from "gatsby"

import cardStyles from "./card.module.scss"

const Card = ({ index, post }) => {
  const structure = [1, 2, 3, 4] //should be an enum?
  const ind = index % structure.length
  const selector = structure[ind]
  console.log(selector)

  if (selector === 1) {
    let descriptionExcerpt = post.description
    if (post.description.length > 230) {
      descriptionExcerpt = post.description.substring(0, 227) + "..."
    }

    return (
      <div className={`${cardStyles.card} ${cardStyles.card1Left}`}>
        {console.log(selector)}
        <Link to={`${post.fields.type}/${post.fields.slug}`}>
          <img
            className={cardStyles.image}
            src={`${process.env.API_URL}${post.hero.image.url}`}
            alt={post.hero.image.altText}
          />
          <h1 className={cardStyles.postTitle}>{post.title}</h1>
          <h6 className={cardStyles.description}>{descriptionExcerpt}</h6>
        </Link>
        <div className={cardStyles.details}>
          <ul>
            <li className={cardStyles.postType}>Blog Post</li>
            <li className={cardStyles.publishedDate}>{post.publishedDate}</li>
            <li>{Math.round(post.readingTime.minutes)}min read</li>
          </ul>
        </div>
      </div>
    )
  } else if (selector === 2) {
    let descriptionExcerpt = post.description
    if (post.description.length > 100) {
      descriptionExcerpt = post.description.substring(0, 97) + "..."
    }

    return (
      <div className={`${cardStyles.card} ${cardStyles.card2Right}`}>
        {console.log(selector)}
        <Link to={`${post.fields.type}/${post.fields.slug}`}>
          <img
            className={cardStyles.image}
            src={`${process.env.API_URL}${post.hero.image.url}`}
            alt={post.hero.image.altText}
          />
          <h1 className={cardStyles.postTitle}>{post.title}</h1>
          <h6 className={cardStyles.description}>{descriptionExcerpt}</h6>
        </Link>
        <div className={cardStyles.details}>
          <ul>
            <li className={cardStyles.postType}>Blog Post</li>
            <li className={cardStyles.publishedDate}>{post.publishedDate}</li>
            <li>{Math.round(post.readingTime.minutes)}min read</li>
          </ul>
        </div>
      </div>
    )
  } else if (selector === 3) {
    let descriptionExcerpt = post.description
    if (post.description.length > 100) {
      descriptionExcerpt = post.description.substring(0, 97) + "..."
    }

    return (
      <div className={`${cardStyles.card} ${cardStyles.card2Left}`}>
        {console.log(selector)}
        <Link to={`${post.fields.type}/${post.fields.slug}`}>
          <img
            className={cardStyles.image}
            src={`${process.env.API_URL}${post.hero.image.url}`}
            alt={post.hero.image.altText}
          />
          <h1 className={cardStyles.postTitle}>{post.title}</h1>
          <h6 className={cardStyles.description}>{descriptionExcerpt}</h6>
        </Link>
        <div className={cardStyles.details}>
          <ul>
            <li className={cardStyles.postType}>Blog Post</li>
            <li className={cardStyles.publishedDate}>{post.publishedDate}</li>
            <li>{Math.round(post.readingTime.minutes)}min read</li>
          </ul>
        </div>
      </div>
    )
  } else {
    let descriptionExcerpt = post.description
    if (post.description.length > 230) {
      descriptionExcerpt = post.description.substring(0, 227) + "..."
    }

    return (
      <div className={`${cardStyles.card} ${cardStyles.card1Right}`}>
        {console.log(selector)}
        <Link to={`${post.fields.type}/${post.fields.slug}`}>
          <img
            className={cardStyles.image}
            src={`${process.env.API_URL}${post.hero.image.url}`}
            alt={post.hero.image.altText}
          />
          <h1 className={cardStyles.postTitle}>{post.title}</h1>
          <h6 className={cardStyles.description}>{descriptionExcerpt}</h6>
        </Link>
        <div className={cardStyles.details}>
          <ul>
            <li className={cardStyles.postType}>Blog Post</li>
            <li className={cardStyles.publishedDate}>{post.publishedDate}</li>
            <li>{Math.round(post.readingTime.minutes)}min read</li>
          </ul>
        </div>
      </div>
    )
  }

  // } else {
  //   let descriptionExcerpt = post.description
  //   if (post.description.length > 100) {
  //     descriptionExcerpt = post.description.substring(0, 97) + "..."
  //   }

  //   return (
  //     <div className={`${cardStyles.card} ${cardStyles.card2} `}>
  //       <Link to={`${post.fields.type}/${post.fields.slug}`}>
  //         <img
  //           className={cardStyles.image}
  //           src={`${process.env.API_URL}${post.hero.image.url}`}
  //           alt={post.hero.image.altText}
  //         />
  //         <h1 className={cardStyles.postTitle}>{post.title}</h1>
  //         <h6 className={cardStyles.description}>{descriptionExcerpt}</h6>
  //       </Link>
  //       {post.fields.type === "blog" ? (
  //         <div className={cardStyles.details}>
  //           <ul>
  //             <li className={cardStyles.postType}>Blog Post</li>
  //             <li className={cardStyles.publishedDate}>{post.publishedDate}</li>
  //             <li>{Math.round(post.readingTime.minutes)}min read</li>
  //           </ul>
  //         </div>
  //       ) : (
  //         <div className={cardStyles.details}>
  //           <ul>
  //             <li className={cardStyles.postType}>Project</li>
  //             <li className={cardStyles.publishedDate}>{post.publishedDate}</li>
  //             <li>{Math.round(post.readingTime.minutes)}min read</li>
  //           </ul>
  //         </div>
  //       )}
  //     </div>
  //   )
  // }
}

export default Card
