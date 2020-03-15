import queryString from 'query-string';

export const getCategoryFromProps = location =>
  queryString.parse(location.search).category;

export const getFilteredList = (list, search, currentCategory) => {
  if (currentCategory === 'all')
    return list.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase()),
    );

  return list
    .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    .filter(({ category }) =>
      category.toLowerCase().includes(currentCategory.toLowerCase()),
    );
};
