const 
	Redux = require('redux'),
	combineReducers = Redux.combineReducers,
	routerRedux = require('react-router-redux'),
	routerReducer = routerRedux.routerReducer,
	clickedShow = require('./clickedShow');

const rootReducer = combineReducers({clickedShow, routing: routerReducer});

module.exports = rootReducer;