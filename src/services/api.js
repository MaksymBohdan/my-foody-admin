import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export const getAllMenuItems = async () => {
  const response = await axios.get('/menu');

  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get('/categories');

  return response.data;
};

export const getMenuItemsWithCategory = async category => {
  if (category === 'all') {
    return getAllMenuItems();
  }

  const response = await axios.get(`/menu?category=${category}`);

  return response.data;
};
