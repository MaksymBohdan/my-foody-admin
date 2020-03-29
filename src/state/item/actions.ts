import * as types from './types';
import { IMenuItem, IMenuItemForm, ErrorType } from './../../interfaces/index';

const fetchMenuItem = (id: number): types.MenuItemActionTypes => ({
  type: types.FETCH_MENU_ITEM_REQUEST,
  payload: id,
});

const fetchMenuItemSuccess = (item: IMenuItem): types.MenuItemActionTypes => ({
  type: types.FETCH_MENU_ITEM_SUCCESS,
  payload: item,
});

const fetchMenuItemError = (err: ErrorType): types.MenuItemActionTypes => ({
  type: types.FETCH_MENU_ITEM_ERROR,
  payload: err,
});

const saveMenuItem = (item: IMenuItemForm): types.MenuItemActionTypes => ({
  type: types.SAVE_MENU_ITEM_REQUEST,
  payload: item,
});

const saveMenuItemSuccess = (): types.MenuItemActionTypes => ({
  type: types.SAVE_MENU_ITEM_SUCCESS,
});

const saveMenuItemError = (err: ErrorType): types.MenuItemActionTypes => ({
  type: types.SAVE_MENU_ITEM_ERROR,
  payload: err,
});

export default {
  fetchMenuItem,
  fetchMenuItemSuccess,
  fetchMenuItemError,
  saveMenuItem,
  saveMenuItemSuccess,
  saveMenuItemError,
};
