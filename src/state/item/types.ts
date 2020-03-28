import { Action } from 'redux';
import { IMenuItem, IMenuItemForm } from './../../interfaces/index';

export const FETCH_MENU_ITEM_REQUEST = 'FETCH_MENU_ITEM_REQUEST';
export const FETCH_MENU_ITEM_SUCCESS = 'FETCH_MENU_ITEM_SUCCESS';
export const FETCH_MENU_ITEM_ERROR = 'FETCH_MENU_ITEM_ERROR';

export const SAVE_MENU_ITEM_REQUEST = 'SAVE_MENU_ITEM_REQUEST';
export const SAVE_MENU_ITEM_SUCCESS = 'SAVE_MENU_ITEM_SUCCESS';
export const SAVE_MENU_ITEM_ERROR = 'SAVE_MENU_ITEM_ERROR';

/* types */
interface AppAction extends Action {
  payload?: any;
}

interface FetchItemType extends AppAction {
  type: typeof FETCH_MENU_ITEM_REQUEST;
  payload: number;
}

interface ItemActionType extends AppAction {
  type: typeof FETCH_MENU_ITEM_SUCCESS;
  payload: IMenuItem;
}

interface ActionErrorType extends AppAction {
  type: typeof FETCH_MENU_ITEM_ERROR | typeof SAVE_MENU_ITEM_ERROR;
  payload: boolean;
}

interface ActionSaveMenuItemRequest extends AppAction {
  type: typeof SAVE_MENU_ITEM_REQUEST;
  payload: IMenuItemForm;
}

interface ActionSaveMenuItemSuccess extends AppAction {
  type: typeof SAVE_MENU_ITEM_SUCCESS;
}

export type MenuItemActionTypes =
  | FetchItemType
  | ItemActionType
  | ActionErrorType
  | ActionSaveMenuItemRequest
  | ActionSaveMenuItemSuccess;

export type ErrorType = null | boolean;

export type StateType = {
  readonly item: IMenuItem;
  readonly error: ErrorType;
  readonly loading: boolean;
};
