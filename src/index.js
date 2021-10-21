import "core-js/stable";

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js';

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('root'));