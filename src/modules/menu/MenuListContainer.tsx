import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
/* components */
import MenuListView from './MenuListView';
import Spinner from '../../components/Spinner/Spinner';
import ErrorBoundary from '../../components/ErrorBoundary.js/ErrorBoundary';
/* others */
import { menuActions, menuSelectors } from '../../state/menu';
import { getCategoryFromProps, getFilteredList } from '../../utils';
import { IMenuItem } from '../../interfaces';

const MenuGridContainer: React.FC<RouteComponentProps> = ({
  history,
  location,
}) => {
  const dispatch = useDispatch();

  const list = useSelector(menuSelectors.menuList);
  const isLoading = useSelector(menuSelectors.loading);
  const error = useSelector(menuSelectors.error);

  const [category, setCategory] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [step, setStep] = useState<number>(5);

  const isLoadable: boolean = step <= list.length;
  const filteredList: IMenuItem[] = getFilteredList(
    list,
    searchValue,
    category,
    step,
  );

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
    const categoryUrl: any = getCategoryFromProps(location);

    if (!categoryUrl) {
      setCategory('all');
      return;
    }
    if (category !== categoryUrl) setCategory(categoryUrl);
  }, [location, category]);

  const changeCategory = (currentCategory: string) => {
    history.push({
      pathname: location.pathname,
      search: `category=${currentCategory}`,
    });
  };

  /*
   ** MANAGE SEARCH
   */
  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  /*
   ** MANAGE LOAD
   */
  const changeStep = () => isLoadable && setStep(prev => prev + 5);

  return (
    <ErrorBoundary outerError={error}>
      <Spinner isLoading={isLoading}>
        <MenuListView
          changeStep={changeStep}
          isLoadable={isLoadable}
          changeCategory={changeCategory}
          changeSearch={changeSearch}
          category={category}
          searchValue={searchValue}
          menuItems={filteredList}
          location={location}
        />
      </Spinner>
    </ErrorBoundary>
  );
};

export default MenuGridContainer;
