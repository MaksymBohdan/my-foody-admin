import {
  FETCH_MENU_LIST_REQUEST,
  FETCH_MENU_LIST_SUCCESS,
  FETCH_MENU_LIST_ERROR,
} from './types';

export const fetchMenuList = () => ({
  type: FETCH_MENU_LIST_REQUEST,
});

export const fetchMenuListSuccess = list => ({
  type: FETCH_MENU_LIST_SUCCESS,
  payload: list,
});

export const fetchMenuListError = err => ({
  type: FETCH_MENU_LIST_ERROR,
  payload: err,
});
