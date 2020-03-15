import React from 'react';

const ItemView = ({ item }) => {
  const { id, description, name, image } = item || {};

  return (
    <>
      <h1>
        {name}: {id}
      </h1>
      <img src={image} width="200" height="200" alt="food" />
      <p>{description}</p>
    </>
  );
};

export default ItemView;
