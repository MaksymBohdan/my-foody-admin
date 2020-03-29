import { Action } from 'redux';
import { RouterState } from 'connected-react-router';
import { StateType as StateTypeItem } from './../state/item/types';
import { StateType as StateTypeList } from './../state/menu/types';

/* ITEM */
export interface IMenuItem {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string[];
}

export interface IMenuItemForm {
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string;
}

// STORE
export interface RootState {
  router: RouterState;
  menuItem: StateTypeItem;
  menuList: StateTypeList;
}

export type ErrorType = null | boolean;

export interface AppAction extends Action {
  payload?: any;
}
