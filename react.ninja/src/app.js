'use strict'

var React = require('react');
var createClass = require('create-react-class');

var title = createClass({
    render: function() {

        return React.createElement('h1' , null , 'titulo');
    }
});

module.exports = title;