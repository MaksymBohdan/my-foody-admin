import React from 'react';
import { Link } from 'react-router-dom';
import MenuCard from '../MenuCard/MenuCard';
import routes from '../../../configs/routes';

const MenuGridView = ({ menuItems, ...props }) => (
  <ul>
    {menuItems.map(({ name, price, id, image }) => (
      <li key={id}>
        <Link
          to={{
            pathname: `${routes.MENU}/${id}`,
            state: { from: props.location },
          }}
        >
          <MenuCard name={name} price={price} id={id} image={image} />
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuGridView;
