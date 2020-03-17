import queryString from 'query-string';

export const getCategoryFromProps = location =>
  queryString.parse(location.search).category;

export const getFilteredList = (list, search, currentCategory, step) =>
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

export const cutText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;
