import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MenuListView from './MenuListView';
import { fetchMenuList } from '../../../state/menu/actions';
// import InputSearch from '../../../components/InputSearch/InputSearch';
// import CategorySelector from '../../../components/CategorySelector/CategorySelector';

// import * as API from '../../../services/api';
// import { getCategoryFromProps } from '../../../utils/index';
// state = {
//   loading: false,
//   error: null,
//   menuItems: [],
//   menuCategories: [],
//   filterValue: '',
// };

const MenuGridContainer = () => {
  const dispatch = useDispatch();

  // render() {
  //   const { menuItems, filterValue, menuCategories } = this.state;
  //   const filteredValue = this.handleFilterMenuItems(filterValue, menuItems);
  //   const currentCategory = getCategoryFromProps(this.props);
  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  return (
    <>
      <MenuListView menuItems={[]} />
    </>
  );
};
// }

export default withRouter(MenuGridContainer);

/* <InputSearch
filterValue={filterValue}
onChange={this.handleFilterValue}
/>
<CategorySelector
options={menuCategories}
onChange={this.handleCategorySelector}
value={currentCategory}
/> */

// async componentDidMount() {
//   this.setState({ loading: true });
//   const category = getCategoryFromProps(this.props);

//   this.handlePushToCategoryAll(category);
//   this.fetchCategoryAndMenuItem(category);
// }

// async componentDidUpdate(prevProps) {
//   const previousProps = getCategoryFromProps(prevProps);
//   const currentProps = getCategoryFromProps(this.props);

//   if (currentProps === previousProps) return;

//   this.handlePushToCategoryAll(currentProps);
//   this.fetchCategoryAndMenuItem(currentProps);
// }

// fetchCategoryAndMenuItem = category => {
//   Promise.all([API.getMenuItemsWithCategory(category), API.getCategories()])
//     .then(response => {
//       this.setState({
//         menuItems: response[0],
//         menuCategories: response[1],
//         loading: false,
//       });
//     })
//     .catch(error => this.setState({ error, loading: false }));
// };

// handleFilterMenuItems = (filterValue, menuItems) =>
//   menuItems.filter(item =>
//     item.name.toLowerCase().includes(filterValue.toLowerCase()),
//   );

// handleFilterValue = event =>
//   this.setState({ filterValue: event.target.value });

// handleCategorySelector = category => {
//   const { history, location } = this.props;

//   history.push({
//     pathname: location.pathname,
//     search: `category=${category}`,
//   });
// };

// handlePushToCategoryAll = category => {
//   const { history, location } = this.props;

//   if (category) return;

//   history.push({
//     pathname: location.pathname,
//     search: `category=all`,
//   });
// };
