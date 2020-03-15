import { combineReducers } from 'redux';
import menuList from './menu/reducers';

const rootReducer = combineReducers({ menuList });

export default rootReducer;
