import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* components */
import MenuListView from './MenuListView';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorBoundary from '../../../components/ErrorBoundary.js/ErrorBoundary';
/* others */
import { menuActions, menuSelectors } from '../../../state/menu';
import { getCategoryFromProps, getFilteredList } from '../../../utils';

const MenuGridContainer = ({ history, location }) => {
  const dispatch = useDispatch();

  const list = useSelector(menuSelectors.menuList);
  const isLoading = useSelector(menuSelectors.loading);
  const error = useSelector(menuSelectors.error);

  const [category, setCategory] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [step, setStep] = useState(5);

  const isLoadable = step <= list.length;
  const filteredList = getFilteredList(list, searchValue, category, step);

  /*
   ** MENU LIST
   */
  useEffect(() => {
    dispatch(menuActions.fetchMenuList());
  }, [dispatch]);

  /*
   ** MANAGE CATEGORIES
   */
  useEffect(() => {
    const categoryUrl = getCategoryFromProps(location);

    if (!categoryUrl) {
      setCategory('all');
      return;
    }
    if (category !== categoryUrl) setCategory(categoryUrl);
  }, [location, category]);

  const changeCategory = currentCategory => {
    history.push({
      pathname: location.pathname,
      search: `category=${currentCategory}`,
    });
  };

  /*
   ** MANAGE SEARCH
   */
  const changeSearch = e => {
    setSearchValue(e.target.value);
  };

  /*
   ** MANAGE LOAD
   */
  const changeStep = () => isLoadable && setStep(prev => prev + 5);

  return (
    <ErrorBoundary outerError={error}>
      <Spinner isLoading={isLoading}>
        <MenuListView
          menuItems={filteredList}
          changeStep={changeStep}
          isLoadable={isLoadable}
          changeCategory={changeCategory}
          changeSearch={changeSearch}
          category={category}
          searchValue={searchValue}
        />
      </Spinner>
    </ErrorBoundary>
  );
};

export default MenuGridContainer;
