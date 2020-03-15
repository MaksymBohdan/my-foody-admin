const menuList = state => state.menuList.list;
const error = state => state.menuList.error;
const loading = state => state.menuList.loading;

export default { menuList, error, loading };
