import React, { useState } from 'https://esm.sh/react@17'

const INITIAL_STATE = { title: '', text: '' };

const Input = (props) => {
  const { onAddPost } = props;

  const [state, setState] = useState(INITIAL_STATE);
  const { title, text } = state;

  const onReset = () => { setState(INITIAL_STATE); };
  const onChange = (e) => {
    if (e.target.value.length <= 300) {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && text.trim()) {
      onAddPost({ title, text });
      onReset();
    }
  }

  return (
    React.createElement(
      'form',
      {
        className: 'editor mx-auto flex flex-col text-gray-800 border rounded-lg p-4 max-w-2xl mt-5',
        onSubmit,
      },
      React.createElement(
        'input',
        {
          className: 'title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none',
          spellCheck: 'false',
          placeholder: 'Title',
          name: 'title',
          type: 'text',
          value: title,
          onChange,
        },
      ),
      React.createElement(
        'textarea',
        {
          className: 'description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none',
          spellCheck: 'false',
          name: 'text',
          placeholder: 'Write something',
          value: text,
          onChange,
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
            onClick: onReset,
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