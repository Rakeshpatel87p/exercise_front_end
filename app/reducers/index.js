import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import showReducer from './showReducer';
import example from './example';

const rootReducer = combineReducers({showReducer, routing: routerReducer});

export default rootReducer;