import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Main from '../components/Main';
import ShowsList from '../components/ShowsList';
import ShowDetails from '../components/ShowDetails';
import {Provider} from 'react-redux';
import Store from '../store';
import {History1} from '../store';
// const 
// 	React = require('react'),
// 	ReactRouter = require('react-router'),
// 	Router = ReactRouter.Router,
// 	Route = ReactRouter.Route,
// 	IndexRoute = ReactRouter.IndexRoute,
// 	browserHistory = ReactRouter.browserHistory,
// 	Main = require('../components/Main'),
// 	ShowsList = require('../components/ShowsList'),
// 	ShowDetails = require('../components/ShowDetails'),
// 	Provider = require('react-redux').Provider,
// 	Store = require('../store'),
// 	History1 = require('../store'); 	
	// BrowserHistory = ('../store');
	// const { Provider } = ReactRedux;

const routes = (
	<Provider store={Store}>
		<Router history={History1}>
			<Route path="/" component={Main}>
	        	<IndexRoute component={ShowsList} />
	        		<Route path="/:id" component={ShowDetails} />
	    	</Route>
		</Router>
		</Provider>
)

export default routes;
