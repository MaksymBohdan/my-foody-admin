import { combineReducers } from 'redux';
import menuList from './menu/reducers';
import menuItem from './item/reducers';

const rootReducer = combineReducers({ menuList, menuItem });

export default rootReducer;
