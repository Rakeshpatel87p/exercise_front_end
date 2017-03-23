import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Main from '../components/Main';
import App from '../components/App';
import ShowDetails from '../components/ShowDetails';
import {Provider} from 'react-redux';
import Store from '../store';
import {History1} from '../store';

const routes = (
	<Provider store={Store}>
		<Router history={History1}>
			<Route path="/" component={Main}>
	        	<IndexRoute component={App} />
	        		<Route path="/:id" component={ShowDetails} />
	    	</Route>
		</Router>
		</Provider>
)

export default routes;
