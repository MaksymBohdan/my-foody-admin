import types from './types';

const fetchMenuList = () => ({
  type: types.FETCH_MENU_LIST_REQUEST,
});

const fetchMenuListSuccess = list => ({
  type: types.FETCH_MENU_LIST_SUCCESS,
  payload: list,
});

const fetchMenuListError = err => ({
  type: types.FETCH_MENU_LIST_ERROR,
  payload: err,
});

export default {
  fetchMenuList,
  fetchMenuListSuccess,
  fetchMenuListError,
};
