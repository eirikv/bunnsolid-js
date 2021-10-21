import React, { useState, useEffect } from 'https://esm.sh/react@17'

import List from './CardList.mjs';
import Input from './Input.mjs';

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
    React.createElement('div', { className: 'container antialiased mx-auto max-w-screen-sm' },
      React.createElement(Input, { onAddPost }),
      React.createElement(List, { list, onDeletePost }),
    )
  );
}

export default App;
