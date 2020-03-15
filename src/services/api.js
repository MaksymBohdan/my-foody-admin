import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export const getAllMenuItems = async () => {
  const response = await axios.get('/menu');

  return response.data;
};

export const getMenuItem = async id => {
  const response = await axios.get(`/menu/${id}`);

  return response.data;
};
