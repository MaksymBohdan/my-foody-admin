import { combineReducers } from 'redux';
import types from './types';

const list = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_MENU_LIST_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_MENU_LIST_ERROR:
      return payload;

    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case types.FETCH_MENU_LIST_REQUEST:
      return true;
    case types.FETCH_MENU_LIST_SUCCESS:
    case types.FETCH_MENU_LIST_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({ list, error, loading });
