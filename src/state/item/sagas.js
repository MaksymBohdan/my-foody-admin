import { call, put } from 'redux-saga/effects';
import { getMenuItem, saveMenuItem } from '../../services/api';
import actions from './actions';

export function* fetchMenuItem({ payload: id }) {
  try {
    const item = yield call(getMenuItem, id);
    yield put(actions.fetchMenuItemSuccess(item));
  } catch (err) {
    yield put(actions.fetchMenuItemError(err));
  }
}

export function* addMenuItem({ payload }) {
  const { history, item } = payload;

  try {
    const itemNew = yield call(saveMenuItem, item);
    const { id } = itemNew;

    yield put(actions.saveMenuItemSuccess());
    yield call(history.push, `/menu/${id}`);
  } catch (err) {
    yield put(actions.saveMenuItemError(err));
  }
}
