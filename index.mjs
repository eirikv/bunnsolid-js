import React from 'https://esm.sh/react@17'
import ReactDOM from 'https://esm.sh/react-dom@17'

import App from './src/App.mjs';

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('root'));