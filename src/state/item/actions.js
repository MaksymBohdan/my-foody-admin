import types from './types';

const fetchMenuItem = id => ({
  type: types.FETCH_MENU_ITEM_REQUEST,
  payload: id,
});

const fetchMenuItemSuccess = item => ({
  type: types.FETCH_MENU_ITEM_SUCCESS,
  payload: item,
});

const fetchMenuItemError = err => ({
  type: types.FETCH_MENU_ITEM_ERROR,
  payload: err,
});

const saveMenuItem = item => ({
  type: types.SAVE_MENU_ITEM_REQUEST,
  payload: item,
});

const saveMenuItemSuccess = () => ({
  type: types.SAVE_MENU_ITEM_SUCCESS,
});

const saveMenuItemError = err => ({
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
