import { takeLatest } from 'redux-saga/effects';
import { FETCH_MENU_LIST_REQUEST } from './menu/types';
import { fetchMenuList } from './menu/sagas';

export default function* rootSaga() {
  yield takeLatest(FETCH_MENU_LIST_REQUEST, fetchMenuList);
}
