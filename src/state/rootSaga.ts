import { takeLatest } from 'redux-saga/effects';
import * as menuTypes from './menu/types';
import * as itemTypes from './item/types';
import { fetchMenuList } from './menu/sagas';
import { fetchMenuItem, addMenuItem } from './item/sagas';

export default function* rootSaga() {
  yield takeLatest(menuTypes.FETCH_MENU_LIST_REQUEST, fetchMenuList);
  yield takeLatest(itemTypes.FETCH_MENU_ITEM_REQUEST, fetchMenuItem);
  yield takeLatest(itemTypes.SAVE_MENU_ITEM_REQUEST, addMenuItem);
}
