import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const MenuCmp = ({ items }) => {
  const defaultSelectedMenu = items[0].name;

  return (
    <Menu theme="dark" defaultSelectedKeys={defaultSelectedMenu} mode="inline">
      {items.map(item => (
        <Menu.Item key={item.name}>
          <NavLink to={item.path}>
            {item.logo}
            <span> {item.name}</span>
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuCmp;
