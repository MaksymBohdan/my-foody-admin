import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

type ItemsType = {
  name: string;
  path: string;
  logo: any;
};

interface IMenuCmp {
  items: ItemsType[];
}

const MenuCmp: React.FC<IMenuCmp> = ({ items }) => {
  const defaultSelectedMenu: string = items[0].name;

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[defaultSelectedMenu]}
      mode="inline"
    >
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
