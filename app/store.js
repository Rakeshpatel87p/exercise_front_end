const 
	Redux = require('redux'),
	createStore = Redux.createStore,
	compose = Redux.compose,
	syncHistoryWithStore = require('react-router'),
	browserHistory = require('react-router'),
	rootReducer = require('./reducers/index'),
	Shows = require('./shows');

// Create an obj from default data. 

const defaultState = {
	Shows
}

const store = createStore(rootReducer, defaultState);
const history = syncHistoryWithStore(browserHistory, store);

module.exports = store;
module.exports = history;