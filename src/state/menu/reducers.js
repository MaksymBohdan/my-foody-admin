import { combineReducers } from 'redux';
import {
  FETCH_MENU_LIST_SUCCESS,
  FETCH_MENU_LIST_REQUEST,
  FETCH_MENU_LIST_ERROR,
} from './types';

const list = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_MENU_LIST_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const error = (state = null, { type }) => {
  switch (type) {
    case FETCH_MENU_LIST_SUCCESS: {
      return null;
    }
    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case FETCH_MENU_LIST_REQUEST:
      return true;
    case FETCH_MENU_LIST_SUCCESS:
    case FETCH_MENU_LIST_ERROR:
      return false;
    default:
      return state;
  }
};

const menuListReducer = combineReducers({ list, error, loading });

export { menuListReducer };
