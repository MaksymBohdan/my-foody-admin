import { RouteProps } from 'react-router-dom';
import queryString from 'query-string';
import { IMenuItem } from './../interfaces';

type LocationType = RouteProps['location'];

export const getCategoryFromProps = (location: LocationType) =>
  queryString.parse(location!.search).category;

export const getFilteredList = (
  list = [] as IMenuItem[],
  search: string,
  currentCategory: string,
  step: number,
) =>
  currentCategory === 'all'
    ? list
        .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
        .slice(0, step)
    : list
        .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
        .filter(({ category }) =>
          category.toLowerCase().includes(currentCategory.toLowerCase()),
        )
        .slice(0, step);

export const cutText = (text: string, limit: number): string =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const numberFormatter = (value: number | string | undefined): string =>
  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const numberParser = (value: string | undefined): number | string =>
  value!.replace(/\$\s?|(,*)/g, '');
