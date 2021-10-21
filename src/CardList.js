import React from 'react'

import Card from './Card.js';

const CardList = (props) => {
  const { list, onDeletePost } = props;

  return (
    <ul className="space-y-4 mt-5">
      {list.reverse().map(item => (
        <Card key={item.title} onDelete={onDeletePost} {...item } />
      ))}
    </ul>
  );
};

export default CardList;