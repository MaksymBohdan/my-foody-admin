import { combineReducers } from 'redux';
import { menuListReducer } from './menu/reducers';

const rootReducer = combineReducers({ menuListReducer });

export default rootReducer;
