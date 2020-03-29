import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
/* reducers */
import menuList from './menu/reducers';
import menuItem from './item/reducers';
import { RootState } from './../interfaces/index';

const rootReducer = (history: History) =>
  combineReducers<RootState, any>({
    router: connectRouter(history),
    menuList,
    menuItem,
  });

export default rootReducer;
