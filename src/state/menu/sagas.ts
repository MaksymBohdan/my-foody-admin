import { IMenuItem } from './../../interfaces/index';
import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { getAllMenuItems } from '../../services/api';
import actions from './actions';

export function* fetchMenuList(): SagaIterator {
  try {
    const menuAll: IMenuItem[] = yield call(getAllMenuItems);

    yield put(actions.fetchMenuListSuccess(menuAll));
  } catch (err) {
    yield put(actions.fetchMenuListError(err));
  }
}
