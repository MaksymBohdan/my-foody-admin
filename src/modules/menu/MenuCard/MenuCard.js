import React, { Fragment } from 'react';

const MenuCard = ({ name, image, price }) => (
  <Fragment>
    <p>Name: {name}</p>
    <img src={image} alt={name} width={320} height={240} />
    <p>Price: {price}</p>
  </Fragment>
);

export default MenuCard;
