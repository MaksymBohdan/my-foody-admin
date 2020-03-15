import { takeLatest } from 'redux-saga/effects';
import types from './menu/types';
import { fetchMenuList } from './menu/sagas';

export default function* rootSaga() {
  yield takeLatest(types.FETCH_MENU_LIST_REQUEST, fetchMenuList);
}
