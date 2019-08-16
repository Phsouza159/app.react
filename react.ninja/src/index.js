'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var title = require('./app');

ReactDOM.render(
    React.createElement(title),
    document.querySelector('[data-js="app"]'),
);