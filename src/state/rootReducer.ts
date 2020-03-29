import { StateType } from './item/types';
import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
/* reducers */
import menuList from './menu/reducers';
import menuItem from './item/reducers';

export interface RootState {
  router: RouterState;
  menuItem: StateType;
  menuList: any;
}

const rootReducer = (history: History) =>
  combineReducers<RootState, any>({
    router: connectRouter(history),
    menuList,
    menuItem,
  });

export default rootReducer;
