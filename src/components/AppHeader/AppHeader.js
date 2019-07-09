import React from 'react';
import { NavLink } from 'react-router-dom';
import items from '../../configs/nav-items';

const AppHeader = () => {
  return (
    <div>
      <ul>
        {items.map(i => (
          <li key={i.name}>
            <NavLink to={i.path}>{i.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppHeader;
