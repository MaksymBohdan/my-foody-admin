import { call, put } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { push } from 'connected-react-router';
/* others */
import actions from './actions';
import { MenuItemActionTypes } from './types';
import { getMenuItem, saveMenuItem } from '../../services/api';
import { IMenuItem } from './../../interfaces/';

export function* fetchMenuItem({ payload }: MenuItemActionTypes): SagaIterator {
  try {
    const item: IMenuItem = yield call(getMenuItem, payload);

    yield put(actions.fetchMenuItemSuccess(item));
  } catch (err) {
    yield put(actions.fetchMenuItemError(err));
  }
}

export function* addMenuItem({ payload }: MenuItemActionTypes): SagaIterator {
  try {
    const itemNew: IMenuItem = yield call(saveMenuItem, payload);
    const { id } = itemNew;

    yield put(actions.saveMenuItemSuccess());
    yield put(push(`/menu/${id}`));
  } catch (err) {
    yield put(actions.saveMenuItemError(err));
  }
}
