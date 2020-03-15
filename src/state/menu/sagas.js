import { call, put } from 'redux-saga/effects';
import { getAllMenuItems } from '../../services/api';
import actions from './actions';

export function* fetchMenuList() {
  try {
    const menuAll = yield call(getAllMenuItems);
    yield put(actions.fetchMenuListSuccess(menuAll));
  } catch (err) {
    yield put(actions.fetchMenuListError(err));
  }
}
