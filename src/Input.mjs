import React, { useState } from 'https://esm.sh/react@17'

const Input = (props) => {
  const { onAddPost } = props;

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  return (
    React.createElement(
      'form',
      {
        className: 'editor mx-auto flex flex-col text-gray-800 border rounded-lg p-4 max-w-2xl mt-5',
        onSubmit: (e) => {
          e.preventDefault();
          if (title.trim() && text.trim()) {
            onAddPost({ title, text });
          }
        }
      },
      React.createElement(
        'input',
        {
          className: 'title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none',
          spellCheck: 'false',
          placeholder: 'Title',
          type: 'text',
          value: title,
          onChange: (e) => { setTitle(e.target.value); }
        },
      ),
      React.createElement(
        'textarea',
        {
          className: 'description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none',
          spellCheck: 'false',
          placeholder: 'Write something',
          value: text,
          onChange: (e) => {
            if (e.target.value.length <= 300) {
              setText(e.target.value);
            }
          }
        },
      ),
      React.createElement(
        'div',
        { className: 'icons flex text-gray-500 m-2' },
        React.createElement(
          'div',
          { className: 'count ml-auto text-gray-400 text-xs font-semibold' },
          `${text.length}/300`
        )
      ),
      React.createElement(
        'div',
        { className: 'buttons flex' },
        React.createElement(
          'button',
          {
            type: 'button',
            className: 'btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto',
            onClick: () => {
              setTitle('');
              setText('');
            }
          },
          'Cancel',
        ),
        React.createElement(
          'button',
          {
            type: 'submit',
            className: 'btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500',
            disabled: !(title.trim() && text.trim()),
          },
          'Post',
        ),
      ),
    )
  );
};

export default Input;