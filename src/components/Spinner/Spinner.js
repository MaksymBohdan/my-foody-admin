import React from 'react';

const Spinner = ({ isLoading, children }) =>
  isLoading ? <h1>LOADING...</h1> : children;

export default Spinner;
