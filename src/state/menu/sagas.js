import { call, put } from 'redux-saga/effects';
import { getAllMenuItems } from '../../services/api';
import { fetchMenuListSuccess, fetchMenuListError } from './actions';

export function* fetchMenuList() {
  try {
    const menuAll = yield call(getAllMenuItems);
    yield put(fetchMenuListSuccess(menuAll));
  } catch (err) {
    yield put(fetchMenuListError(err));
  }
}
