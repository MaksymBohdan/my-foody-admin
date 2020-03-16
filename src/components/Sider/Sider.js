import React from 'react';
import { Layout } from 'antd';

const Sider = ({ children, collapsed, onCollapse }) => (
  <Layout.Sider
    collapsible
    collapsed={collapsed}
    onCollapse={onCollapse}
    style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
    }}
  >
    {children}
  </Layout.Sider>
);

export default Sider;
