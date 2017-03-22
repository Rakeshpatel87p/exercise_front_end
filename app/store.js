import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducers/index';
import showReducer from './shows';

// const 
// 	Redux = require('redux'),
// 	createStore = require('redux').createStore,
// 	compose = Redux.compose,
// 	syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore,
// 	browserHistory = require('react-router').browserHistory,
// 	rootReducer = require('./reducers/index'),
// 	showReducer = require('./shows');

// Create an obj from default data. 

const defaultState = {
	showReducer
}

const Store = createStore(rootReducer, defaultState);
console.log('this is the store-------' + Store);
console.log('this is the root reducer------' + defaultState)
const History1 = syncHistoryWithStore(browserHistory, Store);

export default Store;
export {History1};