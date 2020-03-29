import { RootState } from './../../interfaces';

const menuList = (state: RootState) => state.menuList.list;
const error = (state: RootState) => state.menuList.error;
const loading = (state: RootState) => state.menuList.loading;

export default { menuList, error, loading };
