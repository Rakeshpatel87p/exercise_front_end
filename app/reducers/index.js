import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import clickedShow from './clickedShow';

const rootReducer = combineReducers({clickedShow, router: routerReducer});

export default rootReducer;