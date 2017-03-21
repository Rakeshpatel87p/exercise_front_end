const 
	Redux = require('redux'),
	combineReducers = Redux.combineReducers,
	routerRedux = require('react-router-redux'),
	routerReducer = routerRedux.routerReducer,
	clickedShow = require('./clickedShow'),
	example = require('./example')

const rootReducer = combineReducers({clickedShow, example, routing: routerReducer});

module.exports = rootReducer;