import { RootState } from './../../interfaces';

const item = (state: RootState) => state.menuItem.item;
const error = (state: RootState) => state.menuItem.error;
const loading = (state: RootState) => state.menuItem.loading;

export default {
  item,
  error,
  loading,
};
