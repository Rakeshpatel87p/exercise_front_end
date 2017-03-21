const 
	Redux = require('redux'),
	createStore = Redux.createStore,
	compose = Redux.compose,
	syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore,
	browserHistory = require('react-router'),
	rootReducer = require('./reducers/index'),
	Shows = require('./shows');

// Create an obj from default data. 

const defaultState = {
	// yo peep, what's going on here? 
	Shows
}

const Store = createStore(rootReducer, defaultState);
const History1 = syncHistoryWithStore(browserHistory, Store);

module.exports = Store;
module.exports = History1;