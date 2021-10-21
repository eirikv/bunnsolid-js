import React from 'https://esm.sh/react@17'

import Card from './Card.mjs';

const CardList = (props) => {
  const { list, onDeletePost } = props;

  return (
    React.createElement('ul', { className: 'space-y-4 mt-5' }, list.map(item => (
      React.createElement(Card, { key: item.title, onDelete: onDeletePost, ...item })
    )))
  );
};

export default CardList;