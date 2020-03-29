import { IMenuItem, ErrorType } from './../../interfaces/index';
import * as types from './types';

const fetchMenuList = (): types.MenuListActionTypes => ({
  type: types.FETCH_MENU_LIST_REQUEST,
});

const fetchMenuListSuccess = (
  list: IMenuItem[],
): types.MenuListActionTypes => ({
  type: types.FETCH_MENU_LIST_SUCCESS,
  payload: list,
});

const fetchMenuListError = (err: ErrorType): types.MenuListActionTypes => ({
  type: types.FETCH_MENU_LIST_ERROR,
  payload: err,
});

export default {
  fetchMenuList,
  fetchMenuListSuccess,
  fetchMenuListError,
};
