import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* others */
import { itemActions, itemSelectors } from '../../state/item';
import ErrorBoundary from '../../components/ErrorBoundary.js/ErrorBoundary';
import Spinner from '../../components/Spinner/Spinner';
import ItemView from './ItemView';

const ItemContainer = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const item = useSelector(itemSelectors.item);
  const isLoading = useSelector(itemSelectors.loading);
  const error = useSelector(itemSelectors.error);

  useEffect(() => {
    dispatch(itemActions.fetchMenuItem(id));
  }, [dispatch, id]);

  return (
    <ErrorBoundary outerError={error}>
      <Spinner isLoading={isLoading}>
        <ItemView item={item} />
      </Spinner>
    </ErrorBoundary>
  );
};

export default ItemContainer;
