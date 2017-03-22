const 
	React = require('react'),
	ReactDOM = require('react-dom'),
	routes = require('../app/routes/routes'),
	css = require('./styles/main.scss');

ReactDOM.render(routes, document.getElementById('app'))
