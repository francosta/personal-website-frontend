import React from 'react';
import { Link } from 'gatsby';

import cardStyles from './card.module.scss';

const Card = ({ index, post, path }) => {
  const structure = [1, 2, 3, 4]; // should be an enum?
  const ind = index % structure.length;
  const selector = structure[ind];

  if (selector === 1) {
    let descriptionExcerpt = post.description;
    if (post.description.length > 230) {
      descriptionExcerpt = `${post.description.substring(0, 227)}...`;
    }

    return (
      <div className={`${cardStyles.card} ${cardStyles.card1Left}`}>
        <Link to={`/${post.fields.type}/${post.fields.slug}`}>
          <img
            className={cardStyles.image}
            src={`${post.hero.image.url}`}
            alt={post.hero.altText}
          />
          <div className={cardStyles.titleContainer}>
            {path === '/' ? (
              <div className={cardStyles.postType}>
                {post.fields.type.charAt(0).toUpperCase() +
                  post.fields.type.slice(1)}
              </div>
            ) : null}
            <h1 className={cardStyles.postTitle}>{post.title}</h1>
          </div>
          <h6 className={cardStyles.description}>{descriptionExcerpt}</h6>
        </Link>
        <div className={cardStyles.details}>
          <ul>
            <li className={cardStyles.publishedDate}>{post.publishedDate}</li>
            <li>{Math.round(post.readingTime.minutes)} mins read</li>
          </ul>
        </div>
      </div>
    );
  }
  if (selector === 2) {
    let descriptionExcerpt = post.description;
    if (post.description.length > 100) {
      descriptionExcerpt = `${post.description.substring(0, 97)}...`;
    }

    return (
      <div className={`${cardStyles.card} ${cardStyles.card2Right}`}>
        <Link to={`/${post.fields.type}/${post.fields.slug}`}>
          <img
            className={cardStyles.image}
            src={`${post.hero.image.url}`}
            alt={post.hero.altText}
          />
          <div className={cardStyles.titleContainer}>
            {path === '/' ? (
              <div className={cardStyles.postType}>
                {post.fields.type.charAt(0).toUpperCase() +
                  post.fields.type.slice(1)}
              </div>
            ) : null}
            <h1 className={cardStyles.postTitle}>{post.title}</h1>
          </div>
          <h6 className={cardStyles.description}>{descriptionExcerpt}</h6>
        </Link>
        <div className={cardStyles.details}>
          <ul>
            <li className={cardStyles.publishedDate}>{post.publishedDate}</li>
            <li>{Math.round(post.readingTime.minutes)} mins read</li>
          </ul>
        </div>
      </div>
    );
  }
  if (selector === 3) {
    let descriptionExcerpt = post.description;
    if (post.description.length > 100) {
      descriptionExcerpt = `${post.description.substring(0, 97)}...`;
    }

    return (
      <div className={`${cardStyles.card} ${cardStyles.card2Left}`}>
        <Link to={`/${post.fields.type}/${post.fields.slug}`}>
          <img
            className={cardStyles.image}
            src={`${post.hero.image.url}`}
            alt={post.hero.altText}
          />
          <div className={cardStyles.titleContainer}>
            {path === '/' ? (
              <div className={cardStyles.postType}>
                {post.fields.type.charAt(0).toUpperCase() +
                  post.fields.type.slice(1)}
              </div>
            ) : null}
            <h1 className={cardStyles.postTitle}>{post.title}</h1>
          </div>
          <h6 className={cardStyles.description}>{descriptionExcerpt}</h6>
        </Link>
        <div className={cardStyles.details}>
          <ul>
            <li className={cardStyles.publishedDate}>{post.publishedDate}</li>
            <li>{Math.round(post.readingTime.minutes)} mins read</li>
          </ul>
        </div>
      </div>
    );
  }
  let descriptionExcerpt = post.description;
  if (post.description.length > 230) {
    descriptionExcerpt = `${post.description.substring(0, 227)}...`;
  }

  return (
    <div className={`${cardStyles.card} ${cardStyles.card1Right}`}>
      <Link to={`/${post.fields.type}/${post.fields.slug}`}>
        <img
          className={cardStyles.image}
          src={`${post.hero.image.url}`}
          alt={post.hero.altText}
        />
        <div className={cardStyles.titleContainer}>
          {path === '/' ? (
            <div className={cardStyles.postType}>
              {post.fields.type.charAt(0).toUpperCase() +
                post.fields.type.slice(1)}
            </div>
          ) : null}
          <h1 className={cardStyles.postTitle}>{post.title}</h1>
        </div>
        <h6 className={cardStyles.description}>{descriptionExcerpt}</h6>
      </Link>
      <div className={cardStyles.details}>
        <ul>
          <li className={cardStyles.postType}>
            {post.fields.type.charAt(0).toUpperCase() +
              post.fields.type.slice(1)}
          </li>
          <li className={cardStyles.publishedDate}>{post.publishedDate}</li>
          <li>{Math.round(post.readingTime.minutes)} mins read</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
