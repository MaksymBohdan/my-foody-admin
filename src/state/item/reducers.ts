import { combineReducers } from 'redux';
import * as types from './types';
import { IMenuItem, ErrorType } from './../../interfaces';

/* item */
const item = (
  state: IMenuItem = {} as IMenuItem,
  action: types.MenuItemActionTypes,
): IMenuItem => {
  switch (action.type) {
    case types.FETCH_MENU_ITEM_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

/* error */
const error = (
  state: ErrorType = null,
  action: types.MenuItemActionTypes,
): ErrorType => {
  switch (action.type) {
    case types.FETCH_MENU_ITEM_ERROR:
    case types.SAVE_MENU_ITEM_ERROR:
      return action.payload;

    default:
      return state;
  }
};

/* loading */
const loading = (
  state: boolean = false,
  { type }: types.MenuItemActionTypes,
): boolean => {
  switch (type) {
    case types.FETCH_MENU_ITEM_REQUEST:
    case types.SAVE_MENU_ITEM_REQUEST:
      return true;
    case types.FETCH_MENU_ITEM_SUCCESS:
    case types.FETCH_MENU_ITEM_ERROR:
    case types.SAVE_MENU_ITEM_ERROR:
    case types.SAVE_MENU_ITEM_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers<types.StateType, types.MenuItemActionTypes>({
  item,
  error,
  loading,
});
