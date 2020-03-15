import { combineReducers } from 'redux';
import types from './types';

const item = (state = {}, { type, payload }) => {
  switch (type) {
    case types.FETCH_MENU_ITEM_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_MENU_ITEM_ERROR:
      return payload;

    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case types.FETCH_MENU_ITEM_REQUEST:
      return true;
    case types.FETCH_MENU_ITEM_SUCCESS:
    case types.FETCH_MENU_ITEM_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({ item, error, loading });
