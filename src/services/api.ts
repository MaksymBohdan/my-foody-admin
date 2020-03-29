import axios from 'axios';
import { IMenuItemForm, IMenuItem } from './../interfaces';

axios.defaults.baseURL = 'http://localhost:8000';

export const getAllMenuItems = async () => {
  const response = await axios.get<IMenuItem[]>('/menu');

  return response.data;
};

export const getMenuItem = async (id: number) => {
  const response = await axios.get<IMenuItem>(`/menu/${id}`);

  return response.data;
};

export const saveMenuItem = async (item: IMenuItemForm) => {
  const response = await axios.post<IMenuItem>('/menu', item);

  return response.data;
};
