import { IMenuItem, ErrorType } from './../../interfaces/index';
import { combineReducers } from 'redux';
import * as types from './types';

const list = (
  state = [] as IMenuItem[],
  action: types.MenuListActionTypes,
): IMenuItem[] => {
  switch (action.type) {
    case types.FETCH_MENU_LIST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const error = (
  state: ErrorType = null,
  action: types.MenuListActionTypes,
): ErrorType => {
  switch (action.type) {
    case types.FETCH_MENU_LIST_ERROR:
      return action.payload;

    default:
      return state;
  }
};

const loading = (
  state: boolean = false,
  action: types.MenuListActionTypes,
): boolean => {
  switch (action.type) {
    case types.FETCH_MENU_LIST_REQUEST:
      return true;
    case types.FETCH_MENU_LIST_SUCCESS:
    case types.FETCH_MENU_LIST_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers<types.StateType, types.MenuListActionTypes>({
  list,
  error,
  loading,
});
