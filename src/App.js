import React, { useState, useEffect } from 'react'

import List from './CardList.js';
import Input from './Input.js';

const App = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);

  const onDeletePost = (time) => {
    setList(list.filter(item => item.time !== time));
  };

  const onAddPost = (item) => {
    setList([...list, { ...item, time: Date.now() }]);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <div className="container antialiased mx-auto max-w-screen-sm">
      <Input onAddPost={onAddPost} />
      <List list={list} onDeletePost={onDeletePost} />
    </div>
  );
}

export default App;
