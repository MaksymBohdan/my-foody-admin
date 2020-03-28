import React from 'react';

interface ISpinner {
  isLoading: boolean ;
  children?: React.ReactNode;
}

const Spinner: React.FC<ISpinner> = ({ isLoading, children }) => (
  <> {isLoading ? <h1>LOADING...</h1> : children}</>
);

export default Spinner;
