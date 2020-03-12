import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';
import * as API from '../../../services/api';

import MenuGridView from './MenuListView';
import InputSearch from '../../../components/InputSearch/InputSearch';
import CategorySelector from '../../../components/CategorySelector/CategorySelector';

import routes from '../../../configs/routes';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuListContainer extends Component {
  state = {
    loading: false,
    error: null,
    menuItems: [],
    menuCategories: [],
    filterValue: '',
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const category = getCategoryFromProps(this.props);

    this.handlePushToCategoryAll(category);
    this.fetchCategoryAndMenuItem(category);
  }

  async componentDidUpdate(prevProps) {
    const previousProps = getCategoryFromProps(prevProps);
    const currentProps = getCategoryFromProps(this.props);

    if (currentProps === previousProps) return;

    this.handlePushToCategoryAll(currentProps);
    this.fetchCategoryAndMenuItem(currentProps);
  }

  fetchCategoryAndMenuItem = category => {
    Promise.all([API.getMenuItemsWithCategory(category), API.getCategories()])
      .then(response => {
        this.setState({
          menuItems: response[0],
          menuCategories: response[1],
          loading: false,
        });
      })
      .catch(error => this.setState({ error, loading: false }));
  };

  handleFilterMenuItems = (filterValue, menuItems) =>
    menuItems.filter(item =>
      item.name.toLowerCase().includes(filterValue.toLowerCase()),
    );

  handleFilterValue = event =>
    this.setState({ filterValue: event.target.value });

  handleCategorySelector = category => {
    const { history, location } = this.props;

    history.push({
      pathname: location.pathname,
      search: `category=${category}`,
    });
  };

  handlePushToCategoryAll = category => {
    const { history, location } = this.props;

    if (category) return;

    history.push({
      pathname: location.pathname,
      search: `category=all`,
    });
  };

  render() {
    const {
      menuItems,
      filterValue,
      loading,
      menuCategories,
      error,
    } = this.state;
    const filteredValue = this.handleFilterMenuItems(filterValue, menuItems);
    const currentCategory = getCategoryFromProps(this.props);

    return (
      <Fragment>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error...</h1>}
        <Link to={routes.MENU_ITEM_NEW}>Add new order</Link>
        <InputSearch
          filterValue={filterValue}
          onChange={this.handleFilterValue}
        />
        <CategorySelector
          options={menuCategories}
          onChange={this.handleCategorySelector}
          value={currentCategory}
        />
        <MenuGridView menuItems={filteredValue} {...this.props} />
      </Fragment>
    );
  }
}

export default withRouter(MenuListContainer);
