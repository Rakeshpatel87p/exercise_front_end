const 
	React = require('react'),
	ReactRouter = require('react-router'),
	Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute,
	hashHistory = ReactRouter.hashHistory,
	Main = require('../components/Main'),
	ShowsList = require('../components/ShowsList'),
	ShowDetails = require('../components/ShowDetails');

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
        	<IndexRoute component={ShowsList} />
        		<Route path="/:id" component={ShowDetails} />
    	</Route>
	</Router>
)

module.exports = routes;
