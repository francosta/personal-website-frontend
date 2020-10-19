import React from 'react';
import { Link } from 'gatsby';
import cardStyles from './card.module.scss';
import CardImage from '../CardImage/CardImage';
import CardHeading from '../CardHeading/CardHeading';
import CardDetails from '../CardDetails/CardDetails';
import CardDescription from '../CardDescription/CardDescription';

const CardContent = ({ post, path, descriptionExcerpt }) => {
  return (
    <>
      <Link to={`/${post.fields.type}/${post.fields.slug}`}>
        <CardImage image={post.hero} />
        <CardHeading path={path} post={post} />
        <CardDescription descriptionExcerpt={descriptionExcerpt} />{' '}
      </Link>
      <CardDetails post={post} />
    </>
  );
};

const Card = ({ index, post, path }) => {
  const structure = [1, 2, 3, 4];
  const ind = index % structure.length;
  const selector = structure[ind];

  const getClass = selector => {
    switch (selector) {
      case 1:
        return cardStyles.card1Left;
      case 2:
        return cardStyles.card2Right;
      case 3:
        return cardStyles.card2Left;
      default:
        return cardStyles.card1Right;
    }
  };

  const getDescription = selector => {
    switch (selector) {
      case 2 || 3:
        return `${post.description.substring(0, 97)}...`;
      default:
        return `${post.description.substring(0, 125)}...`;
    }
  };

  return (
    <div className={`${cardStyles.card} ${getClass(selector)}`}>
      <CardContent
        path={path}
        descriptionExcerpt={getDescription(selector)}
        post={post}
      />
    </div>
  );
};

export default Card;
