const 
	Redux = require('redux'),

	compose = Redux.compose,
	syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore,
	browserHistory = require('react-router').browserHistory,
	rootReducer = require('./reducers/index'),
	showReducer = require('./shows');
	const createStore = Redux.createStore;

// Create an obj from default data. 

const defaultState = {
	showReducer
}

const Store = createStore(rootReducer, defaultState);
console.log('this is the store-------' + Store);
console.log('this is the root reducer------' + defaultState)
const History1 = syncHistoryWithStore(browserHistory, Store);

module.exports = Store;
module.exports = History1;