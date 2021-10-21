import React from 'https://esm.sh/react@17'

const Card = (props) => {
  const { title, text, time, img, onDelete } = props;

  return (
    React.createElement(
      'li',
      { className: 'flex' },
      React.createElement(
        'div',
        { className: 'flex-shrink-0 mr-3' },
        React.createElement(
          'img',
          {
            className: 'mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10',
            src: img,
          },
        ),
      ),
      React.createElement(
        'div',
        { className: 'flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed' },
        React.createElement(
          'strong',
          {},
          title,
        ),
        React.createElement(
          'span',
          { className: 'text-xs text-gray-400' },
          ` ${new Date(time).toLocaleString('no-NB')}`,
        ),
        React.createElement(
          'p',
          { className: 'text-sm' },
          text,
        ),
        React.createElement(
          'button',
          {
            className: 'my-5 uppercase tracking-wide text-gray-400 font-bold text-xs',
            onClick: () => { onDelete(time); },
            type: 'button',
          },
          'Delete',
        ),
      ),
    )
  );
};

export default Card;
