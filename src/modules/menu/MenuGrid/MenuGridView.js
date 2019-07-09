import React from 'react';

const MenuGridView = ({ menuItems }) => {
  return <div>{menuItems && menuItems[0].id}</div>;
};

export default MenuGridView;
