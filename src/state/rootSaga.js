import { takeLatest } from 'redux-saga/effects';
import menuTypes from './menu/types';
import itemTypes from './item/types';
import { fetchMenuList } from './menu/sagas';
import { fetchMenuItem } from './item/sagas';

export default function* rootSaga() {
  yield takeLatest(menuTypes.FETCH_MENU_LIST_REQUEST, fetchMenuList);
  yield takeLatest(itemTypes.FETCH_MENU_ITEM_REQUEST, fetchMenuItem);
}
