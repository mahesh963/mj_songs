import {combineReducers} from 'redux';
import initial from './initial.js';

const rootReducer = combineReducers({initial: initial});
export default rootReducer;
