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
	// Need to add data here?
}

const store = createStore(rootReducer, defaultState);
const history = syncHistoryWithStore(browserHistory, store);

module.exports = store;
module.exports = history;