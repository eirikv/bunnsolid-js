import React, { useState, useEffect } from 'react'

import List from './CardList.js';
import Input from './Input.js';

const IMAGES = [
  'photo-1633256394607-caa776f871b3',
  'photo-1604426633861-11b2faead63c',
  'photo-1611253468173-165346948a6b',
  'photo-1634500242645-151910ed2a4a',
  'photo-1634173870435-226a90c83616',
  'photo-1634133118312-c05b73856800',
  'photo-1634133118312-c05b73856800',
  'photo-1611608822772-43a28a830759',
  'photo-1634059044563-ec2dc036f1d7',
  'photo-1621425724426-55e1d00f731a',
  'photo-1608128107651-c9107fe4ade7',
  'photo-1634149134165-6d679d80a800',
];

const getRandomImage = () => IMAGES[Math.round(Math.random() * IMAGES.length)];

const App = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);

  const onDeletePost = (time) => {
    setList(list.filter(item => item.time !== time));
  };

  const onAddPost = (item) => {
    setList([
      {
        ...item,
        time: Date.now(),
        img: `https://images.unsplash.com/${getRandomImage()}?fit=crop&h=200&w=200q=80`,
      },
      ...list
    ]);
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
