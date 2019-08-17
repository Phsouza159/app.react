import * as React from 'react';
import * as createClass from 'create-react-class';
import less from './assets/less/app';

console.log(less);

var title = createClass({
    render: function() {

        return <h1 className={less['app-react']}> hello word </h1>
    }
});


export { title };