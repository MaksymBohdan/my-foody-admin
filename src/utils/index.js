/* eslint-disable import/prefer-default-export */
import queryString from 'query-string';

export const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;
