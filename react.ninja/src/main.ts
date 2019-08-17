import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { title } from './app.jsx';

ReactDOM.render(
    React.createElement(title),
    document.querySelector('[data-js="app"]'),
);