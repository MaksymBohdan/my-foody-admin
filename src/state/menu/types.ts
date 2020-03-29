import { AppAction, IMenuItem, ErrorType } from './../../interfaces/index';
export const FETCH_MENU_LIST_REQUEST = 'FETCH_MENU_LIST_REQUEST';
export const FETCH_MENU_LIST_SUCCESS = 'FETCH_MENU_LIST_SUCCESS';
export const FETCH_MENU_LIST_ERROR = 'FETCH_MENU_LIST_ERROR';

/* types */
interface FetchMenuListRequestType extends AppAction {
  type: typeof FETCH_MENU_LIST_REQUEST;
}

interface FetchMenuListSuccessType extends AppAction {
  type: typeof FETCH_MENU_LIST_SUCCESS;
  payload: IMenuItem[];
}

interface FetchMenuListErrorType extends AppAction {
  type: typeof FETCH_MENU_LIST_ERROR;
  payload: ErrorType;
}

export type MenuListActionTypes =
  | FetchMenuListRequestType
  | FetchMenuListSuccessType
  | FetchMenuListErrorType;

export type StateType = {
  readonly list: IMenuItem[];
  readonly error: ErrorType;
  readonly loading: boolean;
};
