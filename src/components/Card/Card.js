import React from 'react';
import { Link } from 'gatsby';
import cardStyles from './card.module.scss';
import CardImage from '../CardImage/CardImage';
import CardHeading from '../CardHeading/CardHeading';
import CardDetails from '../CardDetails/CardDetails';
import CardDescription from '../CardDescription/CardDescription';

const Card = ({ index, post, path }) => {
  const structure = [1, 2, 3, 4];
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
          <CardImage image={post.hero} />
          <CardHeading path={path} post={post} />
          <CardDescription descriptionExcerpt={descriptionExcerpt} />
        </Link>
        <CardDetails post={post} />
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
          <CardImage image={post.hero} />
          <CardHeading path={path} post={post} />
          <CardDescription descriptionExcerpt={descriptionExcerpt} />{' '}
        </Link>
        <CardDetails post={post} />
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
          <CardImage image={post.hero} />
          <CardHeading path={path} post={post} />
          <CardDescription descriptionExcerpt={descriptionExcerpt} />{' '}
        </Link>
        <CardDetails post={post} />
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
        <CardImage image={post.hero} />
        <CardHeading path={path} post={post} />
        <CardDescription descriptionExcerpt={descriptionExcerpt} />{' '}
      </Link>
      <CardDetails post={post} />
    </div>
  );
};

export default Card;
