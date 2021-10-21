import React from 'react'

const Card = (props) => {
  const { title, text, time, img, onDelete } = props;

  return (
    <li className="flex">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src={img}
        />
      </div>
      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>{title}</strong>
        <span className="text-xs text-gray-400">
          &nbsp;{new Date(time).toLocaleString('no-NB')}
        </span>
        <p className="text-sm">
          {text}
        </p>
        <button
          className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs"
          onClick={() => { onDelete(time); }}
          type="button"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Card;
