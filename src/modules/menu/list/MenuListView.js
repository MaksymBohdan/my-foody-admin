import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../configs/routes';

const MenuListView = ({ menuItems, ...props }) => (
  <ul>
    {menuItems.map(({ name, price, id, image }) => (
      <li key={id}>
        <Link
          to={{
            pathname: `${routes.MENU}/${id}`,
            state: { from: props.location },
          }}
        >
          <>
            <p>Name: {name}</p>
            <img src={image} alt={name} width={320} height={240} />
            <p>Price: {price}</p>{' '}
          </>
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuListView;
