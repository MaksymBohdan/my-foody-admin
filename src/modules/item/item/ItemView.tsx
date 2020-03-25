import React from 'react';

interface ItemType {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  ingredients: string[];
}

const ItemView: React.FC<{ item: ItemType }> = ({ item }) => {
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
