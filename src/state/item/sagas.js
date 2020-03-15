import { call, put } from 'redux-saga/effects';
import { getMenuItem } from '../../services/api';
import actions from './actions';

export function* fetchMenuItem({ payload: id }) {
  try {
    const item = yield call(getMenuItem, id);
    yield put(actions.fetchMenuItemSuccess(item));
  } catch (err) {
    yield put(actions.fetchMenuItemError(err));
  }
}
