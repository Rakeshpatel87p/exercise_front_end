const 
	Redux = require('redux'),
	combineReducers = Redux.combineReducers,
	routerRedux = require('react-router-redux'),
	routerReducer = routerRedux.routerReducer,
	showReducer = require('./showReducer'),
	example = require('./example');

const rootReducer = combineReducers({showReducer, routing: routerReducer});

module.exports = rootReducer;