const 
	React = require('react'),
	ReactRouter = require('react-router'),
	Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute,
	browserHistory = ReactRouter.browserHistory,
	Main = require('../components/Main'),
	ShowsList = require('../components/ShowsList'),
	ShowDetails = require('../components/ShowDetails'),
	Provider = require('react-redux').Provider,
	Store = require('../store'),
	history1 = syncHistoryWithStore(browserHistory, Store);
	// BrowserHistory = ('../store');
	// const { Provider } = ReactRedux;

const routes = (
	<Router history={history1}>
		<Route path="/" component={Main}>
        	<IndexRoute component={ShowsList} />
        		<Route path="/:id" component={ShowDetails} />
    	</Route>
	</Router>
)

module.exports = routes;
