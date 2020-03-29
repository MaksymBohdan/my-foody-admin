import { combineReducers } from 'redux';
import * as types from './types';
import { MenuItemActionTypes, ErrorType, StateType } from './types';
import { IMenuItem } from './../../interfaces/index';

/* item */
const item = (
  state: IMenuItem = {} as IMenuItem,
  action: MenuItemActionTypes,
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
  action: MenuItemActionTypes,
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
type loadingActionType = {
  type:
    | typeof types.FETCH_MENU_ITEM_REQUEST
    | typeof types.FETCH_MENU_ITEM_SUCCESS
    | typeof types.FETCH_MENU_ITEM_ERROR
    | typeof types.SAVE_MENU_ITEM_REQUEST
    | typeof types.SAVE_MENU_ITEM_ERROR
    | typeof types.SAVE_MENU_ITEM_SUCCESS;
};

const loading = (
  state: boolean = false,
  { type }: loadingActionType,
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

export default combineReducers<StateType, MenuItemActionTypes>({
  item,
  error,
  loading,
});
